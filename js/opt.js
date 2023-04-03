(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        var miImagen = document.querySelector('.grupo img');
            miImagen.addEventListener('load', function() {
                miImagen.style.height = 'auto';
            });
            if(miImagen.style.height === 'auto'){
                setTimeout(function(){
                window.location.reload();
            },1000);
            }
        
    

    });

})();
