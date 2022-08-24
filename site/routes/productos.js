const express = require('express');
const router = express.Router();
const {detalles, carrito} = require('../controllers/productosController')

router.get('/detalles/:id',detalles);
router.get('/carrito',carrito)

/* router.get('/:categoria?',productos) */

module.exports = router;