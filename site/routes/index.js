const express = require('express');
const router = express.Router();
const {home, contacto, pregFrecuentes, novedades, cotillon, coleccionables, indumentaria, mujer, infantil, hombre} = require('../controllers/indexController');

router.get('/', home);
router.get('/contacto', contacto);
router.get('/pregFrecuentes', pregFrecuentes);
router.get('/novedades', novedades);
router.get('/cotillon', cotillon);
router.get('/coleccionables', coleccionables);
router.get('/indumentaria', indumentaria);
router.get('/mujer', mujer);
router.get('/infantil', infantil)
router.get('/hombre', hombre)

module.exports = router;