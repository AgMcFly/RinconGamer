const agregarNoticias = document.getElementById ("cargarNoticiasForm")

cargarNoticiasForm.addEventListener("submit",function (evt){
    
evt.preventDefault();
alert("Noticia cargada")
console.dir(evt.target.elements)
})

const formEl = evt.target.elements
let nuevaNoticia = {
    título: formEl.título.value, 
    descripción: formEl.cuerpo.value,
    imagen:  formEl.imagen.value,
    tipoDescripción: formEl.tipoDescripción.checked,
    tipoNoticia: formEl.tipoNoticia.checked,
    tipoReseña: formEl.tipoReseña.checked,
}









