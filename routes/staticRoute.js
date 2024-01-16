const express = require('express');
const BOOK = require('../model/bookModel');

const router = express.Router();

router.get('/admin' , async (req , res) =>{

    const allBooks = await BOOK.find({});
    return res.render('admin' , {
        books: allBooks
    })

})

router.get('/add' , (req , res) =>{
    return res.render('addBook')
})

router.get('/delete' , (req , res) =>{
    return res.render('deleteBook')
})

router.get('/update' , (req , res) =>{
    return res.render('update')
})


//static registration , login , HOME
router.get('/' , async (req , res) => {
    return res.render('index.ejs');
})
router.get('/login' , async (req , res) => {
    return res.render('login.ejs');
})
router.get('/signup' , async (req , res) => {
    return res.render('signup.ejs');
})

module.exports = router;