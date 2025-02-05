// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// app.js
let amigos = []; // Array para almacenar los amigos

function agregarAmigo() {
  let inputNombre = document.getElementById('amigo');
  let nombre = inputNombre.value;

  if (nombre !== "") { // Valida que no esté vacío
    amigos.push(nombre); // Añade al final del array
    inputNombre.value = ""; // Limpia el input
    mostrarListaAmigos(); // Actualiza la lista en el HTML
  } else {
    alert("Por favor, ingresa un nombre."); // Alerta si el input está vacío
  }
}

function mostrarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ""; // Limpia la lista
  amigos.forEach(nombre => {
    let li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
    if (amigos.length < 2) {// Validcion de que no esta vacio el array
    alert("No se puede sortear ingresar almenos dos nombres para el sorte:");
    return;
}

    let indiceAleatorio = Math.floor(Math.random()* amigos.length);//indice aleotorio
    let nombreSorteado = amigos[indiceAleatorio];
    //Mostrar resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; //Limpia

    let li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${nombreSorteado}`;
    resultado.appendChild(li);
}


