var map = L.map('mapa').setView([22.43821, -79.89615], 30);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([22.43821, -79.89615]).addTo(map)
    .bindPopup('<h1>Cafeteria <b>Kataleya</b></h1>')
    .openPopup();