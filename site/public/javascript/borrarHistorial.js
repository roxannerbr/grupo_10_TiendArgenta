window.addEventListener('load', () => {
    let forms = document.querySelectorAll('.danger')
    
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', event => {
            event.preventDefault();
            Swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },
                title: '¿Estas seguro que quieres eliminar el producto?',
                text: "Esta accion será irreversible!",
                icon: 'warning',
                background: "#fff",
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                confirmButtonColor: '#198754',
                cancelButtonText: 'No estoy seguro',
                cancelButtonColor: '#dc3545',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    forms[i].submit();
                    Swal.fire(
                        'Eliminado!',
                        'El producto fue eliminado correctamente',
                        'success'
                    )
                }
            })
        })
    }
})