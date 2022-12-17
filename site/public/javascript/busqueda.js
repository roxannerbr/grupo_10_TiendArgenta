window.addEventListener('load', () => {

    let vinculacion = 'Buscador iniciado'
    console.log(vinculacion);
    
    let $ = (elemento) => document.querySelector(elemento)
    
    let buscador = $('#search')
    let form = $('#searchForm')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(buscador.value)

        let value = $('#search').value
        //let value = e.target.value
        if (value && value.trim().length > 0){
            value = value.trim().toLowerCase()
            form.submit()
        }
    })
})

