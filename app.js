// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []

function limpiarCasilla (){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo (){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.length === 0){
        alert("Por favor, inserte un nombre.");
    return;
    }
    amigo.push(nombreAmigo); 
    console.log(amigo)
    limpiarCasilla();
    mostraAmigos();
    
}

function mostraAmigos(){
   
   let listaAmigos  = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }



   
}

function sortearAmigo(){
    if(amigo.length === 0) {
        alert("No hay amigos para sortear");
    return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";


}
