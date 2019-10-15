const Router = require('express').Router();

Router.use("/auth", require('../API/user/auth'));

Router.use("/house", require('../API/user/houseApi'));

Router.use("/pair", require('../API/user/pairRequest'));

Router.use("/complaint", require('../API/user/sendComplaint'));

module.exports = Router;