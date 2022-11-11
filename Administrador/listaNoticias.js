// import {noticias} from "./noticiasCargadas.js"
const noticias = JSON.parse(localStorage.getItem("noticias")) || [];
//obteniendo el elemento table body
const tableBodyHTML = document.getElementById("table-body");
console.log(tableBodyHTML);
let editable;
//obteniendo el formulario
function renderProductos() {
  //reseteamos el formulario, para que no se apilen las noticias
  tableBodyHTML.innerHTML = "";
  //iteramos el formulario por las noticias
  noticias.forEach((elem, index) => {
    tableBodyHTML.innerHTML += `<tr> 
        <td>
        <img class ="table-image" src= ${elem.imagen}></img>
         </td>
         <td>${elem.título}</td>
        <td class="twd"><div class ="cuerpoNoticia">${elem.descripción}</div></td>
        <td>${elem.categoría}</td>
        <td>${elem.género}</td>
        <td>${
          elem.Favorito
            ? `<i class="fa-solid fa-star"></i>`
            : `<i class="fa-regular fa-star"></i>`
        }
        </td>
        <td>
        <div class="d-flex">
        <button class="btn btn-danger p-1 me-2" onclick="borrarNoticia(${index})"><i class="fa-solid fa-trash"></i></button>
        <button class="btn btn-success p-1" onclick="editarNoticia(${index})"><i class="fa-solid fa-file-pen"></i>
        </button>
        </div>
        </td>
        </tr>`;
  });
}
//renderizando el formulario dinámicamente
renderProductos();

//la tabla de noticias cargadas
const agregarNoticias = document.getElementById("cargarNoticiasForm");
//freno la ejecución de la función callback del evento submit
cargarNoticiasForm.addEventListener("submit", (evt) => {
  if (cargarNoticiasForm.checkValidity() === false) {
    return;
  }
  //prevengo el comportamiento del formulario por defecto
  evt.preventDefault();
  const formEl = evt.target.elements;
  console.log(formEl)
  let nuevaNoticia = {
    título: formEl.título.value,
    descripción: formEl.cuerpo.value,
    imagen: formEl.imagen.value,
    categoría: formEl.categoría.value,
    género: formEl.género.value,
    favorito: formEl.favorito.checked,
  };
  console.log(editable)
  if(editable >= 0) {
    // idx
    noticias[editable] = nuevaNoticia;
    console.log("entro al IF")
  }
  //sino pusheo la noticia
  else{
  noticias.push(nuevaNoticia)
  console.log("Entro al else")
  }
  //resetear editable 
  editable = undefined
  

  //añadida una nueva noticia
  // noticias.push(nuevaNoticia);

  //guardamos el array modificado y JSONificado
  localStorage.setItem("noticias", JSON.stringify(noticias));

  //Pintamos la tabla de nuevo para ver los cambios
  renderProductos();
  //Vaciamos el formulario para que esté listo para una nueva carga
  cargarNoticiasForm.reset();
  //Hacemos focus en el título para facilitar la tarea al usuario
  const títuloInput = document.getElementById("título");
  títuloInput.focus();
});

function borrarNoticia(idx) {
  noticias.splice(idx, 1);
  localStorage.setItem("noticias", JSON.stringify(noticias));
  renderProductos();
}
//Función recibe un parámetro del elemento a editar
function editarNoticia(idx) {
  const noticiaAEditar = noticias[idx];
  console.log(noticiaAEditar)
  //Obtengo los inputs elementos del formulario
  const formEl = cargarNoticiasForm.elements;
  //Relleno los valores de los inputs con los valores a editar
  formEl.título.value = noticiaAEditar.título;
  formEl.cuerpo.value = noticiaAEditar.descripción;
  formEl.imagen.value = noticiaAEditar.imagen;
  formEl.categoría.value = noticiaAEditar.categoría;
  formEl.género.value = noticiaAEditar.género;
  formEl.favorito.checked = noticiaAEditar.favorito;

  editable = idx
}

