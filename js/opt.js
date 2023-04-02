(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        var miImagen = document.querySelectorAll('.grupo img');
        for (let i = 0; i < miImagen.length; i++) {
            miImagen[i].addEventListener('load', function() {
                miImagen[i].style.height = 'auto';
            });
        }
        
var yaCargada = flase;
function miFunction(){
    if(!yaCargada){
        actualizarPagina();
        yaCargada=true;
    }
}





    });

})();
function actualizarPagina(){
    location.reload();
}