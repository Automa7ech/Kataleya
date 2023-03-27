const miImagen = document.querySelector('.mi-imagen');
const altura = window.getComputedStyle(miImagen).getPropertyValue('height');
miImagen.style.height = altura;
