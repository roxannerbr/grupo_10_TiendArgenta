const express = require('express');
const router = express.Router();
const {listar,crear,editar,store,update,destroy,historial} = require('../controllers/adminController');

/* get home page */
router.get('/listar',listar);
router.get('/historial',historial);

/* Añadir un producto */
router.get('/crear',crear);
router.post('/crear',store)

router.get('/editar/:id',editar);
router.put('/editar/:id', update);

router.delete('/destroy/:id', destroy);

module.exports = router;