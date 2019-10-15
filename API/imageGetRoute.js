const Router = require('express').Router();
const { gfs, BUCKET  } = require('../storage')(); 



Router.get("/get-all-rental-images", (req, res) =>{
    gfs.collection(BUCKET);
    gfs.files.find().toArray().then(imgs =>{
        return res.json({images: imgs}).status(200);
    }).catch(err =>{
        return res.json({msg: "error in getting images"}).status(500);
    })
})

Router.get("/rentals-files/image/:filename", (req, res) =>{
    gfs.collection(BUCKET);
    gfs.files.findOne({filename: req.params.filename}, (err, file) =>{
        console.log(file)
        console.log(err);
        if(!file || file.length === 0){
            console.log("Inside error")
            return  res.json({msg: "no files"}).status(404);
        }
        const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res);
    })
})

module.exports = Router;