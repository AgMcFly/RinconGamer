const opcionesUsuarioHTML = document.getElementById("opciones-usuario")
console.log(`dsadas`)
function chequearLogin() {
    const usuarioLogeado = JSON.parse(localStorage.getItem("currentUser"));
    // opcionesUsuarioHTML.innerHTML="";
    const logged = document.getElementById('logged')
if (usuarioLogeado){
    logged.innerHTML = `<a class="nav-link active" aria-current="page" onclick="logout()" href="#">
        Logout
    </a>`
}
else{
    logged.innerHTML = `
   <a class="nav-link active" aria-current="page" href="/startbootstrap-blog-home-gh-pages/login.html">
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