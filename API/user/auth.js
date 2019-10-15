const Router = require('express').Router();
const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');



//////////////////////////////////register//////////////////////////////////////////
Router.post("/regTanent" , (req, res) => {
    const { tenant } = req.body ;

    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    // let validationMessage = "" ;

    // if( user.fName === "" ){
    //     validationMessage  = "Inavalid First Name!";
    // }else if( user.lName === "" ){
    //     validationMessage = "Invalid Last Name!"
    // }else if( !re.test(String(user.email).toLowerCase()) ){
    //     validationMessage = "Invalid Email!"
    // }else if( user.password1.length < 8 || user.password2.length){

    // }
    // else{
    //     validationMessage = false;
    // }

    let nUser = new User ({
        fName : tenant.fName,
        lName : tenant.lName,
        email : tenant.email,
        mobile: tenant.mobile
    })

    User.findOne({ email : tenant.email })
    .then ( fUser => {
        if (fUser){
          return  res.json({ msg: "Email ALready Exisit!"}).status(200);
        }else {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(tenant.password, salt, function(err, hash) {
                        if(hash){
                            nUser.password  = hash ;
                            nUser.save()
                            .then( sUser => {
                                if(sUser){
                                    return res.json({msg: "Tenant Reqister Susseccfully!" , tenant:sUser,  success: true}).status(200);
                                }
                            })
                            .catch( err => {
                                console.log(err);
                                return res.json({msg: "not found error" , success: true}).status(404);
                                    })
                                }
                            })
                        })
            }
        })
        .catch( err => {
            console.log(err);
            return res.json ({ msg : "error found" , success:false}).status(404);
        })
})
//////////////////////////////////login//////////////////////////////////////////
Router.post ("/loginTenant" , (req, res) => {
    const { tenant } = req.body ;
   
    User.findOne({ email : tenant.email })
    .then ( fUser => {
        if (fUser){
            bcrypt.compare(tenant.password, fUser.password, (err, isMatch) =>{
                if(isMatch){
                   return  res.json({ msg : "Login Successfully!" , success: true}).status(200);
                }
                else{
                   return  res.json({ msg: "Invalid Password!", success: false}).status(404);
                }
            })
        }else {
            return res.json ({ msg: "Invalid Email!", success: false}).status(400);
        }  
    })
    .catch( err =>{
        console.log(err);
        return res.json ({ msg : "error found" , success: false}).status(404);
    })

})





module.exports = Router;