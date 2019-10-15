const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const users = new Schema ({
    fName : {
        type : String
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        require: true
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

module.exports = mongoose.model("tblusers" , users);