let urlIpify = 'https://api.ipify.org?format=json';
let urlIpApi = 'http://ip-api.com/json/';

async function obtenerIp() {
    let response = await fetch(urlIpify);
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
}

function mostrar(ip) {
    ip.then(value => {
        console.log(value);
        document.getElementById('la__ip').innerHTML = "Su dirección de IP es: " + value.ip;
    }).catch(err => {
        console.log(err); // 👉️ Algún error
    });
}

async function obtenerUbicacion() {
    let response = await fetch(urlIpify);
    let ip = await response.json();
    let res = await fetch(urlIpApi + ip.ip);
    let ubicacion = await res.json();
    ubicacion = JSON.stringify(ubicacion);
    ubicacion = JSON.parse(ubicacion);
    console.log(ubicacion);
    return ubicacion;
}

function mostrarUbicacion(ubicacion) {
    ubicacion.then(value => {
        document.getElementById('country').innerHTML = "Pais: " + value.country;
        document.getElementById('regionName').innerHTML = "Provincia: " + value.regionName;
        document.getElementById('city').innerHTML = "Ciudad: " + value.city;
        document.getElementById('latitud').innerHTML = "Latitud: " + value.lat;
        document.getElementById('longitud').innerHTML = "Longitud: " + value.lon;
        var latLon = value.lat + ',' + value.lon;
        document.getElementById('iframe').src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBxDzRLdexOkL8SeKWNUasi6spn-xmqKhk&q=' + latLon + '';
    }).catch(err => {
        console.log(err); // 👉️ Algún error
    });
}

const ip = obtenerIp();
mostrar(ip);

const ubicacion = obtenerUbicacion();
mostrarUbicacion(ubicacion);