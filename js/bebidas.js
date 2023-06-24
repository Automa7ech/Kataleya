const product_esp = [
  {
    id: 0,
    image: "img_drink/Pitufo.jpg",
    title: "Pitufo",
    link: "html/Pitufo.html",
    star: 5,
    price: 80,
    text: `<i class="fa-solid fa-star"></i>`,
  },
{
    id: 1,
    title: "Batido de Cafe",
    link: "html/batidoDeCafe.html",
    image: "img_drink/batidoDeCafe.jpg",
    star: 5,
    price: 150,
    text: `<i class="fa-solid fa-star"></i>`,
  },
   {
    id: 2,
    image: "img_drink/CopaPasion.jpg",
    title: "Copa Pasión",
    link: "html/copaPasion.html",
    star: 5,
    price: 150,
    text: `<i class="fa-solid fa-star"></i>`,
  },
   {
    id: 3,
    image: "img_drink/EspecialDeVerano.jpg",
    title: "Copa Pasión",
    link: "html/especialDeVerano.html",
    star: 5,
    price: 100,
    text: `<i class="fa-solid fa-star"></i>`,
  },  
];

const categories1 = [...new Set(product_esp.map((item1) => { return item1 }))]
let i = 0;
document.getElementById('nav1').innerHTML = categories1.map((item1) => {
    var { image, title, price, star, link, text } = item1;
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
    return (
        `<div data-aos="fade-up" class="card-product">
            <div class="container-img">
                <img src="${image}"/>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${text}
                </div>
                <h3>${title}</h3>
                <span class="add-cart">
                    <a href="${link}"><b>Info</b></a>
                </span>
                <p class="price">$${price}.00</p>
            </div>
        </div>`
    )
}).join('')

/**********************************************Cafe*********************************************/
const product_cafe = [
  {
    id: 0,
    title: "Cafe Expresso",
    link: "html/expresso.html?nombre=1",
    image: "img_drink/expresso.jpg",
    star: 4,
    price: 35,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 1,
    title: "Cafe Cortadito",
    link: "html/Cortado.html?nombre=12",
    image: "img_drink/Cortado.jpg",
    star: 5,
    price: 50,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 2,
    title: "Cafe Bombom",
    image: "img_drink/Bombom.jpg",
    link: "html/Bombom.html?nombre=15",
    star: 4,
    price: 60,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 3,
    title: "Cafe Ruso",
    link: "html/Ruso.html?nombre=4",
    image: "img_drink/Ruso.jpg",
    star: 5,
    price: 70,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 4,
    title: "Cafe Cappuccino",
    link: "html/Capuccino.html?nombre=16",
    image: "img_drink/Capuccino.jpg",
    star: 4,
    price: 80,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 5,
    title: "Cafe Moca",
    link: "html/Moka.html?nombre=9",
    image: "img_drink/Moka.jpg",
    star: 3,
    price: 80,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 6,
    title: "Cafe Moniek",
    link: "html/Monike.html?nombre=8",
    image: "img_drink/Monique.jpg",
    star: 3,
    price: 40,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 7,
    title: "Cafe Frapuchino",
    link: "html/Frapuccino.html?nombre=5",
    image: "img_drink/Frapuccino.jpg",
    star: 4,
    price: 80,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 8,
    title: "Cubache",
    link: "html/Cubache.html?nombre=11",
    image: "img_drink/Cubache.jpg",
    star: 4,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
];
const categories2 = [...new Set(product_cafe.map((item2) => { return item2 }))]
let j = 0;
document.getElementById('nav2').innerHTML = categories2.map((item2) => {
    var { title, price, star, link, text, agotado, image, disponible } = item2;
    if (agotado == 1) {
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
}
    if (agotado == 0) {
        text="Agotado";
    }
    if(disponible==1){
        return `<div data-aos="flip-down" class="card-product">
            <div class="container-img">
                <img src="${image}"/>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${text}
                </div>
                <h3>${title}</h3>
                <span class="add-cart">
                    <a href="${link}"><b>Info</b></a>
                </span>
                <p class="price">$${price}.00</p>
            </div>
        </div>`;
    }
}).join('')

/**********************************************Frias*********************************************/
const product_fria = [
  {
    id: 0,
    title: "Suero",
    link: "html/Suero.html?nombre=3",
    image: "img_drink/Suero.jpg",
    star: 5,
    price: 150,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 1,
    title: "Frappe",
    link: "html/Frappe.html?nombre=10",
    image: "img_drink/Frappe.jpg",
    star: 5,
    price: 50,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 2,
    title: "ChocoMani",
    link: "html/Chocomani.html?nombre=13",
    image: "img_drink/Chocomani.jpg",
    star: 4,
    price: 120,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 3,
    title: "Naranjada",
    link: "html/Naranjada.html?nombre=7",
    image: "img_drink/Naranjada.jpg",
    star: 4,
    price: 100,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 4,
    title: "Piña Colada",
    link: "html/PinaColada.html?nombre=6",
    image: "img_drink/PinaColada.jpg",
    star: 4,
    price: 100,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 5,
    title: "Piña Blue",
    link: "html/PinaBlue.html?nombre=5",
    image: "img_drink/PinaBlue.jpg",
    star: 4,
    price: 150,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 6,
    title: "Vaca Negra",
    link: "html/Vaca Negra.html?nombre=2",
    image: "img_drink/Vaca Negra.jpg",
    star: 3,
    price: 80,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 7,
    title: "Batidos",
    link: "html/Batido.html?nombre=14",
    image: "img_drink/Batido.jpg",
    star: 5,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 8,
    title: "Batido Natural",
    link: "html/Mamey.html?nombre=18",
    image: "img_drink/Mamey.jpg",
    star: 5,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 9,
    title: "Pitufo",
    link: "html/Pitufo.html?nombre=17",
    image: "img_drink/Pitufo.jpg",
    star: 5,
    price: 80,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 9,
    title: "Batido de Cafe",
    link: "html/batidoDeCafe.html",
    image: "img_drink/batidoDeCafe.jpg",
    star: 5,
    price: 150,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 10,
    title: "Batido de Kiwi",
    link: "html/kiwi.html",
    image: "img_drink/kiwi.jpg",
    star: 5,
    price: 120,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 11,
    title: "Jugo Natural",
    link: "html/Carambola.html",
    image: "img_drink/Carambola.jpg",
    star: 4,
    price: 50,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },{
    id: 12,
    image: "img_drink/EspecialDeVerano.jpg",
    title: "Copa Pasión",
    link: "html/especialDeVerano.html",
    star: 5,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  }, 
];
const categories3 = [...new Set(product_fria.map((item3) => { return item3 }))]
let k = 0;
document.getElementById('nav3').innerHTML = categories3.map((item3) => {
   var { title, price, star, link, text, agotado, image, disponible } = item3;
   if (agotado == 1) {
     for (var a = 1; a < 5; a++) {
       if (a < star) {
         text = text + `<i class="fa-solid fa-star"></i>`;
       } else {
         text = text + `<i class="fa-regular fa-star"></i>`;
       }
     }
   }
   if (agotado == 0) {
     text = "Agotado";
   }
    if(disponible==1){
   return `<div data-aos="flip-down" class="card-product">
            <div class="container-img">
                <img src="${image}"/>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${text}
                </div>
                <h3>${title}</h3>
                <span class="add-cart">
                    <a href="${link}"><b>Info</b></a>
                </span>
                <p class="price">$${price}.00</p>
            </div>
        </div>`;
    }
}).join('')

/**********************************************SS*********************************************/
const product_ss = [
  {
    id: 0,
    title: "Gelatina",
    link: "html/Gelatina.html",
    image: "img_drink/Gelatina.jpg",
    star: 4,
    price: 40,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 1,
    title: "Donas",
    link: "html/Donas.html",
    image: "img_drink/Donas.jpg",
    star: 5,
    price: 80,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 2,
    title: "Croquetas al plato",
    link: "html/croqueta.html",
    image: "img_drink/croqueta.jpg",
    star: 4,
    price: 60,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 3,
    title: "Turquino",
    link: "html/Turkino.html",
    image: "img_drink/Turkino.jpg",
    star: 5,
    price: 80,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 4,
    title: "Dulce de Coco",
    link: "html/DulceCoco.html",
    image: "img_drink/DulceCoco.jpg",
    star: 3,
    price: 60,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 5,
    title: "Doble Tentacion",
    link: "html/Doble Tentacion.html?nombre=5",
    image: "img_drink/Doble Tentacion.jpg",
    star: 4,
    price: 70,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 6,
    title: "Tres Gracias",
    link: "html/TresGracias.html",
    image: "img_drink/TresGracias.jpg",
    star: 4,
    price: 50,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 7,
    title: "Panquecito",
    link: "html/Panquesito.html",
    image: "img_drink/Panquesito.jpg",
    star: 4,
    price: 40,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 8,
    title: "Ensalada",
    link: "html/Ensalada.html",
    image: "img_drink/Ensalada.jpg",
    star: 5,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 9,
    title: "Pan c/ Hamburguesa",
    link: "html/Hamburguesa.html",
    image: "img_drink/Hamburguesa.jpg",
    star: 5,
    price: 100,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 10,
    title: "Pan c/ Tortilla",
    link: "html/Tortilla.html",
    image: "img_drink/Tortilla.jpg",
    star: 3,
    price: 90,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 11,
    title: "Panes",
    link: "html/CremayMayonesa.html",
    image: "img_drink/CremayMayonesa.jpg",
    star: 3,
    price: 40,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 12,
    title: "Borrachita",
    link: "html/Borrachita.html",
    image: "img_drink/Borrachita.jpg",
    star: 5,
    price: 40,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 13,
    title: "Muss de Café",
    link: "html/mousse.html?nombre=5",
    image: "img_drink/mousse.jpg",
    star: 5,
    price: 100,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 14,
    title: "Sandwich de queso",
    link: "html/panes2.html?nombre=5",
    image: "img_drink/panes2.jpg",
    star: 4,
    price: 50,
    agotado: 0,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 15,
    title: "Copa Goloso",
    link: "html/CopaGoloso.html?nombre=5",
    image: "img_drink/CopaGoloso.jpg",
    star: 5,
    price: 150,
    agotado: 1,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 16,
    title: "Super Peque",
    link: "html/SuperPeque.html?nombre=5",
    image: "img_drink/SuperPeque.jpg",
    star: 4,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 17,
    image: "img_drink/CopaPasion.jpg",
    title: "Copa Pasión",
    link: "html/copaPasion.html",
    star: 5,
    price: 150,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
];
const categories4 = [...new Set(product_ss.map((item4) => { return item4 }))]
let l = 0;
document.getElementById('nav4').innerHTML = categories4.map((item4) => {
    var { title, price, star, link, text, agotado, image, disponible } = item4;
    if (agotado == 1) {
      for (var a = 1; a < 5; a++) {
        if (a < star) {
          text = text + `<i class="fa-solid fa-star"></i>`;
        } else {
          text = text + `<i class="fa-regular fa-star"></i>`;
        }
      }
    }else if (agotado == 0) {
      text = "Agotado";
    }
    if(disponible==1){
    return `<div data-aos="flip-down" class="card-product">
            <div class="container-img">
                <img src="${image}"/>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${text}
                </div>
                <h3>${title}</h3>
                <span class="add-cart">
                    <a href="${link}"><b>Info</b></a>
                </span>
                <p class="price">$${price}.00</p>
            </div>
        </div>`;
    }
}).join('')

/**********************************************pi*********************************************/
const product_pi = [
  {
    id: 0,
    title: "Pomo de agua",
    link: "html/PomoAgua.html",
    image: "img_drink/PomoAgua.jpg",
    star: 4,
    price: 40,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 1,
    title: "Bebidas Energizantes",
    link: "html/Energizantes.html",
    image: "img_drink/Energizantes.jpg",
    star: 5,
    price: 200,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 2,
    title: "Latas de refresco",
    link: "html/TropiCola.html",
    image: "img_drink/TropiCola.jpg",
    star: 5,
    price: 150,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 3,
    title: "Refresco Gaseado de Cola",
    link: "html/RefrescoKola.html",
    image: "img_drink/RefrescoKola.jpg",
    star: 4,
    price: 120,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 4,
    title: "Refresco Limon",
    link: "html/RefrescoLimon.html",
    image: "img_drink/RefrescoLimon.jpg",
    star: 4,
    price: 50,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 5,
    title: "Refresco IronBeer",
    link: "html/PomoGrande.html",
    image: "img_drink/PomoGrande.jpg",
    star: 5,
    price: 400,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 6,
    title: "Chupa Chupa",
    link: "html/ChupaChupa.html",
    image: "img_drink/ChupaChupa.jpg",
    star: 5,
    price: 70,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 7,
    title: "Rothmans Verde",
    link: "html/RothmansVerde.html",
    image: "img_drink/RothmansVerde.jpg",
    star: 5,
    price: 500,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 8,
    title: "Rothmans Rojo",
    link: "html/Cigarros.html",
    image: "img_drink/RothmansRojo.jpg",
    star: 4,
    price: 200,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 9,
    title: "Rothmans Azul",
    link: "html/Cigarros.html",
    image: "img_drink/RothmansAzul.jpg",
    star: 4,
    price: 200,
    agotado: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 10,
    title: "H-Upman sin Filtro",
    link: "html/Cigarros.html",
    image: "img_drink/Hupmans SF.jpg",
    star: 3,
    price: 200,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 11,
    title: "Popular Rojo",
    link: "html/Cigarros.html",
    image: "img_drink/PopularRojo.jpg",
    star: 4,
    price: 200,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 12,
    title: "Dino Paletas",
    link: "html/dinopaletas.html",
    image: "img_drink/dinopaletas.jpg",
    star: 4,
    price: 70,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 13,
    title: "Bombones",
    link: "html/bombones.html",
    image: "img_drink/bombones.jpg",
    star: 5,
    price: 50,
    agotado: 0,
    disponible: 0,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 14,
    title: "Galletas",
    link: "html/galletas60.html",
    image: "img_drink/galletas60.jpg",
    star: 4,
    price: 60,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
  {
    id: 15,
    title: "Galletas",
    link: "html/galletas100.html",
    image: "img_drink/galletas100.jpg",
    star: 5,
    price: 100,
    agotado: 1,
    disponible: 1,
    text: `<i class="fa-solid fa-star"></i>`,
  },
];
const categories5 = [...new Set(product_pi.map((item5) => { return item5 }))]
let m = 0;
document.getElementById('nav5').innerHTML = categories5.map((item5) => {
    var { title, price, star, link, text, agotado, image, disponible } = item5;
    if (agotado == 1) {
      for (var a = 1; a < 5; a++) {
        if (a < star) {
          text = text + `<i class="fa-solid fa-star"></i>`;
        } else {
          text = text + `<i class="fa-regular fa-star"></i>`;
        }
      }
    }else if (agotado == 0) {
      text = "Agotado";
    }
    if(disponible==1){
    return `<div data-aos="flip-down" class="card-product">
            <div class="container-img">
                <img src="${image}"/>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${text}
                </div>
                <h3>${title}</h3>
                <span class="add-cart">
                    <a href="${link}"><b>Info</b></a>
                </span>
                <p class="price">$${price}.00</p>
            </div>
        </div>`;
    }
}).join('')
