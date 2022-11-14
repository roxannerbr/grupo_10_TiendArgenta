window.addEventListener('load', () => {

    /* Funciones para no declarar document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
            btn.style.backgroundColor = '#010a26'
        }else{
            btn.disabled = true
            btn.style.backgroundColor = '#BFB063'
        }
    }

    

    /* Elementos que se trabajan para validar */
    let titulo = $('#Titulo')
    let categoria = $('#categoria')
    let subCategoria = $('#subCategoria')
    let precio = $('#Precio')
    let descuento = $('#Descuento')  
    let stock = $('#Stock') 
    let descripcion = $('#description')
    let imagen = $('#imagen')
    
    let btn = $('#btn-submit')

    /* Expresiones regulares para utilizar */
    //let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let RegExp= /^\d*$/;
    /* let ExpRegNumDec=/^\d*\.\d+$/; */
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    let regExExt = /\.(png)/

    /* validar elementos */
        /* Titulo del producto */
    titulo.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#tituloError').innerHTML = "Debes ingresar un titulo"
                this.classList.add('is-invalid')
                validate.type = false
                break;
            case !(this.value.trim().length > 2 && this.value.trim().length < 100):
                $('#tituloError').innerHTML = "El titulo del producto debe tener 2 letras y maximo 10"
                this.classList.add('is-invalid')
                validate.titulo = false
                break;
            default:
                $('#tituloError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.titulo = true
                break;
        }
        funcValidate(validate)
    })

    /* categoria */
    categoria.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#categoriaError').innerHTML = "Selecciona una opcion"
                this.classList.add('is-invalid')
                validate.categoria = false
                break;
            
            default:
                $('#categoriaError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.categoria = true
                break;
        }
        funcValidate(validate)
    })

    /* subCategoria */
    subCategoria.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#subCategoriaError').innerHTML = "Selecciona una opcion"
                this.classList.add('is-invalid')
                validate.subCategoria = false
                break;
            default:
                $('#subCategoriaError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.subCategoria = true
                break;
        }
        funcValidate(validate)
    })

        /* precio del producto */
        precio.addEventListener('blur', function() {
            switch (true) {
                case !this.value.trim():
                    $('#precioError').innerHTML = "Debes ingresar un precio"
                    this.classList.add('is-invalid')
                    validate.precio = false
                    break;
                case !(this.value.trim().length >= 2 && this.value.trim().length <= 16):
                    $('#precioError').innerHTML = "El precio del producto debe contener 2 caracteres y maximo 10"
                    this.classList.add('is-invalid')
                    validate.precio = false
                    break;
                case !RegExp.test(this.value.trim()):
                    $('#precioError').innerHTML = "Debe ser un numero mayor a 0"
                    this.classList.add('is-invalid')
                    validate.stock = false
                    break 
                default:
                    $('#precioError').innerHTML = null
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    validate.precio = true
                    break;
            }
            funcValidate(validate)
        })
    
        /* descuento */
        descuento.addEventListener('blur', function() {
            switch (true) {
                case !(this.value.trim().length <= 2    ):
                    $('#descuentoError').innerHTML = "Debe ser menor a 100"
                    this.classList.add('is-invalid')
                    validate.descuento = false
                    break;
               case !regExNumber.test(this.value.trim()):
                    $('#descuentoError').innerHTML = "Debe ser un numero mayor a 0 y menor a 100"
                    this.classList.add('is-invalid')
                    validate.stock = false
                    break;
                default:
                    $('#descuentoError').innerHTML = null
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    validate.descuento = true
                    break;
            }
            funcValidate(validate)
        })
    
        /* stock */
        stock.addEventListener('blur', function() {
            switch (true) {
                case !this.value.trim():
                    $('#stockError').innerHTML = "Debes ingresar el stock"
                    this.classList.add('is-invalid')
                    validate.stock = false
                    break;
                case !regExNumber.test(this.value.trim()):
                    $('#stockError').innerHTML = "Debe ser un numero mayor a 0 y menor a 100"
                    this.classList.add('is-invalid')
                    validate.stock = false
                    break;
                /* case !(this.value.trim().length >= 1 && this.value.trim().length <= 16):
                    $('#stockError').innerHTML = "El stock del producto debe contener entre 1 y 10 caracteres"
                    this.classList.add('is-invalid')
                    validate.stock = false
                    break; */
                default:
                    $('#stockError').innerHTML = null
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    validate.stock = true
                    break;
            }
            funcValidate(validate)
        })
    

    /* descripcion */    
    descripcion.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#descripcionError').innerHTML = "Debes ingresar una descripcion"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#descripcionError').innerHTML = "La descripcion debe contener mas de 10 caracteres"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            default:
                $('#descripcionError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.descripcion = true
                break;
        }
        funcValidate(validate)
    })

    /* imagen */
    imagen.addEventListener('change', function() {
        switch (true) {
            case !regExExt.exec(imagen.value):
                $('#imagenError').innerHTML = "Solo se permite formato .png"
                validate.imagen = false
                break;
            default:
                $('#imagenError').innerHTML = null
                validate.imagen = true
                break;
        }
        funcValidate(validate)
    })


    /* Validacion */
    const validate = {
        titulo : false,
        categoria : false ,
        subCategoria : false ,
        precio : false,
        descuento : true ,
        stock : false ,        
        descripcion : false ,
        imagen : true 
    }

    funcValidate(validate)
})