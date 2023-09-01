let activo = "ACTIVO";
let inactivo = "INACTIVO";

function Administrador(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    
    if(usuario == "1" && contraseña == "1"){
        localStorage.setItem("Administrador", activo);
    }
    else{
        localStorage.setItem("Administrador", inactivo);
    }

    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
}

let boton = document.getElementById("butt");

boton.onclick = (e) =>{
    e.preventDefault()
    Administrador()
    AA()
};


const form = document.getElementById("form");
const admin = document.getElementById("shadow");


function AA(){
    let AdminActivo = localStorage.getItem("Administrador");

    if(AdminActivo == "ACTIVO"){
        form.style.display = "none";
        admin.style.display = "block";
    }
}
AA();



let close1 = document.getElementById("close");

close1.onclick = (e) =>{
    e.preventDefault()
    form.style.display = "block";
    admin.style.display = "none";
    localStorage.setItem("Administrador", inactivo);
};