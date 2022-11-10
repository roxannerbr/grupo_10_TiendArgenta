const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({//DONDE SE GUARDARA
    destination: (req,file,callback) => {
        callback(null,'../site/public/images/productos')
    },
    filename:(req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))//NOMBRE ARCHIVO(TIPO WPP)
    }
})
//VALIDA QUE SOLO SE SUBAN UN TIPO DE ARCHIVO DE IMG AL SER PRODUCTO ES PNG
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|jfif|gif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({
    storage,
    fileFilter
    })

module.exports = upload