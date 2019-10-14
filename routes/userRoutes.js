const Router = require('express').Router();

Router.use("/auth", require('../API/user/auth'));



module.exports = Router;