// Define mongoose schema and model for User

const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {type:String
    },
    password: {String},
    role: String, // 'admin' or 'user'
  });


  const USER = mongoose.model("user" , userSchema);

  module.exports = USER;