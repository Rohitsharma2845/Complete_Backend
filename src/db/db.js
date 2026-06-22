//  is file k andar hm logic likhte h server ko database se connect krne k liye

// mongoose package is required to connect server to database

const mongoose = require('mongoose');

async function connectDB() {
    // this method connect server to actual database
    await mongoose.connect("mongodb+srv://yt:uOPM7hbDHhnnFOCh@completebackend.hnevqzb.mongodb.net/DBname");
    console.log("Connected to DB");
}

module.exports = connectDB; 

