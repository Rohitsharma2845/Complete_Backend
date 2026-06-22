const express = require('express');
const noteModel = require("./db/models/note.model");

const app = express();
app.use(express.json());
/*

HM API CREATE KRNE K LIYE USE KR RHE H POSTMAN APP KA 

Four Api's used :

POST /notes => create a note
GET /notes => Get all notes
DELETE /notes:id => Delete a note
PATCH /notes:id => Update a note
*/

app.post("/notes", async (req,res) => {
    const data = req.body /* {title ,description }*/
    await noteModel.create({
        title : data.title,
        description : data.description 
    });

    res.status(201).json({
        message: "Note Created"
    });
}); 

app.get("/notes",async(req,res)=>{

    const notes = await noteModel.find(); //[] return array of objects and it returns all

    // const notes = await noteModel.findOne({

        // return only single objects
        // title : "test_title"

        // if u give a conndition that does not exist in the database it will simply return null
        // for example

        // title : "test_title_5"

        /*

        find => [{},{}] or []
        findOne => {} or null
        
        */
    // });  

    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes
    })

});

app.delete("/notes/:id", async (req,res)=> {

    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id : id  // _id isliye h yha pe kyoki id jo databse me save hoti h woh _id k naam se hoti h 
    })
    
    res.status(200).json({
        message : "Node Deleted Successfully"
    })
});

app.patch("/notes/:id",async(req,res) => {
    const id = req.params.id

    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id : id
    },{
        description : description
    })  // it ask for 2 objects -> 1st object mein hm bta rhe hote h ki -> kiske basis pe find krna h -> 2nd object m hm bta rhe hote h k => kya exactly update krna h 

    res.status(200).json({
        message : "Note Updated Successfully"
    })

})
module.exports = app;





