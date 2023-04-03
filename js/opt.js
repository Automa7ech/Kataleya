(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        var miImagen = document.querySelectorAll('.grupo img');
        for (let i = 0; i < miImagen.length; i++) {
            miImagen[i].addEventListener('load', function() {
                miImagen[i].style.height = 'auto';
            });
            // if(i==0){
            //     setTimeout(function(){
            //     window.location.reload();
            // },5000);
            // }
            let lastUpdate = 0; //Variable que almacena el momento de la última actualización

function update() {
  const currentTime = new Date().getTime(); //Se obtiene el tiempo actual
  if(currentTime - lastUpdate >= 10000) { //Si han pasado 10 segundos desde la última actualización
    console.log('Actualizando...');
    lastUpdate = currentTime; //Se registra el momento de la última actualización
  }
  setTimeout(update, 1000); //Se establece una espera de 1 segundo antes de la siguiente actualización
};

update(); //Se inicia la función
        }
    

    });

})();
