const multer=require('multer')
const path=require ('path');
const crypto=require('crypto');
//disk storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')//folder setup
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12,function(err,name){
        const fn=name.toString('hex')+path.extname(file.originalname)//name setup
        cb(null, fn);
      })
    }
  })
  
  // create upload exportvariable
  const upload = multer({ storage: storage });
  module.exports=upload;
