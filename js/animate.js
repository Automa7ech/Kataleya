
// Set the date we're counting down to
var countDownDate = new Date("May 22, 2023 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Dias
    var nuevoTitulo1 = document.createElement('p');
    var nuevoTexto1 = document.createTextNode(days);
    nuevoTitulo1.appendChild(nuevoTexto1);
    var viejoNodo1 = document.querySelector("#dia p");
    viejoNodo1.parentNode.replaceChild(nuevoTitulo1, viejoNodo1);

    //Horas
    var nuevoTitulo2 = document.createElement('p');
    var nuevoTexto2 = document.createTextNode(hours);
    nuevoTitulo2.appendChild(nuevoTexto2);
    var viejoNodo2 = document.querySelector("#hora p");
    viejoNodo2.parentNode.replaceChild(nuevoTitulo2, viejoNodo2);

    //MIN
    var nuevoTitulo3 = document.createElement('p');
    var nuevoTexto3 = document.createTextNode(minutes);
    nuevoTitulo3.appendChild(nuevoTexto3);
    var viejoNodo3 = document.querySelector("#min p");
    viejoNodo3.parentNode.replaceChild(nuevoTitulo3, viejoNodo3);

    //Seg
    var nuevoTitulo4 = document.createElement('p');
    var nuevoTexto4 = document.createTextNode(seconds);
    nuevoTitulo4.appendChild(nuevoTexto4);
    var viejoNodo4 = document.querySelector("#seg p");
    viejoNodo4.parentNode.replaceChild(nuevoTitulo4, viejoNodo4);
    // Output the result in an element with id="countdown"
    // document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


// Set the date we're counting down to
var countDownDate2 = new Date("Jun 5, 2023 00:00:00").getTime();

// Update the countdown every second
var x1 = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance1 = countDownDate2 - now;

    // Calculate days, hours, minutes and seconds left
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Dias
    var nuevoTitulo1 = document.createElement('p');
    var nuevoTexto1 = document.createTextNode(days1);
    nuevoTitulo1.appendChild(nuevoTexto1);
    var viejoNodo1 = document.querySelector("#dia1 p");
    viejoNodo1.parentNode.replaceChild(nuevoTitulo1, viejoNodo1);

    //Horas
    var nuevoTitulo2 = document.createElement('p');
    var nuevoTexto2 = document.createTextNode(hours1);
    nuevoTitulo2.appendChild(nuevoTexto2);
    var viejoNodo2 = document.querySelector("#hora1 p");
    viejoNodo2.parentNode.replaceChild(nuevoTitulo2, viejoNodo2);

    //MIN
    var nuevoTitulo3 = document.createElement('p');
    var nuevoTexto3 = document.createTextNode(minutes1);
    nuevoTitulo3.appendChild(nuevoTexto3);
    var viejoNodo3 = document.querySelector("#min1 p");
    viejoNodo3.parentNode.replaceChild(nuevoTitulo3, viejoNodo3);

    //Seg
    var nuevoTitulo4 = document.createElement('p');
    var nuevoTexto4 = document.createTextNode(seconds1);
    nuevoTitulo4.appendChild(nuevoTexto4);
    var viejoNodo4 = document.querySelector("#seg1 p");
    viejoNodo4.parentNode.replaceChild(nuevoTitulo4, viejoNodo4);
    // Output the result in an element with id="countdown"
    // document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
