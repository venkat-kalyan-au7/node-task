
import path from "path"
import multer from "multer"

var upload = multer({storage: multer.diskStorage({

    destination: function (req, file, callback) 
    { callback(null, './uploads');},
    filename: function (req, file, callback) 
    { 
        callback(null, (file.originalname));
    }
  
  }),
  
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(/*res.end('Only images are allowed')*/ null, false)
    }
    callback(null, true)
  }
  });

export default upload