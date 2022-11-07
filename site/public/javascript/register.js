window.addEventListener("load", () => {
    let $ = (elemento) => document.querySelector(elemento)
    
  
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExLetter = /^[A-Z]+$/;

    let formulario = $("#formulario")
    let nombre = $("#Nombres")
    let apellido = $("#Apellidos")
    let email = $("#email")
    let imagen = $("#formFileMultiple")
    let terminos = $("#terminos")
    let Pass = $("#pass")
    let Pass2 = $("#pass2")
    let pass = $("#pass")
    let pass2 = $("#pass2")


nombre.addEventListener("blur",() => {
switch (true) {
    case !nombre.value:
        $("#nombresContainer").innerHTML = "<small>El campo nombre es obligatorio</small>"
        nombre.style.border = "1px solid red"
        break;
    case !nombre.value.length < 2:
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
        case !regExLetter.test(apellido.value):
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
pass.addEventListener('change',() => {
    switch (true) {
        case !pass.value:
            $("#passContainer").innerHTML = "<small>El campo contraseña es obligatorio</small>"
            pass.style.border = "1px solid red"
            break;
         case !Pass.value.length < 6:
            $("#passContainer").innerHTML = "<small>El campo debe tener al menos 6 digitos</small>"
            pass.style.border = "1px solid red"
            break; 
            default:
                $("#passContainer").innerHTML = ""
                pass.style.border = "1px solid black"
                break;
            }
            
        }) 
         pass2.addEventListener("blur",() => {
        switch (true) {
            case !pass2.value != pass.value:
                $("#passContainer2").innerHTML = "<small>Las contraseñas no coinciden</small>"
                pass2.style.border = "1px solid red"
                break;
            case !pass2.value == pass.value:
                $("#passContainer2").innerHTML = ""
                pass2.style.border = "1px solid black"
                break;
            default:
                $("#passContainer2").innerHTML = ""
                pass2.style.border = "1px solid black"
                break;
        }
        
        })  
        
})