class Producto{
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}


function validacionForm(){
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
        if(isNaN(precio)){
            alert("No puede ingresar letras en el precio, debe ingresar numeros.")
            return false;
        }
    if(nombre == "" || precio == "" || descripcion == ""){
        alert("El formulario está incompleto.")
        return false;
    }

    return true;
}


let cont = 0;
function cartas(){
    let listaProductos;

    if(localStorage.getItem("productos") == null){
        listaProductos = [
            { nombre: "nada", precio: 500, descripcion:"nada, el mejor regalo para aquel que lo tiene todo" },
            { nombre: "mazo trucado", precio: 200, descripcion:"un mazo para aquellos payasos que se hacen llamar magos" },
            { nombre: "boina", precio: 300, descripcion: "todo el estilo del mundo para la parte superior de tu cabeza" },
            { nombre: "trompeta", precio: 300, descripcion: "wa wawa waaaaa, es una trompeta que esperebas? " },
        ];
        localStorage.setItem("productos", JSON.stringify(listaProductos));
    }
    else{
        listaProductos = JSON.parse(localStorage.getItem("productos"));
    }
    

    let carta= "";
    const cdp = document.getElementById("cartas");
    listaProductos.forEach((producto, index) =>{
        carta += `<div class="card" id="producto${index}" style="width: 18rem;">`;
        carta += `<img src="https://dummyimage.com/600x400/000/fff" class="card-img-top" alt="...">`;
            carta += `<div class="card-body">`;
                carta += `<h5 class="card-title">${producto.nombre}</h5>`;
                carta += `<p class="card-text">$${producto.precio}</p>`;
                carta += `<p class="card-text2"> ${producto.descripcion}</p>`;
                carta += `<input type="submit" class="btn btn-primary" id="botonañadir${index}" value="Buy now">`;
            carta += `</div>`;
        carta += `</div>`;

        cont = index
    });
    
    cdp.innerHTML = carta;



    let listaAñadidos;

    if(localStorage.getItem("productosAñadidos") == null){
        listaAñadidos = [];
    }
    else{
        listaAñadidos = JSON.parse(localStorage.getItem("productosAñadidos"));
    }
    

    for (let i = 0; i<cont+1; i++){
        let botonañadir = document.getElementById("botonañadir" + i);

        botonañadir.onclick = (e) =>{
            e.preventDefault()

            listaProductos = JSON.parse(localStorage.getItem("productos"));

            let producto = new Producto(listaProductos[i].nombre, listaProductos[i].precio, listaProductos[i].descripcion);

            listaAñadidos.push(producto);

            localStorage.setItem("productosAñadidos", JSON.stringify(listaAñadidos));
        }
    }
}

document.onload = cartas();



function agregaProd(){
    if (validacionForm() == true){

        let nombre = document.getElementById("nombre").value;
        let precio = document.getElementById("precio").value;
        let descripcion = document.getElementById("descripcion").value;

        let listaProductos;

        if(localStorage.getItem("productos") == null){
            listaProductos = [
                { nombre: "nada", precio: 500, descripcion:"nada, el mejor regalo para aquel que lo tiene todo" },
                { nombre: "mazo trucado", precio: 200, descripcion:"un mazo para aquellos payasos que se hacen llamar magos" },
                { nombre: "boina", precio: 300, descripcion: "todo el estilo del mundo para la parte superior de tu cabeza" },
                { nombre: "trompeta", precio: 300, descripcion: "wa wawa waaaaa, es una trompeta que esperebas? " },
               ];
        }
        else{
            listaProductos = JSON.parse(localStorage.getItem("productos"))
        }

        let producto = new Producto(nombre, precio, descripcion);
    
        listaProductos.push(producto);

        localStorage.setItem("productos", JSON.stringify(listaProductos));
        cartas();
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("descripcion").value = "";
    }
    
}



let boton = document.getElementById("añadir");

boton.onclick = (e) =>{
    e.preventDefault()
    validacionForm()
    agregaProd()
}




const formProductos = document.getElementById("alguien-ayudeme");

function esAdmin(){
    let adminActivo = localStorage.getItem("Administrador");
    
    if(adminActivo == "ACTIVO"){
        formProductos.style.display = "block";
    }
    else{
        formProductos.style.display = "none";
    }
}

esAdmin();