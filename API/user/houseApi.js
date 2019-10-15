const Router = require("express").Router();
const House = require("../../models/houseModel");

////////////////////////////////// Individual house//////////////////////////////////////////
Router.post ("/single-house-info" , (req, res) => {
    const { houseId } = req.body;

    House.findOne({ _id : houseId })
    .then( fHouse => {
        if(fHouse !== null){
            return res.json({ msg: "House Found" , houseDetails: fHouse , success: true}).status(200);
        }
        else{
            return res.json({ msg : "No house found!" , success : false}).status(400);
        }
      }).catch( err => {
          return res.json ({ msg :"error found" , success: false }).status(404);
      })
})







////////////////////////////////// Houses LIST//////////////////////////////////////////
Router.post ( "/allHouses" , (req,res) => {
    House.find()
    .then( housesList => {
        return res.json ({msg : "Houses List" , houseList: housesList, success: true }).status(200);
    })
    .catch( err =>{
        return res.json({ msg: "error found" , success : false }).status(404);
    })
})

//////////////////////////////////search Individual House//////////////////////////////////////////
Router.post ("/searchHouse" ,(req, res) =>{
    const { search } = req.body;
    
    House.find({ houseTitle :  new RegExp(search, "i") })
    .then( fSearch => { 
    
            return res.json({ msg: "Search Found" , house: fSearch , success: true}).status(200);
     
    })
    .catch( err => {
        return res.json({ msg: "error" , error: err}).status(404);
    })
})


module.exports = Router;