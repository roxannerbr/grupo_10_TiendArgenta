window.addEventListener("load", () => {
    let $ = (elemento) => document.querySelector(elemento)

    /* Expresiones regulares */
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExLetter = /^[A-Z]+$/;

    let form = $("#formulario")
    let nombre = $("#Nombres")
    let apellido = $("#Apellidos")
    let email = $("#email")
    let imagen = $("#formFileMultiple")
    let terminos = $("#terminos")
    let Pass = $("#pass")
    let Pass2 = $("#pass2")
    let pass = $("#pass")
    
    let errores = [{
        id: 4,
        elemento:"inputPass",
        mensaje: "La contraseña es obligatoria"
    },{
        id: 5,
        elemento:"inputPass2",
        mensaje: "Debe confirmar su contraseña"
    },{
        id: 6,
        elemento:"checkbox",
        mensaje: "Debe aceptar los terminos y condiciones"
    }]



nombre.addEventListener("blur",() => {
switch (true) {
    case !nombre.value:
        $("#nombresContainer").innerHTML = "<small>El campo nombre es obligatorio</small>"
        nombre.style.border = "1px solid red"
        break;
    case nombre.value.length < 2:
        $("#nombresContainer").innerHTML = "<small>El campo nombre debe tener al menos 2 caracteres</small>"
        nombre.style.border = "1px solid red"
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
email.addEventListener("blur",() => {
switch (true) {
    case !email.value:
        $("#emailContainer").innerHTML = "<small>El campo email es obligatorio</small>"
        email.style.border = "1px solid red"
        break;
        case !regExEmail.test(email.value):
            $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
            email.style.border = "1px solid red"
            break;
    default:
        $("#emailContainer").innerHTML = ""
        email.style.border = "1px solid black"
        break;

    }

})
        Pass.addEventListener('blur',() => {
            let error = {
                id: 4,
                elemento:"Pass",
                mensaje: "La contraseña es obligatoria"
            }
            let variable = true
            switch (true) {
                case !Pass.value:
                    $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                    Pass.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 4 ){
                            e.mensaje = "La contraseña es obligatoria"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
                case !regExPass.test(Pass.value):
                    $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero</small>"
                    email.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 3 ){
                            e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
                default:
                    $('#passContainer').innerHTML = ""
                    Pass.style.border = "1px solid black"
                    errores = errores.filter(error => {
                        return error.id !== 4
                    })
                    break;
            }
        }) 
        Pass2.addEventListener('blur',() => {
            let error = {
                id: 5,
                elemento:"Pass2",
                mensaje: "Debe confirmar su contraseña"
            }
            let variable = true
            
            switch (true) {case !Pass2.value:
                $('#passContainer2').innerHTML = "<small>La confirmacion de la contraseña no puede estar vacia</small>"
                Pass2.style.border = "1px solid red"
                error.mensaje = "La confirmacion de la contraseña no puede estar vacia"
                errores.forEach(e => {
                    if(e.id === 5 ){
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break; 
                case !regExPass.test(Pass2.value):
                    $('#passContainer2').innerHTML = "<small>La confirmación de contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero</small>"
                    email.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 3 ){
                            e.mensaje = "La confirmación de contraseña contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
                    case Pass2.value != pass.value:
                        $('#passContainer2').innerHTML = "<small>Las contraseñas no coinciden</small>"
                        error.mensaje = "Las contraseñas no coinciden"
                        Pass2.style.border = "1px solid red"
                        errores.forEach(e => {
                            if(e.id === 5 ){
                                variable = false
                            }
                        });
                        
                        if (variable) {
                            errores.push(error)
                        }
                        break;
                     
                default:
                    $('#passContainer2').innerHTML = ""
                    Pass2.style.border = "1px solid black"
                    errores = errores.filter(error => {
                        return error.id !== 5
                    })
                    break;
            }
        })  
        
        terminos.addEventListener('blur', (e) => {
           switch (true) {
            case !terminos.checked:
        $("#terminosContainer").innerHTML = "<small>Debe aceptar los terminos y condiciones</small>"
        terminos.style.border = "1px solid red"
        break;

    default:
        $("#terminosContainer").innerHTML = ""
        terminos.style.border = "1px solid black"
        break;
}
        })
        imagen.addEventListener('change', function() {
          console.log("mensaje");
            switch (true) {
                case !regExExt.exec(imagen.value):
                    $('#imagenContainer').innerHTML = "<small>Solo se permite ingresar una imagen valida fomato (jpg|jpeg|png|jfif|gif|webp)</small>"
                   /*  validate.imagen = false */
                    break;
                default:
                    $('#imagenContainer').innerHTML = null
                   /*  validate.imagen = true */
                    break;
            }
            funcValidate(validate)
        })


        form.addEventListener('submit',(e) => {
            e.preventDefault();
    
            console.log(form.elements);
            if(errores.length > 0){
                form.submit()
            }
        })
})