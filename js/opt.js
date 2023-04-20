function rando() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    var min = 1;
    var max = 19;
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    if(nombre!=randomNum){
    switch (randomNum) {
        case 1:
            window.location.replace("../html/expresso.html?nombre=1");
            break;
        case 2:
            window.location.replace("../html/Vaca Negra.html?nombre=2");
            break;
        case 3:
            window.location.replace("../html/Suero.html?nombre=3");
            break;
        case 4:
            window.location.replace("../html/Ruso.html?nombre=4");
            break;
        case 5:
            window.location.replace("../html/PinaBlue.html?nombre=5");
            break;
        case 6:
            window.location.replace("../html/PinaColada.html?nombre=6");
            break;
        case 7:
            window.location.replace("../html/Naranjada.html?nombre=7");
            break;
        case 8:
            window.location.replace("../html/Monike.html?nombre=8");
            break;
        case 9:
            window.location.replace("../html/Moka.html?nombre=9");
            break;
        case 10:
            window.location.replace("../html/Frappe.html?nombre=10");
            break;
        case 11:
            window.location.replace("../html/Cubache.html?nombre=11");
            break;
        case 12:
            window.location.replace("../html/Cortado.html?nombre=12");
            break;
        case 13:
            window.location.replace("../html/ChocoMani.html?nombre=13");
            break;
        case 14:
            window.location.replace("../html/Batido.html?nombre=14");
            break;
        case 15:
            window.location.replace("../html/Bombom.html?nombre=15");
            break;
        case 16:
            window.location.replace("../html/Capuccino.html?nombre=16");
            break;
        case 17:
            window.location.replace("../html/Pitufo.html?nombre=17");
            break;
        case 18:
            window.location.replace("../html/Mamey.html?nombre=18");
            break;
        case 19:
            window.location.replace("../html/Frapuccino.html?nombre=19");
    }
    }else{
        rando();
    }

}
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {





    });

})();
