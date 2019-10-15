const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const complaints = new Schema ({
    adminId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tbladmins"
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tblusers"
    },
    rentalId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tblrentals"
    },
    complaintTitle: {
        type: String
    },
    ComplaintDescription: {
        type: String
    }

})

module.exports = mongoose.model("tblcomplaints" , complaints);