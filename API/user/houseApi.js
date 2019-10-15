const Router = require("express").Router();
const House = require("../../models/houseModel");
Router.post ( "/allHouses" , (req,res) => {
    House.find()
    .then( housesList => {
        return res.json ({msg : "Houses List" , houseList: housesList, success: true }).status(200);
    })
    .catch( err =>{
        return res.json({ msg: "error found" , success : false }).status(404);
    })
})


module.exports = Router;