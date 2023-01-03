let db = require('../../database/models')

module.exports = {
    listUsers: (req, res) => {
        db.Usuarios.findAll()
            .then(usuarios => {
                let totalUsers = {
                    referencia: 'LISTADO DE USUARIOS',
                    status: 200,
                    meta: {
                        count: usuarios.length,
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    users : usuarios.map(element => {
                        return{
                            id: element.id,
                            firstName: element.nombre,
                            lastName: element.apellido,
                            email: element.email,
                            detail: `http://localhost:3000/api/usuarios/${element.id}`,
                        }
                    })
                }
                return res.status(200).json(totalUsers)
            }).catch(errors => res.status(500).json('Error al acceder a la vista'));
    },
    idUsers: (req, res)=>{
        const id = req.params.id;
        db.Usuarios.findByPk(id, {
            include: [{all: true}]
        })
        .then(usuario => {

            let detalleUser = {
                status: 200,
                meta: {
                    users: 'DETALLE DE USUARIO',
                    imagen: "/images/usuario/"+usuario.imagen,
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                },
                data: {
                    id: usuario.id,
                    first_name: usuario.nombre,
                    last_name: usuario.apellido,
                    email: usuario.email,
                    createdAt: usuario.createdAt,
                    volver: `http://localhost:3000/api/usuarios/`
                }
            }
            return res.status(200).json(detalleUser)
        }).catch(errors => res.status(500).json('Error al acceder a la vista'));
    }
}