const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rentaldetails = new Schema ({
    rentalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblrentals"
    },
    currencyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblcurrencies"
    },
    houseTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblhousetypes"
    },
    startdate: {
        type: Date
    },
    deadlineDate: {
        type: Date
    },
    payableAmount: {
        type: Number
    },
    paidAmount: {
        type: Number
    },
    paidStatus:{
        type: Boolean
    }
})

module.exports = mongoose.model("tblrentaldetails" , rentaldetails);