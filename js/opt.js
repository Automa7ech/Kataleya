(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        var miImagen = document.querySelectorAll('.grupo img');
        for (let i = 0; i < miImagen.length; i++) {
            miImagen[i].addEventListener('load', function() {
                miImagen[i].style.height = 'auto';
            });
        }
    
const unaVez =(function(){
    var yaCargada = flase;

    function ejecutar(){
        if(!yaCargada){
            setTimeout(function(){
                window.location.reload();
            },5000);
            yaCargada=true;
        }
    }
    return ejecutar;
})();



    });

})();
