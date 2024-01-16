const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    bookType:{
        type:String,
        require:true
    },
    bookName:{
        type:String,
        require:true, 
    },
    authorName:{
        type:String,
        require:true, 
    },
    noofBooks:{
        type:Number,
        require:true
    },
    edition:{
        type:String, 
    },
},
{timestamps:true});

const BOOK = mongoose.model("book" , bookSchema);

module.exports = BOOK;