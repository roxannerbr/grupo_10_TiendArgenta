const express = require('express');
const router = express.Router();
const {home, contacto, pregFrecuentes, novedades, cotillon, coleccionables, indumentaria, mujer, hombre, infantil} = require('../controllers/indexController');

router.get('/', home);
router.get('/contacto', contacto);
router.get('/pregFrecuentes', pregFrecuentes);
router.get('/novedades', novedades);
router.get('/cotillon', cotillon);
router.get('/coleccionables', coleccionables);
router.get('/indumentaria', indumentaria);
router.get('/mujer', mujer);
router.get('/hombre', hombre);
router.get('/infantil', infantil)

module.exports = router;