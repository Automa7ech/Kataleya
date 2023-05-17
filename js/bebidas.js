const product_esp = [
    {
        id: 0,
        image: "img_drink/Pitufo.jpg",
        title: 'Limonada Pitufo',
        link: 'html/Pitufo.html?nombre=17',
        star: 5,
        price: 80,
        text: `<i class="fa-solid fa-star"></i>`,

    },
    {
        id: 1,
        image: "img_drink/mousse.jpg",
        title: 'Muss de Café',
        link: 'html/mousse.html?nombre=5',
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
        `<div class="card-product">
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
        title: 'Cafe Expresso',
        link: 'html/expresso.html?nombre=1',
        star: 4,
        price: 35,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 1,
        title: 'Cafe Cortadito',
        link: 'html/Cortado.html?nombre=12',
        star: 5,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 2,
        title: 'Cafe Bombom',
        link: 'html/Bombom.html?nombre=15',
        star: 4,
        price: 60,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 3,
        title: 'Cafe Ruso',
        link: 'html/Ruso.html?nombre=4',
        star: 5,
        price: 70,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 4,
        title: 'Cafe Cappuccino',
        link: 'html/Capuccino.html?nombre=16',
        star: 4,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 5,
        title: 'Cafe Moca',
        link: 'html/Moka.html?nombre=9',
        star: 3,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 6,
        title: 'Cafe Moniek',
        link: 'html/Monike.html?nombre=8',
        star: 3,
        price: 40,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 7,
        title: 'Cafe Frapuchino',
        link: 'html/PinaBlue.html?nombre=5',
        star: 4,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 8,
        title: 'Cubache',
        link: 'html/Cubache.html?nombre=11',
        star: 4,
        price: 100,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
];
const categories2 = [...new Set(product_cafe.map((item2) => { return item2 }))]
let j = 0;
document.getElementById('nav2').innerHTML = categories2.map((item2) => {
    var { title, price, star, link, text, agotado, especial } = item2;
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
    if (agotado == 1) {
        return (
            `<div class="card-product">
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
    }
}).join('')

/**********************************************Frias*********************************************/
const product_fria = [
    {
        id: 0,
        title: 'Suero',
        link: 'html/Suero.html?nombre=3',
        star: 5,
        price: 150,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 1,
        title: 'Frappe',
        link: 'html/Frappe.html?nombre=10',
        star: 5,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 2,
        title: 'ChocoMani',
        link: 'html/Chocomani.html?nombre=13',
        star: 4,
        price: 120,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 3,
        title: 'Naranjada',
        link: 'html/Naranjada.html?nombre=7',
        star: 4,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 4,
        title: 'Piña Colada',
        link: 'html/PinaColada.html?nombre=6',
        star: 4,
        price: 100,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 5,
        title: 'Piña Blue',
        link: 'html/PinaBlue.html?nombre=5',
        star: 4,
        price: 150,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 6,
        title: 'Vaca Negra',
        link: 'html/Vaca Negra.html?nombre=2',
        star: 3,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 7,
        title: 'Batidos',
        link: 'html/Batido.html?nombre=14',
        star: 5,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 8,
        title: 'Batido Natural',
        link: 'html/Mamey.html?nombre=18',
        star: 5,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 9,
        title: 'Pitufo',
        link: 'html/Pitufo.html?nombre=17',
        star: 5,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
];
const categories3 = [...new Set(product_fria.map((item3) => { return item3 }))]
let k = 0;
document.getElementById('nav3').innerHTML = categories3.map((item3) => {
    var { image, title, price, star, link, text, agotado } = item3;
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
    if (agotado == 1) {
        return (
            `<div class="card-product">
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
    }
}).join('')

/**********************************************SS*********************************************/
const product_ss = [
    {
        id: 0,
        title: 'Gelatina',
        link: 'html/Gelatina.html',
        star: 4,
        price: 40,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 1,
        title: 'Donas',
        link: 'html/Donas.html',
        star: 5,
        price: 80,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 2,
        title: 'Croquetas al plato',
        link: 'html/croqueta.html',
        star: 4,
        price: 60,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 3,
        title: 'Turquino',
        link: 'html/Turkino.html',
        star: 5,
        price: 80,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 4,
        title: 'Dulce de Coco',
        link: 'html/DulceCoco.html',
        star: 3,
        price: 60,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 5,
        title: 'Doble Tentacion',
        link: 'html/PinaBlue.html?nombre=5',
        star: 4,
        price: 70,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 6,
        title: 'Tres Gracias',
        link: 'html/TresGracias.html',
        star: 4,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 7,
        title: 'Panquecito',
        link: 'html/Panquesito.html',
        star: 4,
        price: 40,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 8,
        title: 'Ensalada',
        link: 'html/Ensalada.html',
        star: 5,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 9,
        title: 'Pan c/ Hamburguesa',
        link: 'html/Hamburguesa.html',
        star: 5,
        price: 100,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 10,
        title: 'Pan c/ Tortilla',
        link: 'html/Tortilla.html',
        star: 3,
        price: 90,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 11,
        title: 'Panes',
        link: 'html/CremayMayonesa.html',
        star: 3,
        price: 40,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 12,
        title: 'Borrachita',
        link: 'html/Borrachita.html',
        star: 5,
        price: 40,
        agotado: 0,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 13,
        image: "img_drink/mousse.jpg",
        title: 'Muss de Café',
        link: 'html/mousse.html?nombre=5',
        star: 5,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 14,
        image: "img_drink/panes2.jpg",
        title: 'Sandwich de queso',
        link: 'html/panes2.html?nombre=5',
        star: 4,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
];
const categories4 = [...new Set(product_ss.map((item4) => { return item4 }))]
let l = 0;
document.getElementById('nav4').innerHTML = categories4.map((item4) => {
    var { image, title, price, star, link, text, agotado } = item4;
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
    if (agotado == 1) {

        return (
            `<div class="card-product">
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
    }
}).join('')

/**********************************************pi*********************************************/
const product_pi = [
    {
        id: 0,
        title: 'Pomo de agua',
        link: 'html/PomoAgua.html',
        star: 4,
        price: 40,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 1,
        title: 'Bebidas Energizantes',
        link: 'html/Energizantes.html',
        star: 5,
        price: 200,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 2,
        title: 'Latas de refresco',
        link: 'html/TropiCola.html',
        star: 5,
        price: 150,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 3,
        title: 'Refresco Gaseado de Cola',
        link: 'html/RefrescoKola.html',
        star: 4,
        price: 120,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 4,
        title: 'Refresco Limon',
        link: 'html/RefrescoLimon.html',
        star: 4,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 5,
        title: 'Refresco IronBeer',
        link: 'html/PomoGrande.html',
        star: 5,
        price: 400,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 6,
        title: 'Chupa Chupa',
        link: 'html/ChupaChupa.html',
        star: 5,
        price: 70,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 7,
        title: 'Rothmans Verde',
        link: 'html/RothmansVerde.html',
        star: 5,
        price: 500,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 8,
        title: 'Rothmans Rojo',
        link: 'html/Cigarros.html',
        star: 4,
        price: 200,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 9,
        title: 'Rothmans Azul',
        link: 'html/Cigarros.html',
        star: 4,
        price: 200,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 10,
        title: 'H-Upman sin Filtro',
        link: 'html/Cigarros.html',
        star: 3,
        price: 200,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 11,
        title: 'Popular Rojo',
        link: 'html/Cigarros.html',
        star: 4,
        price: 200,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 12,
        title: 'Dino Paletas',
        link: 'html/dinopaletas.html',
        star: 4,
        price: 70,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 13,
        title: 'Bombones',
        link: 'html/bombones.html',
        star: 5,
        price: 50,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 14,
        title: 'Galletas',
        link: 'html/galletas60.html',
        star: 4,
        price: 60,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
    {
        id: 15,
        title: 'Galletas',
        link: 'html/galletas100.html',
        star: 5,
        price: 100,
        agotado: 1,
        text: `<i class="fa-solid fa-star"></i>`,
    },
];
const categories5 = [...new Set(product_pi.map((item5) => { return item5 }))]
let m = 0;
document.getElementById('nav5').innerHTML = categories5.map((item5) => {
    var { title, price, star, link, text, agotado } = item5;
    for (var a = 1; a < 5; a++) {
        if (a < star) {
            text = text + `<i class="fa-solid fa-star"></i>`;
        }
        else {
            text = text + `<i class="fa-regular fa-star"></i>`;
        }
    }
    if (agotado == 1) {

        return (
            `<div class="card-product">
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
    }
}).join('')