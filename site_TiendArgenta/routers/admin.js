const {list,create,edit} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/listar', listar);
router.get('/crear', crear);
router.get('/editar/:id', editar);

module.exports = router;