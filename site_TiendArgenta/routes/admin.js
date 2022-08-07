const express = require('express');
const router = express.Router();
const {listar,crear,editar} = require('../controllers/adminController');

router.get('/listar',listar);
router.get('/crear',crear);
router.get('/editar',editar);

module.exports = router;