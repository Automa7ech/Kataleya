(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){

        const miImagen = document.querySelector('.grupo img');
        for(var i=0; i< miImagen.length;i++){
            miImagen[i].style.height = 'auto';
        }
    });
})();
