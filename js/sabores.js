(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
      
      if(document.getElementById('sabores')){
        //Helados
      var nuevoTitulo = document.createElement("p");
      var nuevoTexto = document.createTextNode("Chocolate, Coco, Vainilla, Naranja Piña");
      nuevoTitulo.appendChild(nuevoTexto);
      var viejoNodo = document.querySelector("#sabores p");
      viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);

      }
      else if (document.getElementById("suero")) {
        //Suero
        var nuevoTitulo1 = document.createElement("p");
        var nuevoTexto1 = document.createTextNode("Vainilla, Chocolate, Coco, Naranja Piña");
        nuevoTitulo1.appendChild(nuevoTexto1);
        var viejoNodo1 = document.querySelector("#suero p");
        viejoNodo1.parentNode.replaceChild(nuevoTitulo1, viejoNodo1);

      }
      else if (document.getElementById("frappe")) {
        //Frappe
        var nuevoTitulo2 = document.createElement("p");
        var nuevoTexto2 = document.createTextNode("Naranja, Fresa, Melon, Durazno, Guanábana, Manzana, Limón ");
        nuevoTitulo2.appendChild(nuevoTexto2);
        var viejoNodo2 = document.querySelector("#frappe p");
        viejoNodo2.parentNode.replaceChild(nuevoTitulo2, viejoNodo2);

      }
      else if (document.getElementById("batido")) {
        //Batido
        var nuevoTitulo3 = document.createElement("p");
        var nuevoTexto3 = document.createTextNode("Coco, Chocolate, Vainilla, Naranja Piña");
        nuevoTitulo3.appendChild(nuevoTexto3);
        var viejoNodo3 = document.querySelector("#batido p");
        viejoNodo3.parentNode.replaceChild(nuevoTitulo3, viejoNodo3);

      } 
      else if (document.getElementById("natural")) {
        //Batido Natural
        var nuevoTitulo4 = document.createElement("p");
        var nuevoTexto4 = document.createTextNode("Mamey, Mango");
        nuevoTitulo4.appendChild(nuevoTexto4);
        var viejoNodo4 = document.querySelector("#natural p");
        viejoNodo4.parentNode.replaceChild(nuevoTitulo4, viejoNodo4);

      }
       else if (document.getElementById("jugo")) {
         //Jugo Natural
         var nuevoTitulo5 = document.createElement("p");
         var nuevoTexto5 = document.createTextNode("Mango");
         nuevoTitulo5.appendChild(nuevoTexto5);
         var viejoNodo5 = document.querySelector("#jugo p");
         viejoNodo5.parentNode.replaceChild(nuevoTitulo5, viejoNodo5);
       }
    });
})();