const opcionesUsuarioHTML = document.getElementById("opciones-usuario")

function chequearLogin() {
    const usuarioLogeado = JSON.parse(localStorage.getItem("currentUser"));
    // opcionesUsuarioHTML.innerHTML="";
    const logged = document.getElementById('logged')
if (usuarioLogeado){
    logged.innerHTML = `<a class="nav-link active" aria-current="page" onclick="logout()" href="#">
        Logout
    </a>`;
    if(usuarioLogeado.role === 'ADMIN_ROLE') {
        opcionesUsuarioHTML.innerHTML = ` <li class="nav-item"><a class="nav-link text-primary" href=/Administrador/adminIndex.html"Administrar Noticias</a></li>` + opcionesUsuarioHTML.innerHTML
    }
}
else{
    logged.innerHTML = `
   <a class="nav-link active" aria-current="page" href="/login.html">
    Login
    </a>`
}
}


chequearLogin();




function logout() {
    console.log(`dsadsa`)
    localStorage.removeItem("currentUser")
    chequearLogin()
}

