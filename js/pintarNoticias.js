const noticiasPintar = JSON.parse(localStorage.getItem("noticias")) || [] 
const noticiasPintadas = document.getElementById("noticiasSection")

function noticiasPintadasHTML() {
    noticiasSection.innerHTML= ""
    noticiasPintar.forEach((notic,index) => {
        noticiasSection.innerHTML += 
            `<div class="col-lg-6">
            <!-- Blog post-->
            <div class="card mb-4">
                <a href="#!"><img class="card-img-top" src="${notic.imagen}" alt="${notic.título}" /></a>
                <div class="card-body">
                    <div class="small text-muted">${notic.fecha}</div>
                    <h2 class="card-title h4">${notic.título}</h2>
                    <p class="card-text">${notic.descripción}</p>
                    <a class="btn btn-primary" href="/paginaNoticias.html?id=${index}">Leer mas →</a>
                </div>
            </div>`
    });
}


noticiasPintadasHTML()


