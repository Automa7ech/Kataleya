const miImagen = document.querySelector('.mi-clase');
const altura = window.getComputedStyle(miImagen).getPropertyValue('height');
miImagen.style.height = altura;
