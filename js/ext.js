function accion() {
  var ancla = document.getElementsByClassName("nav-enlace");
  var vari = document.getElementsByClassName("abs");
  for (var i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("desaparece");
  }
  vari[0].classList.toggle("textura");
}
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () { 
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    console.log(nombre);

    if(nombre == 1234){
      console.log("pinga");
    }else{
      console.log("nop");
    }
    
  });
})();
