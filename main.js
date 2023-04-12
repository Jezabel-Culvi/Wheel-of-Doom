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
  