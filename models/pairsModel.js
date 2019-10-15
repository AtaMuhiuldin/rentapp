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
    }
})

module.exports = mongoose.model("tblpairs" , pairs);