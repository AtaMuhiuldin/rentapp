const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const house = new Schema ({
    adminId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tbladmins"
    },
    houseTitle: {
        type: String
    },
    houseType:{
       type: mongoose.Schema.Types.ObjectId, 
       path: "tblhousetypes"
    },
    streetName: {
        type: String
    },
    city: {
        type: String
    },
    state:{
        type: String
    },
    rentPlan: {
        type: String
    }, 
    rentAmount: {
        type: String
    },
    rentCurrency: {
        type: String
    }, 
    houseImage: {
        type: String
    }, 
    pairCode: {
        
    }

})

module.exports = mongoose.model("tblhouses" , house);