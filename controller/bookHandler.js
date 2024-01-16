const BOOK = require("../model/bookModel");

async function addBookHandler(req, res) {
  const { bookName, bookType, authorName, ediition, noofBooks } = req.body;

  if (!bookName || !bookType || !authorName || !noofBooks) {
    return res.render("addBook");
  }

  await BOOK.create({
    bookName,
    bookType,
    authorName,
    ediition,
    noofBooks,
  });

  return res.redirect("/admin");
}

async function deleteBookHandler(req, res)
{
    console.log("BEFORE BEFORE")
    const { bookName, bookType } = req.body;


    if (!bookName || !bookType) {
        return res.render("deleteBook");
    }

    console.log("BEFORE")

    await BOOK.findOneAndDelete({bookName, bookType});

    console.log("AFTER")

    return res.redirect("/admin");
    
}

async function updateBookHandler(req, res) {
    const { bookName, bookType, authorName, edition, noofBooks } = req.body;
  
    if (!bookName || !bookType) {
      return res.render("update", { error: "Book Name and Book Type are required." });
    }
  
    try {
      const existingBook = await BOOK.findOne({ bookName, bookType });
  
      if (!existingBook) {
        return res.render("updateBook", { error: "Book not found." });
      }
  
      // Update the fields if they are provided in the request body
      if (authorName) {
        existingBook.authorName = authorName;
      }
  
      if (edition) {
        existingBook.edition = edition;
      }
  
      if (noofBooks) {
        existingBook.noofBooks = noofBooks;
      }
  
      // Save the updated book
      await existingBook.save();
  
      return res.redirect("/admin");
    } 
    catch (error) {
      console.error("Error updating book:", error);
      return res.render("updateBook", { error: "An error occurred while updating the book." });
    }
  }
  



module.exports = {addBookHandler , deleteBookHandler , updateBookHandler};
