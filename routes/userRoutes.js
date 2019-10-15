const Router = require('express').Router();

Router.use("/auth", require('../API/user/auth'));

Router.use("/house", require('../API/user/houseApi'));

module.exports = Router;