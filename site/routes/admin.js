const express = require('express');
const router = express.Router();
const {listar,crear,editar,store,update,destroy,historial} = require('../controllers/adminController');

const multer = require('multer')
const upload = require('../middlewares/multerProductos')


/* get home page */
router.get('/listar',listar);
router.get('/historial',historial);

/* Añadir un producto */
router.get('/crear',crear);
/*router.post('/crear',upload.array('imagen'),store);*/
router.post('/crear',upload.single('imagen'),store)

//editar un producto
router.get('/editar/:id',editar);
router.put('/editar/:id',upload.single('imagenes'), update);

//eliminar un producto
router.delete('/destroy/:id', destroy);

module.exports = router;