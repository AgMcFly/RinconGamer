// import {noticias} from "./noticiasCargadas.js";

const noticias = JSON.parse(localStorage.getItem("noticias"))
const tableBodyHTML = document.getElementById ("table-body")
console.log(tableBodyHTML) 

function renderProductos() {
    tableBodyHTML.innerHTML = "";
    noticias.forEach (elem => {
        tableBodyHTML.innerHTML += `<tr> 
        <td>
        <img class ="table-image" src= ${elem.imagen}></img>
         </td>
         <td>${elem.título}</td>
        <td>${elem.descripción}</td>
        <td>${elem.tipoDescripción}</td>
         <td>${elem.tipoNoticia}</td>
        <td>${elem.tipoReseña}</td>
        <td>${elem.Género}</td>
        </tr>`
         }
         ) 
}
 
renderProductos()


const agregarNoticias = document.getElementById ("cargarNoticiasForm")

cargarNoticiasForm.addEventListener("submit", (evt)=> {
    if(cargarNoticiasForm.checkValidity()===false){
        return}
evt.preventDefault();
alert("Noticia cargada")
const formEl = evt.target.elements;

let nuevaNoticia = {
    título: formEl.título.value, 
    descripción: formEl.cuerpo.value,
    imagen:  formEl.imagen.value,
    tipoDescripción: formEl.tipoDescripción.checked,
    tipoNoticia: formEl.tipoNoticia.checked,
    tipoReseña: formEl.tipoReseña.checked,
    Género: formEl.género.value
}

//añadida una nueva noticia
noticias.push(nuevaNoticia)

//guardamos el array modificado y JSONificado 
localStorage.setItem("noticias", JSON.stringify(noticias))



//Pintamos la tabla de nuevo para ver los cambios
renderProductos()
//Vaciamos el formulario para que esté listo para una nueva carga
cargarNoticiasForm.reset()
//Hacemos focus en el título para facilitar la tarea al usuario
const títuloInput = document.getElementById("título")
títuloInput.focus()
})



    

