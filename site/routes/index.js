const express = require('express');
const router = express.Router();
const {home, search, contacto, pregFrecuentes, novedades, indumentaria} = require('../controllers/indexController');

router.get('/', home);
router.get('/busqueda', search);
router.get('/contacto', contacto);
router.get('/pregFrecuentes', pregFrecuentes);
router.get('/novedades', novedades);
router.get('/indumentaria', indumentaria);

module.exports = router;