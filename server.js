const express = require('express');
const path = require('path') 
const bookRoute = require('./routes/bookRoute')
const staticRoute = require('./routes/staticRoute');
const authRoute = require('./routes/authRoute');
const { connectmongoDB } = require('./connection');
const cors = require('cors');
const { authenticateToken } = require('./middelware/authMiddelware');



const app = express();
const PORT = 3000;

// ejs setup
app.set('view engine' , 'ejs');
app.set('views' , path.resolve("./views"))



//middelwares 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());



//routes
app.use('/auth' , authRoute)
app.use('/book' , authenticateToken , bookRoute);
app.use('/' , staticRoute);



//PORT
app.listen( PORT , console.log("Server Start at Port 3000"));



//DBConnection 
connectmongoDB("mongodb://127.0.0.1:27017/library")
  .then(() => {
    console.log("DB connected Succesfully");
  })
  .catch((err) => {
    console.log("Error in DB connection");
  });


