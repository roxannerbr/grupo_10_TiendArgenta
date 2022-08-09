module.exports = {
    listar: (req,res) => {
        return res.render('admin/listar')
    },
    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {
       /*  id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editar')
    },
}