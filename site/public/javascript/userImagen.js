window.addEventListener('load', () => {
    /* console.log("OtroMensaje1"); */
const $ = id => document.getElementById(id)

/* imagen previa del usuario */

$("usuario-img").addEventListener('change', (e) => {

    let reader = new FileReader();
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => $("img-preview").src = reader.result
    changeImage(e.target.name,e.target.files)

})
})