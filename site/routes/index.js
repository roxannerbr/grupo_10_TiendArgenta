const express = require('express');
const router = express.Router();
const db = require('../database/models');
const {home, search, contacto, pregFrecuentes, novedades, indumentaria} = require('../controllers/indexController');

router.get('/', home);
router.get('/busqueda', search);
router.get('/contacto', contacto);
router.get('/pregFrecuentes', pregFrecuentes);
router.get('/novedades', novedades);
router.get('/indumentaria', indumentaria);

router.get('/prueba', (req, res) => {
    db.Ordenes.findAll({
        /*usuariosId: req.session.userLogin.id,
        status: 'pending',*/
        include: [
            {
                association : 'carrito',
                attributes: ['productosId', 'cantidad'],
                include: [
                    {
                        association : 'producto',
                        attributes: ['id', 'titulo', 'precio', 'descuento', 'stock'],
                        include: [
                            {
                                association : 'imagenes',
                                attributes: ['nombre']
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => res.send(err))
}),

module.exports = router;