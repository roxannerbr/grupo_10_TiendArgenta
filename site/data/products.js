const fs=require('fs');
const productos=require('./productos.json')

let ultimoId=productos[productos.length-1].id+1
console.log(ultimoId);

let nuevoProducto=[
    {        
        "id":1,
        "marca":"adidas",
        "titulo":"camiseta niño",
        "precio":"8000",
        "descuento":"10",
        "descripcion":"camiseta original.",
        "stock":"15",
        "imagenes":"camisetaniñofrente.jpg"
    }
]


/* Editar producto */
let ProduEdit = productos.map((element,index) => {
    if (element.id === 6) {
        element.marca = "Iphone"
        element.titulo = "Iphone 13 pro max plus extra super ultra violeta"
        element.precio = 530000
        element.stock = 3
    }
    return element
})

/* Eliminar un producto */
let eliminarProducto = productos.filter(element => element.id !== 4)



/* let string=JSON.stringify(productos,null,4)
fs.writeFileSync('./views/data/productos.json',string,'utf-8')
 */


module.exports = router;