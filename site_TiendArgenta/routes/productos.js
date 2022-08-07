const express = require('express');
const {detalles, carrito} = require('../controllers/productosController')
const router = express.Router();

router.get('/detalles',detalles);
router.get('/carrito',carrito)

module.exports = router;