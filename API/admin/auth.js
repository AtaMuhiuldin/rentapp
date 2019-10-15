const Router = require('express').Router();
const {  Admin } = require('../../models');
const bcrypt = require('bcryptjs');

Router.post("/signup", (req, res) => {
    const {landload} = req.body;
    let newAdmin = new Admin({
        fName: landload.fName, 
        lName: landload.lName, 
        DOB: landload.DOB, 
        email: landload.email, 
        mobile: landload.mobile
    })


    Admin.findOne({email: landload.email})
        .then(admin =>{
            if(admin){
                return res.json({msg: "user already exists", success: false}).status(500);
            }else{

                bcrypt.genSalt(10, (err, salt) =>{
                    if(err) {
                        console.log(err);
                        return res.json({msg: "encryption error", success: false}).status(500);
                    }
                    bcrypt.hash(landload.password, salt, (err, hash) =>{
                        if(err){
                            console.log(err);
                            return res.json({msg: "encryption error", success: false}).status(500);
                        }
                        newAdmin.password = hash;
                        newAdmin.save() 
                        .then(sAdmin =>{
                            return res.json({landload: sAdmin, success: true}).status(200);
                        }).catch(err => {
                            console.log(err);
                            return res.json({msg: "not saved error", success :false}).status(500);
                        })
                
                    })
                })
            }
        }).catch(err => {
            console.log(err); 
            return res.json({msg: "not found error", success: false}).status(500);
        })

  
})

Router.post("/login", (req, res) =>{
    const {email, password } = req.body;
    Admin.findOne({email: email})
        .then(landload =>{
            if(landload){
                   bcrypt.compare(password, landload.password)
                    .then(isMatch => {
                        if(isMatch){    
                            return res.json({msg: "logged in", success: true}).status(200);
                        }else{
                            return res.json({msg: "invalid password", success: false }).status(404);
                        }
                    }).catch(err =>{
                        console.log(err);
                        return res.json({msg: "encryption error", success: false}).status(500);
                    })
            }else{
                return res.json({msg: "email not found", success: false}).status(404);
            }
        })
})


module.exports = Router;