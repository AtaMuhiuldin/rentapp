const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pairs = new Schema ({
    adminId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tbladmins"
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tblusers"
    },
    houseId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tblhouses"
    }, 
    pairStatus:{
        type: Boolean
    }, 
    pairAcceptDate: {
        type: Date
    }, 
    pairDate: {
        type: Date, 
        default: Date.now()
    }
})

module.exports = mongoose.model("tblpairs" , pairs);