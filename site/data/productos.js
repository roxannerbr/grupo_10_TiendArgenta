const fs=require('fs');
const productos=require('./productos.json')

/*let ultimoId=productos[productos.length-1].id+1
console.log(ultimoId);*/

let nuevoProducto=[
    {        
        "id": 38,
        "titulo": "Camiseta Alternativa Hombre",
        "categoria": "Ind-Hombre",
        "precio": 17000,
        "descuento": 30,
        "stock": 13,
        "descripcion": "UNA CAMISETA DE VISITANTE DE ARGENTINA INSPIRADA EN LOS PAISAJES DEL PAIS AUSTRAL",
        "imagen": [
            "H-Alter.png"
        ]
    },
]


/* Editar producto */
let ProduEdit = productos.map((element,index) => {
    if (element.id === 1) {
        element.titulo = "Maquillaje clasico"
        element.precio = 750
        element.descuento = 5
        element.stock = 15
    }
    return element
})

/* Eliminar un producto */
let eliminarProducto = productos.filter(element => element.id !== 4)



/* let string=JSON.stringify(productos,null,4)
fs.writeFileSync('./views/data/productos.json',string,'utf-8')
 */


module.exports = router;