window.addEventListener("load", () => {
    let $ = (elemento) => document.querySelector(elemento)

    /* Expresiones regulares */
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExLetter = /^[A-Z]+$/;
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,30}$/;

    
    let imagen = $("#formFileMultiple")
    let nombre = $("#Nombres")
    let apellido = $("#Apellidos")
    let dni = $("#dni")
    let telefono = $("#telefono")
    let direccion = $("#direccion")
    let localidad = $("#localidad")
    let provincia = $("#provincia")
    let codPost = $("#codPost")
    
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
direccion.addEventListener("blur",() => {
switch (true) {
    case !regExPass.test(direccion.value):
        $("#direccionContainer").innerHTML = "<small>El campo debe tener numeros y al menos una letra mayuscula</small>"
        direccion.style.border = "1px solid red"
        break;
    default:
        $("#direccionContainer").innerHTML = ""
        direccion.style.border = "1px solid black"
        break;

    }
})
localidad.addEventListener("blur",() => {
    switch (true) {
        case regExLetter.test(localidad.value):
            $("#localidadContainer").innerHTML = "<small>El campo debe contener solo letras</small>"
            localidad.style.border = "1px solid red"
            break;
        default:
            $("#localidadContainer").innerHTML = ""
            localidad.style.border = "1px solid black"
            break;
    
        }
    })
    provincia.addEventListener("blur",() => {
        switch (true) {
            case regExLetter.test(provincia.value):
                $("#provinciaContainer").innerHTML = "<small>El campo debe contener solo letras</small>"
                provincia.style.border = "1px solid red"
                break;
            default:
                $("#provinciaContainer").innerHTML = ""
                provincia.style.border = "1px solid black"
                break;
        
            }
        })
        codPost.addEventListener("blur",() => {
            switch (true) {
                case codPost.value.length > 5:
                    $("#codPostContainer").innerHTML = "<small>El campo no puede tener mas de 5 caracteres</small>"
                    codPost.style.border = "1px solid red"
                    break;
                default:
                    $("#codPostContainer").innerHTML = ""
                    codPost.style.border = "1px solid black"
                    break;
            
                }
            })
})