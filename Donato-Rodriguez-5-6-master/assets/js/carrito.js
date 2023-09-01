let finish = document.getElementById("finish");
let empty = document.getElementById("empty");

let tituloCarro = document.getElementById("tituloCarro");

let mensajeVacio = document.querySelector("h2");


function borrarCarrito(){
    let contenedorPA = document.getElementById("carro");
    let botones = document.getElementById("contenedorBotones");
    let carraso = document.getElementById("carraso");

    if(localStorage.getItem("productosAñadidos") == null){
        contenedorPA.style.display = "none";
        botones.style.display = "none";
    }
    else{
        let cont = 0;
        let listaAñadidos = [];
        function cartas(){
            
            listaAñadidos = JSON.parse(localStorage.getItem("productosAñadidos"));

            let carta= "";
            const cdpa = document.getElementById("productosSeleccionados");
            listaAñadidos.forEach((producto, index) =>{
                carta += `<div class="card" id="${index}" style="width: 18rem;">`;
                carta += `<img src="https://dummyimage.com/600x400/000/fff" class="card-img-top" alt="...">`;
                    carta += `<div class="card-body">`;
                        carta += `<h5 class="card-title">${producto.nombre}</h5>`;
                        carta += `<p class="card-text">$${producto.precio}</p>`;
                        carta += `<p class="card-text2">Stock: ${producto.descripcion}</p>`;
                    carta += `</div>`;
                carta += `</div>`;

                cont = index;
            });
            
            cdpa.innerHTML = carta;
        }

        document.onload = cartas();

        carraso.style.display = "none";
        contenedorPA.style.display = "block";
        botones.style.display = "block";
    }
}

borrarCarrito();


function borrarbotones(){
    let contenedorPA = document.getElementById("carro");
    let botones = document.getElementById("contenedorBotones");
    let carraso = document.getElementById("carraso");

    carraso.style.display = "block";
    contenedorPA.style.display = "none";
    botones.style.display = "none";
}


finish.onclick = (e) =>{
    e.preventDefault();
    alert("GRACIAS POR SU COMPRA");

    localStorage.removeItem("productosAñadidos");
    borrarbotones();
}

empty.onclick = (e) =>{
    e.preventDefault();

    localStorage.removeItem("productosAñadidos");    
    borrarbotones();
}