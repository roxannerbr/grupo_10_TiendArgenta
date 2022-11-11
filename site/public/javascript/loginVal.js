window.addEventListener('load', ()=> {
    let $ = (elemento) => document.querySelector(elemento)
    console.log("Login iniciado correctamente");

    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let form = $('#form')
    let email = $('#email')
    let inputPass = $('#pass')

    let errores = [{
        id: 1,
        elemento:"email",
        mensaje: "El campo Email es obligatorio."
    },{
        id: 2,
        elemento:"inputPass",
        mensaje: "La contraseña es obligatoria."
    }];

    email.addEventListener('blur',() => {
        let error = {
            id: 1,
            elemento:"email",
            mensaje: "El Email es obligatorio."
        }
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El email es obligatorio.</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El email es obligatorio."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "<small>Ingrese un email válido.</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "Ingrese un email válido."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#emailContainer').innerHTML = ""
                email.style.border = "1px solid #BFB063"
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        console.log(errores);
    })
    inputPass.addEventListener('blur',() => {
        let error = {
            id: 2,
            elemento:"inputPass",
            mensaje: "La contraseña es obligatoria."
        }
        let variable = true
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La contraseña es obligatoria.</small>"
                inputPass.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 2 ){
                        e.mensaje = "La contraseña es obligatoria."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExPass.test(inputPass.value):
                $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres.</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 2
                })
                break;
        }
    })
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        console.log(form.elements);
        if(!errores.length > 0){
            form.submit()
        }
    })
})