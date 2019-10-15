const Router = require("express").Router();
const Complaint = require('../../models/complaintsModel');;
const Admin = require('../../models/adminModel');
const User = require('../../models/userModel');
const Rental = require('../../models/rentalModel');
Router.post ("/send-complaint" , (req, res)=>{
    const { complaint } = req.body;
    
    Rental.find()
    .then( fRental => {
        return res.json({ msg: "rental", rental: fRental}).status(200);
    })
    .catch( err => {
        return res.json({ msg: "error", error: err}).status(400);
    })
   
    // complaint.tenantId
    // complaint.rentalId
    // Admin.findOne({ _id:  complaint.landlordId})
    // .then( fAdmin =>{
    //     if(fAdmin){
    //         User.findOne( { _id: complaint.tenantId })
    //         .then( fUser=>  {
    //             if(fUser){
    //                 Rental.findOne({ _id: complaint.rentalId})
    //                 .then( fRental => {
    //                     if ( fRental ){
    //                 if( complaint.complaintTitle === "" || complaint.ComplaintDescription === ""){
    //                     let nComplaint = new Complaint({
    //                         adminId: complaint.landlordId,
    //                         userId: complaint.tenantId,
    //                         rentalId: complaint.rentalId,
    //                         complaintTitle:complaint.complaintTitle,
    //                         ComplaintDescription :complaint.ComplaintDescription
    //                     })
    //                     nComplaint.save()
    //                     .then( sComplaint => {
    //                         if( sComplaint !== null ){
    //                             return res.json({ msg: "Your Complaint Registered Succesfully!", success: true }).status(200);
    //                         }
    //                         else{
    //                             return res.json({ msg: "Complaint not Registrered!", success:false}).status(404);
    //                         }
    //                     })
    //                 }
    //                 else{
    //                     return res.json({ msg: "Complaint has missing Details!", success: false}).status(404);
    //                 }
    //                     }
    //                     else{
    //                         return res.json ({ msg: "Rental Not found" , success : false}).status(404);
    //                     }
    //                 })

    //             }
    //             else{
    //                 return res.json({ msg: "User Not found", success:false}).status(404);
    //             }
    //         })
    //     }else{
    //         return res.json({ msg: "Invalid Admin!", success: false}).status(404);
    //     }
    // })
    // .catch( err => {
    //     console.log(err);
    //     return res.json({ msg: "Error Found!", success:false}).status(400);
    // })
})



module.exports = Router;