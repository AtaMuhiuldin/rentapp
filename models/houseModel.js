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
        type: String
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
    rentPLan: {
        type: String
    }, 
    rentAmount: {
        type: String
    },
    rentCurrency: {
        type: String
    }

})

module.exports = mongoose.model("tblhouses" , house);