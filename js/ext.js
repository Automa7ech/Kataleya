function accion(){
    var ancla = document.getElementsByClassName('nav-enlace');
    var vari = document.getElementsByClassName('abs');
    for(var i = 0;  i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
        

    }
    vari[0].classList.toggle('textura');
}
(function() {

    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        var miImagen = document.querySelectorAll('.grupo img');
        for (let i = 0; i < miImagen.length; i++) {
            miImagen[i].addEventListener('load', function() {
                miImagen[i].style.height = 'auto';
            });
        }
        


    });

})();
