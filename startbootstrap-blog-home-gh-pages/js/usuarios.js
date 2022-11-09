const users = 
// JSON.parse(localStorage.getItem("users")) || []
[
{
    nombre: "Gerónimo Dimarco",
    email: "gerodimarco@gmail.com",
    password: "geroadmin",
    active: true,
    role: "ADMIN_ROLE"
},
{
    nombre: "Rossi Agustín",
    email: "agustinrossituc@gmail.com",
    password: "agustinadmin",
    active: true,
    role: "ADMIN_ROLE"
},
{
    nombre: "Belén García",
    email: "belengamer@gmail.com",
    password: "belenadmin",
    active: true,
    role: "ADMIN_ROLE"
},
]

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (evt)=>{
evt.preventDefault();
const emailInput = evt.target.elements.email.value;
const contraseñaInput = evt.target.elements.password.value;

const usuario = users.find((usr) =>{
    if(usr.email === emailInput){
        return true
    }
    return false
});



if(usuario===undefined){
swal("ERROR", "los datos no son correctos","warning")
return
}

if(usuario.password === contraseñaInput){
    swal ("LOGIN CORRECTO", "Bienvenido","success");
usuario.password = undefined
localStorage.setItem("currentUser", JSON.stringify(usuario))
setTimeout(function(){
    window.location.href = "/Administrador/adminIndex.html"}, 2000)
    
}

else{
    swal("ERROR", "los datos no son correctos","warning")
return
}
console.log("user encontrado", usuario)

}
)


