/* Definición de variables para el tipo de dato pila */

function pushStack() {
    var datoIngresado = document.getElementById("entrada").value;
    if (datoIngresado != "") {
        if (fullStack()) {
            alert("Sin espacio");
        } else {
            indice++;
            pila[indice] = datoIngresado;
        }
    } else {
        alert("Ingrese un valor");
    }
    mostrarPila();
    limpiarEntrada();
}

function limpiarEntrada() {
    document.getElementById("entrada").value = "";
    document.getElementById("entrada").focus();
}

function popStack() {
    var extraido = -99999;
    if (emptyStack()) {
        alert("Pila vacía");
    } else {
        extraido = pila[indice];
        alert("Valor extraido: " + extraido);
        document.getElementById('arreglo[' + indice + ']').innerHTML = "";
        document.getElementById('arreglo[' + indice + ']').style.background = 'red';
        indice--;
    }
    mostrarPila();
}

function topStack() {
    if (emptyStack()) {
        alert("Pila vacía");
    } else {
        alert("Cima: " + document.getElementById('arreglo[' + indice + ']').innerHTML);
    }
}

function fullStack() {
    return indice == MAX - 1;
}

function emptyStack() {
    return indice == -1;
}

function mostrarPila() {
    for (var i = 0; i <= indice; i++) {
        document.getElementById('arreglo[' + i + ']').innerHTML = pila[i];
        document.getElementById('arreglo[' + i + ']').style.background = '#ffffff';
    }
}

const MAX = 10;
let pila = new Array(MAX);
let indice = -1;


var button = document.querySelector(".btn-ingresar");
button.onclick = pushStack;

var button = document.querySelector(".btn-desapilar");
button.onclick = popStack;

var button = document.querySelector(".btn-consultar-cima");
button.onclick = topStack;