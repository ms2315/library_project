const express = require('express');
const { addBookHandler, deleteBookHandler, updateBookHandler ,} = require('../controller/bookHandler');

const router = express.Router();


router.post('/add' , addBookHandler)

router.post('/delete' , deleteBookHandler)

router.post('/update' , updateBookHandler)


module.exports = router;