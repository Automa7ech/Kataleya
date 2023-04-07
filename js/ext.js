function accion() {
  var ancla = document.getElementsByClassName("nav-enlace");
  var vari = document.getElementsByClassName("abs");
  for (var i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("desaparece");
  }
  vari[0].classList.toggle("textura");
}
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el elemento .navbar h2
    const navbarTitle = document.querySelectorAll(".navbar h2");

    // Creamos una nueva instancia de Intersection Observer:
    const observer = new IntersectionObserver(
      (entradas) => {
        // Cuando el elemento .navbar h2 esté en la pantalla, realizamos la acción que deseamos:
        if (entradas[0].isIntersecting) {
          miFuncion();
        } else {
          // Si el elemento sale de la pantalla, podemos realizar otra acción si lo deseamos
        }
      },
      // Opciones de Intersection Observer:
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Ajusta este valor para que sea el porcentaje de visible que deseas que tenga el elemento
      }
    );

    // Observamos el elemento .navbar h2:
    for (var i = 0; i < navbarTitle.length; i++) {
      observer.observe(navbarTitle[i]);
    }

    function miFuncion() {
      for (var i = 0; i < navbarTitle.length; i++) {
        navbarTitle[i].classList.add(
          "animate__animated",
          "animate__pulse",
          "animate__infinite"
        );
      }
      // Aquí dentro iría el código que deseas que se ejecute cuando el elemento .navbar h2 esté visible en la pantalla
    }
/*
    const imagen = document.querySelectorAll(".grupo img");
    for (var i = 0; i < imagen.length; i++) {
      imagen[i].addEventListener("mouseover", () => {
        // imagen[i].classList.add("animate__animated", "animate__pulse");
        console.log(imagen[i].length);
      });
    }

    for (var i = 0; i < imagen.length; i++) {
      imagen[i].addEventListener("mouseout", () => {
        imagen[i].classList.remove("animate__animated", "animate__pulse");
      });
    }*/

    var miImagen = document.querySelectorAll(".grupo img");
    for (let i = 0; i < miImagen.length; i++) {
      miImagen[i].addEventListener("load", function () {
        miImagen[i].style.height = "auto";
      });
    }
  });
})();
