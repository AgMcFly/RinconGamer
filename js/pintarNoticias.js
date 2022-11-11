const noticias = JSON.parse(localStorage.getItem("noticias")) || [] 
const noticiasPintadas = document.getElementById("noticiasSection")

function noticiasPintadasHTML() {
    noticiasSection.innerHTML= ""
    noticias.forEach((notic) => {
        noticiasSection.innerHTML += 
            `<div class="col-lg-6">
            <!-- Blog post-->
            <div class="card mb-4">
                <a href="#!"><img class="card-img-top" src="${notic.imagen}" alt="${notic.título}" /></a>
                <div class="card-body">
                    <div class="small text-muted">6 Noviembre, 2022</div>
                    <h2 class="card-title h4">${notic.título}</h2>
                    <p class="card-text">${notic.descripción}</p>
                    <a class="btn btn-primary" href="#!">Leer mas →</a>
                </div>
            </div>`
    });
}

noticiasPintadasHTML()