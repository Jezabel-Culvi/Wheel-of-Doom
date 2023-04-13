let listaDeNombres = [];

document.getElementById("boton-nombre").addEventListener("click", () => {
    let name = document.getElementById("casilla-nombre").value;
    listaDeNombres.push(name);
    // limpiar el input

// pintar la lista de nombres que tenemos hasta ahora dentro del div que tiene el id "lista-de-nombres"

let participantes = listaDeNombres.map(function(bar){
   for (let i = 0; i < listaDeNombres.lenght; i++) {
   listaDeNombres += '<li>'+bar[i]+'</li>';
 }
 });
  document.getElementById("participantes").innerHTML = participantes;
})
/*let participantes = listaDeNombres.map(function(bar){
   return '<p>'+bar+'</p>'
 });
  document.getElementById("participantes").innerHTML = participantes;
})

function aleatorio() {
let select = document.getElementById("list");
let items = select.getElementByTagName("option");
let index = Math.floor(Math.random()*items.length);
items[index].setAttribute('selected', true);
}
 function agregar() {
    if (document.frm.txtNombre.value.length == 0) {
      alert("No se permiten textos vacios")
    } else {
      var nuevoitem = document.frm.txtNombre.value;
      var list = document.getElementById("selNombre");
      var option = document.createElement("option");
      list.options.add(option, 0);
      list.options[0].value = nuevoitem;
      list.options[0].innerText = nuevoitem;
      document.frm.txtNombre.value = "";
    }
  
  }





  //añadir codigo modo nocturno
  