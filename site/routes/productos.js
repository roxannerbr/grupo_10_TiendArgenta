const express = require('express');
const router = express.Router();
const {detalles, carrito, categoria} = require('../controllers/productosController')

router.get('/detalles/:id', detalles);
router.get('/:categoria', categoria)
router.get('/carrito', carrito)

module.exports = router;