const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currencies = new Schema ({
   currencyTitle:{
       type: String
   }
})

module.exports = mongoose.model("tblcurrencies" , currencies);