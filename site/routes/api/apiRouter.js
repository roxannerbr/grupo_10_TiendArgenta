const {listado, detalles, ProductosCopy} = require('../../controllers/apiController/apiProductos');
const {listUsers, idUsers} = require('../../controllers/apiController/apiUsers');
const {paginacion} = require('../../controllers/apiController/paginacion');
const {userPagination} = require('../../controllers/apiController/userPagination');
const express = require('express');
const router = express.Router();

/* GET API DE PRODUCTOS. */
router.get('/usuarios', userPagination /*listUsers*/);
router.get('/usuarios/:id', idUsers);

/* GET API DE PRODUCTOS. */
router.get('/productos', paginacion /*listado*/);
router.get('/productos/:id', detalles);
router.get('/categorias', listado);
/* router.post('/productosCopy', ProductosCopy);  */
 
module.exports = router;