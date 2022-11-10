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
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    /* validar elementos */
        /* Titulo del producto */
    titulo.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#tituloError').innerHTML = "Debes ingresar el titulo de tu producto"
                this.classList.add('is-invalid')
                validate.type = false
                break;
            case !(this.value.trim().length > 2 && this.value.trim().length < 100):
                $('#tituloError').innerHTML = "El titulo del producto debe 2 letras y maximo 10"
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
                $('#categoriaError').innerHTML = "Debes seleccionar una categoria"
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
                $('#subCategoriaError').innerHTML = "Debes seleccionar una subcategoria"
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
                $('#precioError').innerHTML = "Debes ingresar un precio al producto"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
            case !(this.value.trim().length >= 2 && this.value.trim().length <= 16):
                $('#precioError').innerHTML = "El precio del producto debe contener entre 2 y 10 caracteres"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
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
                $('#descuentoError').innerHTML = "El descuento no debe ser mayor a 2 cifras"
                this.classList.add('is-invalid')
                validate.descuento = false
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
                $('#stockError').innerHTML = "Debes ingresar el stock de tu producto"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            case !regExNumber.test(this.value.trim()):
                $('#stockError').innerHTML = "Debes ingresar un numero menor a 100"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            case !(this.value.trim().length >= 1 && this.value.trim().length <= 16):
                $('#stockError').innerHTML = "El stock del producto debe contener entre 1 y 10 caracteres"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
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
                $('#descripcionError').innerHTML = "Debes ingresar una descripcion de tu producto"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#descripcionError').innerHTML = "La descripcion del producto debe contener entre 10 y 255 caracteres"
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
                $('#imagenError').innerHTML = "Solo se permite ingresar una imagen formato (jpg|jpeg|png|jfif|gif|webp)"
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