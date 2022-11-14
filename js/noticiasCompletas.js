const noticiasCompletas = JSON.parse(localStorage.getItem("noticias")) || []

const seccionNoticias = document.getElementById("noticiaCompleta")

function noticiasFull () {
    const idx = obtenerQueryParamId()
    const not = noticiasCompletas[idx] 
    seccionNoticias.innerHTML = `
    <h1 class="lead-1 text-primary border-bottom border-warning">${not.título}</h1>
    <div class="row">
        <div class="col-6">
            <img src="${not.imagen}" alt="" class="w-100">
        </div>
        <div class="col-6">
        <h3 class="text-danger">${not.fecha}</h3>
        <h3 class="text-danger">${not.categoría}</h3>
        <p class="text-danger">${not.descripción}</p>

        <a href=""></a>
        </div>
    `
}

function obtenerQueryParamId() {
const parametrosObtenidos = window.location.search
    const paramsURL= new URLSearchParams(parametrosObtenidos)
    const paramsEntries = Object.fromEntries(paramsURL)
    const indexURL = paramsEntries.id
    return indexURL
}

noticiasFull ()