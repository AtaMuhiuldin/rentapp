const Router = require('express').Router();

Router.use("/auth", require('../API/admin/auth'));


module.exports = Router;