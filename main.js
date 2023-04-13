let listaDeNombres = [];
let nameListDiv = document.getElementById("participantes")
document.getElementById("boton-nombre").addEventListener("click", () => {
    let name = document.getElementById("casilla-nombre").value;
    listaDeNombres.push(name);
    // limpiar el input
  
// pintar la lista de nombres que tenemos hasta ahora dentro del div que tiene el id "lista-de-nombres"
for (let i = 0; i < listaDeNombres.length; i++) {

 let lastElement = listaDeNombres.pop(listaDeNombres.length -1);
 let nameElement = document.createElement("p");
 let nameText = document.createTextNode(lastElement);

 nameElement.appendChild(nameText);
 nameListDiv.appendChild(nameElement);
}
});

function aleatorio() {
let select = document.getElementById("list");
let items = select.getElementByTagName("option");
let index = Math.floor(Math.random()*items.length);
items[index].setAttribute('selected', true);
}
  //añadir codigo modo nocturno
  