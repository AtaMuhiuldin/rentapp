const Router = require('express').Router();
const {upload, CreateURL} = require('../../storage')();
const {House, HouseType} = require('../../models');
Router.post("/add-house", upload.single("houseImage") , (req, res) =>{


    const ImageURL = CreateURL(req.file.filename);



    const {adminId, houseTitle, houseTypeId, streetName, 
        city, state, rentalPlan, rentAmount, rentCurrency } = req.body;

    let newHouse = new House({
        adminId: adminId, 
        houseTitle: houseTitle, 
        houseType: houseTypeId, 
        streetName: streetName, 
        city: city, 
        state: state, 
        rentalPlan: rentalPlan, 
        rentAmount: rentAmount, 
        rentCurrency: rentCurrency, 
        houseImage: ImageURL
    })
    
    newHouse.save() 
        .then(sHouse =>{
            return res.json({msg: "house registered", success: true, house: sHouse}).status(200);
        }).catch(err => {
            console.log(err);
            return res.json({msg: "not found error"}).status(500);
        })

})





Router.post("/add-house-type", (req, res) =>{
    const {houseType} = req.body;
    let newHouseType = new HouseType({
        houseType: houseType
    })

    HouseType.findOne({houseType: houseType})
        .then(oHouseType =>{
            if(oHouseType){
                return res.json({msg: "house already exists", success:false}).status(500);
            }else{
                newHouseType.save()
                .then(sHouseType =>{
                    return res.json({msg: "type added", houseType: sHouseType, success: true}).status(200);
                }).catch(err =>{
                    return res.json({msg: "not found error", success:false}).status(500);
                })
            }   
        }).catch(err =>{
            console.log(err);
            return res.json({msg: "not found error", success: false}).status(500);
        })
  
})
Router.get("/get-house-types" , (req, res) => {
    HouseType.find()
        .then(houseTypes =>{
            res.json({houseTypes: houseTypes}).status(200);
        }).catch(err =>{
            res.json({msg: "not found error", success:false});
        })
})

module.exports = Router;