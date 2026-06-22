const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title : String,
    description : String
});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel ;


/* 
CRUD OPERATIONS
Create -> post
Read -> Get
Update -> Patch
Delete -> Delete

*/