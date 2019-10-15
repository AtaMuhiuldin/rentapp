const multer = require('multer');   
const Grid = require('gridfs-stream');
const BUCKET  ="uploads";

const IMAGE_GET_BASE_URL = "/files/rentals-files/image/";
const CreateURL = (filename) =>{
  return IMAGE_GET_BASE_URL+ filename;
}
let gfs;
module.exports = () => { 
  const mongoURI = require('../config/dbconfig').mongodbOnline;
  const mongo = require('mongoose').mongo;
   const storageConfig = require('./fileconfig');
   gfs = Grid(global.mongodbconndbs, mongo);

 const  upload = multer({storage: storageConfig.InitializeStorage(mongoURI,global.mongodbconndbs, mongo)});

  return  {
       upload,
       gfs,
       BUCKET, 
       CreateURL
   }

}
