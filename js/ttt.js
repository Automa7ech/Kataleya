(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        
        
        const fecha = new Date();
        var semana = fecha.getDay();
        var hora = fecha.getHours();
        var nuevoTitulo = document.createElement('h2');
        if(semana==1 || semana==2 || semana==3 || semana==4 || semana==5){
            if(hora >= 8 && hora <=11){
                var nuevoTexto = document.createTextNode('Buenos Dias');
                nuevoTitulo.appendChild(nuevoTexto);
            }else if(hora > 11 && hora <= 17){
                var nuevoTexto = document.createTextNode('Buenas Tardes');
                nuevoTitulo.appendChild(nuevoTexto);
            }else if(hora > 18 && hora <= 23){
                var nuevoTexto = document.createTextNode('Buenas Noches');
                nuevoTitulo.appendChild(nuevoTexto);
            }else{
                var nuevoTexto = document.createTextNode('Cerrado');
                nuevoTitulo.appendChild(nuevoTexto);
            }
        }else{
            var nuevoTexto = document.createTextNode('No Laborable');
            nuevoTitulo.appendChild(nuevoTexto);
        };
        var viejoNodo = document.querySelector('.texto-header h2');
        viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
    
    
    
    });
})();