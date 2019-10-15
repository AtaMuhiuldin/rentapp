const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
const db = require('./config/dbConfig').mongodbOnline;
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true} )
.then(m =>{
    global.mongodbconndbs = m.connection.db;

    app.use("/admin", require('./routes/adminRoutes'));
    app.use("/user", require('./routes/userRoutes'));
    app.use("/files", require('./API/imageGetRoute'));
    app.get("/", (req, res) =>{
        res.json({msg: "server running..."}).status(200);
    })
    console.log(`connected to mongodb`);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running at port ${port}`);
})