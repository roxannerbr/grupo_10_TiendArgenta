window.onload = function () {
    console.log('Conexion Exitosa!')
    const $ = (e) => document.querySelector(e);
    const url = new URL(`http://localhost:3012/api/productos?page=1&size=10`);
    const filter = $('#filter');
    const sizes = $('#size')
    const ulPages = $('#pages-links');
    const tbody = document.getElementById('contain-tbody');
    const template = document.querySelector('#tempale-tbody').content;
    const fragment = document.createDocumentFragment(); 

    filter.addEventListener('change', (e) => {
        if (e.target.value.trim().length != 0) {
            console.log('Ingreso 1')
            console.log(url.href)

            if (url.searchParams.has(e.target.name)) {
                if (e.target.name != "titulo" && e.target.value == 0) {
                    url.searchParams.delete(e.target.name);
                } else {
                    url.searchParams.set(e.target.name, e.target.value);
                };
            } else {
                url.searchParams.append(e.target.name, e.target.value);
            };
            tbody.innerHTML = "";
            traerDatos(url.href);
        } else {
            console.log('Ingreso 2')
            console.log(url.href)
            if (url.searchParams.has(e.target.name)) {
                url.searchParams.delete(e.target.name)
                tbody.innerHTML = ""
                traerDatos(url.href);
            } 
            url.searchParams.delete(e.target.name)
        }
    })
    sizes.addEventListener("change", (e) => {
        url.searchParams.set(e.target.name, e.target.value)
        tbody.innerHTML = "",
        traerDatos(url.href);
    })
    ulPages.addEventListener('click', (e) => {
        e.preventDefault();
        if(!e.target.classList.contains('disabled')) {
            tbody.innerHTML = "";
            traerDatos(e.target.href);
        }
    })
    const traerDatos = async (url) => {
        try {
            let response = await fetch(url);
            let result = await response.json();
            if(result.count > 0) {
                console.log('Tus resultados!')
                console.log(result.result)
                
                result.result.forEach(producto  => {
                    template.querySelector('#id').textContent = producto.id;
                    template.querySelector('#titulo').textContent = producto.titulo;
                    template.querySelector('#categoria').textContent = producto.categoria.nombre;
                    template.querySelector('#subcategoria').textContent = producto.subcategoria.nombre;
                    template.querySelector('#stock').textContent = producto.stock;
                    template.querySelector('#precio').textContent = producto.precio;
                    template.querySelector('#descuento').textContent = producto.descuento;
                    template.querySelector('#btn-edit').href = `/admin/editar/${producto.id}` ;
                    template.querySelector('#btn-delete').action = `/admin/destroy/${producto.id}?_method=DELETE` ;

                    const clone = template.cloneNode(true);
                    fragment.appendChild(clone)
                });

                console.log(fragment)
                tbody.appendChild(fragment);
                
                ulPages.innerHTML = "";

                if(result.previous != null ) {
                    ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${result.previous}" >Previous</a></li>`
                } else {
                    ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="">Previous</a></li>`
                }

                if(result.pages > 2) {
                    for (let i = 1; i < result.pages + 1; i++) {
                       
                        let link = new URL(url)
                        if(link.searchParams.get('page') == i) {
                            link.searchParams.set('page', i)
                            ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="${link.href}">${i}</a></li>`
                        } else {
                            link.searchParams.set('page', i)
                            ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${link.href}">${i}</a></li>`
                        }
                        
                    }
                }


                if (result.next != null) {
                    ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${result.next}">Next</a></li>`
                } else {
                    ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="">Next</a></li>`
                }

            // En caso de que no haya resultados, deberiamos enviar un msj al usuario informandolo
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }
    traerDatos(url.href)

}