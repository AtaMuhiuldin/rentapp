const Router = require('express').Router();

Router.use("/auth", require('../API/admin/auth'));
Router.use("/home", require('../API/admin/houseAPI'));

module.exports = Router;