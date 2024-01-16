const express = require('express');
const { signupHandler, loginHandler } = require('../controller/authHandler');

const router = express.Router();


router.post('/api/signup' , signupHandler )
router.post('/api/login' , loginHandler )

module.exports = router;