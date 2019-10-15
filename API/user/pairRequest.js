const Router = require("express").Router();
const Pair = require("../../models/pairsModel");
const Admin = require("../../models/adminModel"); //5da56fd0863cd91d98adafc1
const User = require('../../models/userModel');
const House = require("../../models/houseModel");

Router.post ( "/send-pair-request" , (req, res) => {
    const { pairRequest } = req.body;

    Admin.findOne({ _id :  pairRequest.landlordId })
    .then( fAdmin => {
        if (fAdmin !== null){
            User.findOne({ _id: pairRequest.tenantId})
            .then( fUser =>{
                if (fUser){
                    House.findOne({ _id : pairRequest.houseId})
                    .then( fHouse => {
                        if (fHouse){
                            let nPair = new Pair({
                                adminId: pairRequest.LandlordId,
                                userId: pairRequest.tenantId,
                                houseId: pairRequest.houseId,
                                pairStatus: false
                            });

                            nPair.save()
                            .then( sPair => {
                                if(sPair !== null){
                                    return res.json({ msg: "Pair Request Sent!" ,pair: sPair, success: true }).status(200);
                                }else{
                                    return res.json({ msg: "Request Failed!"}).status(400);
                                }
                            })
                        }else{
                            return res.json({ msg: "Invalid House Entry!" , success : false}).status(404);
                        }
                     })
                     .catch( err => {

                     })
                   
                    .catch( err =>{ 
                        console.log(err);
                        return res.json({ msg: "Error Found!", success : false}).status(404);
                    })

                }else{
                    return res.json({ msg: "Invalid User!"}).status(404);
                }
            })
            .catch( err =>{

            })

        }
        else{
            return res.json ({ msg: "Invalid Admin", success: false}).status(404);
        }
    })
    .catch( err=> {
        console.log( err );
        return res.json({ msg: "Not found" , success: false}).status(404);
    })
                   
}) 



module.exports = Router;