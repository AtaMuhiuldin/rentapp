const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const admins = new Schema ({
    email: {
        type: String,
        require: true
    },
    fName : {
        type : String
    },
    lName: {
        type: String
    },
    DOB: {
        type: Date
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("tbladmins" , admins);