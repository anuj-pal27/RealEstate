const express = require("express")
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!').catch(()=>{console.log("error while connection database")}));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

