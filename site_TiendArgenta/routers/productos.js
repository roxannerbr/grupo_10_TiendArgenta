const express = require('express')
const router = express.Router()
const {detalles,carrito} = require('../controllers/productsController')

router.get('/detalles/:id',detalles)
router.get('/carrito',carrito)

module.exports = router;