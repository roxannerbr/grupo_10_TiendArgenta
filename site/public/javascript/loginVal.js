window.addEventListener('load', ()=> {
    let $ = (elemento) => document.querySelector(elemento)
    console.log("Login iniciado correctamente");

    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let form = $('#form')
    let email = $('#email')
    let inputPass = $('#pass')

    const validate = {
        email: false,
        pass: false,
    }
    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }

    let errores = [{
            id: 1,
            elemento:"email",
            mensaje: "El campo Email es obligatorio."
        },{
            id: 2,
            elemento:"inputPass",
            mensaje: "La contraseña es obligatoria."
        },
    ];

    email.addEventListener('blur',() => {
        let error = {
            id: 1,
            elemento:"email",
            mensaje: "El campo Email es obligatorio."
        }
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "El campo Email es obligatorio."
                email.style.border = "2px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El campo Email es obligatorio."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "Ingrese un email válido."
                email.style.border = "2px solid red"
                validate.email= false
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
                email.style.border = "2px solid #BFB063"
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        funcValidate(validate)
        console.log(errores);
    })
    inputPass.addEventListener('blur',() => {
        let error = {
            id: 2,
            elemento:"inputPass",
            mensaje: "La contraseña es obligatoria."
        }
        let variable = false
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "La contraseña es obligatoria."
                inputPass.style.border = "2px solid red"
                validate.pass= false
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
                $('#passContainer').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero."
                inputPass.style.border = "2px solid red"
                validate.pass= false
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero."
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "2px solid black"
                validate.pass= true
                errores = errores.filter(error => {
                    return error.id !== 2
                })
                break;
        }
        funcValidate(validate)
    })
    funcValidate(validate)


    form.addEventListener('submit',(e) => {
        e.preventDefault();

        console.log(form.elements);
        if(!errores.length > 0){
            form.submit()
        }
    })
})