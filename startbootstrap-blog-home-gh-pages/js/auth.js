const opcionesUsuarioHTML = document.getElementById("opciones-usuario")


function chequearLogin() {
    const usuarioLogeado = JSON.parse(localStorage.getItem("currentUser"));
    opcionesUsuarioHTML.innerHTML="";
if (usuarioLogeado){
    opcionesUsuarioHTML.innerHTML = `               <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="opciones-usuario">
        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#!">About us</a></li>
        <li class="nav-item"><a class="nav-link" href="#!">Contacto</a></li>
    </ul>
</div>
    <li class="nav-item"><a class="nav-link active" aria-current="page" onlick="logout()" href="#">Logout
    </a></li>`
}
else{
    opcionesUsuarioHTML.innerHTML = `<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="opciones-usuario">
        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#!">About us</a></li>
        <li class="nav-item"><a class="nav-link" href="#!">Contacto</a></li>
    </ul>
</div>
    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/startbootstrap-blog-home-gh-pages/login.html">Login
    </a></li>`
}
}
chequearLogin();


function logout() {
localStorage.removeItem("currentUser")
chequearLogin()
}