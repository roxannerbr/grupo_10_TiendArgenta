window.addEventListener("load", () => {
    let $ = (elemento) => document.querySelector(elemento)

    /* Expresiones regulares */
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExLetter = /^[A-Z]+$/;

    let form = $("#formulario")
    let imagen = $("#formFileMultiple")
    let nombre = $("#Nombres")
    let apellido = $("#Apellidos")
    let dni = $("#dni")
    let telefono = $("#telefono")
    let Pass = $("#pass")
    let Pass2 = $("#pass2")
    let pass = $("#pass")
    
    imagen.addEventListener('change', function() {
        console.log("mensaje");
          switch (true) {
              case !regExExt.exec(imagen.value):
                  $('#imagenContainer').innerHTML = "<small>Solo se permite ingresar una imagen valida formato (jpg|jpeg|png|jfif|gif|webp)</small>"
                 /*  validate.imagen = false */
                  break;
              default:
                  $('#imagenContainer').innerHTML = null
                 /*  validate.imagen = true */
                  break;
          }
          funcValidate(validate)
      })
nombre.addEventListener("blur",() => {
switch (true) {
    case !nombre.value:
        $("#nombresContainer").innerHTML = "<small>El campo nombre es obligatorio</small>"
        nombre.style.border = "1px solid red"
        nombre.style.color = "red"
        nombre.style.small = "red"
        
        break;
    case nombre.value.length < 2:
        $("#nombresContainer").innerHTML = "<small>El campo nombre debe tener al menos 2 caracteres</small>"
        nombre.style.border = "1px solid red"
        nombre.style.color = "red"

        break;

    default:
        $("#nombresContainer").innerHTML = ""
        nombre.style.border = "1px solid black"
        break;
}

})
apellido.addEventListener("blur",() => {
switch (true) {
    case !apellido.value:
        $("#apellidosContainer").innerHTML = "<small>El campo apellido es obligatorio</small>"
        apellido.style.border = "1px solid red"
        break;
        case apellido.value.length < 2:
            $("#apellidosContainer").innerHTML = "<small>El campo apellido debe tener al menos 2 caracteres</small>"
            apellido.style.border = "1px solid red"
            break;
    default:
        $("#apellidosContainer").innerHTML = ""
        apellido.style.border = "1px solid black"
        break;
}

})
dni.addEventListener("blur",() => {
switch (true) {
    case dni.value.length > 9:
        $("#dniContainer").innerHTML = "<small>El campo no debe tener mas de 9 digitos</small>"
        dni.style.border = "1px solid red"
        break;
    default:
        $("#dniContainer").innerHTML = ""
        dni.style.border = "1px solid black"
        break;

    }

})
telefono.addEventListener("blur",() => {
switch (true) {
    case telefono.value.length > 10:
        $("#telefonoContainer").innerHTML = "<small>El campo no debe tener mas de 10 digitos</small>"
        telefono.style.border = "1px solid red"
        break;
    default:
        $("#telefonoContainer").innerHTML = ""
        telefono.style.border = "1px solid black"
        break;

    }

})
        
        form.addEventListener('submit',(e) => {
            e.preventDefault();
    
            console.log(form.elements);
            if(errores.length > 0){
                form.submit()
            }
        })
})