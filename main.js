let listaDeNombres = [];
let nameListDiv = document.getElementById("participantes")
document.getElementById("boton-nombre").addEventListener("click", () => {
  let name = document.getElementById("casilla-nombre").value;
  listaDeNombres.push(name);
  // limpiar el input
  document.getElementById("casilla-nombre").value = ""
  // pintar la lista de nombres que tenemos hasta ahora dentro del div que tiene el id "lista-de-nombres"
  actualizarListaDeNombres();
});

// funcion que selecciona una participante aleatoria y la pinta en el cuadro del resultado.
function actualizarListaDeNombres() {
  nameListDiv.innerHTML = listaDeNombres.join("<br/>");
}

function aleatorio() {
  let numero = Math.floor(Math.random()*listaDeNombres.length);
  let nombre = listaDeNombres[numero];
  document.getElementById("result").innerHTML = nombre;
  listaDeNombres.splice(numero,1);
  actualizarListaDeNombres();
}

function reset() {
  // vaciar la lista que tiene los nombres
  document.getElementById("result").value = "";
  while (listaDeNombres.length > 0)
  listaDeNombres.pop()
  // actualizar lo que se ve en pantalla para que se borre usando la funcion actualizarlistaDeNombres
  actualizarListaDeNombres();
}

  //añadir codigo modo nocturno
  function enableDarkMode(){
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
    }
