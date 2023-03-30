(function(){
    'use strict';
     document.addEventListener('DOMContentLoaded',function(){

        var miImagen = document.querySelectorAll('.grupo img');
        console.log(miImagen.length);
        for(let i = 0; i < miImagen.length; i++){
            miImagen[i].style.height = 'auto';
        }
        
    });
})();
