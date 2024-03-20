let parrafoAside = document.getElementById('parrafoAside');
let divMensajes = document.getElementById('mensajes');
let copiarBtn = document.getElementById('copiarBtn');

function validarTexto(texto) {
    const expresion = /[A-ZÁÉÍÓÚÜáéíóúü]/;
    return expresion.test(texto);
}

function mostrarAlerta() {
    Toastify({
        text: "El texto no puede contener mayúsculas o acentos.",
        duration: 3500,
        style: {
            background: "linear-gradient(to right, #d01206, #f8f4f7)",
            borderRadius: "1vw"
        },
        gravity: "top", 
        position: "center"
    }).showToast();

    setTimeout(() => {
        location.reload();
    }, 4000);
}

function encriptarTexto() {
    let textoOriginal = document.getElementById('inputTexto').value;
    if (validarTexto(textoOriginal)) {
        mostrarAlerta();
        return;
    }
    let textoEncriptado = encriptar(textoOriginal);
    ocultarMostrarElementos();
    agregarEstilos();
    parrafoAside.innerHTML = textoEncriptado;
}

function desencriptarTexto() {
    let textoOriginal = document.getElementById('inputTexto').value;
    let textoDesencriptado = desencriptar(textoOriginal);
    ocultarMostrarElementos();
    agregarEstilos();
    parrafoAside.innerHTML = textoDesencriptado;
}

function agregarEstilos(){
    divMensajes.style.textAlign = 'left';
    divMensajes.style.padding = '0 2vw';
    divMensajes.style.top = '3vh';
    parrafoAside.style.color = '#495057';
}

function ocultarMostrarElementos() {
    let muñeco = document.getElementById('muñeco');
    muñeco.style.display = 'none';

    let mensajeAside = document.getElementById('mensajeAside');
    mensajeAside.style.display = 'none';

    copiarBtn.style.display = 'block';
}

function copiar() {
    // selecciono el texto con innerText
    let textoParaCopiar = document.getElementById("parrafoAside").innerText;

    // utilizo la API de clipboard
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            Toastify({
                text: "Texto copiado 😀",
                duration: 3000,
                style: {
                    padding: "1.2vh 1.5vw",
                    background: "linear-gradient(to right, rgb(104, 48, 130), #f0e9f0)",
                    borderRadius: "1vw"
                },
                gravity: "top",
                position: "center"
            }).showToast();
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
}

function encriptar(texto) {
    let letras = texto.split("");
    const letrasEncriptadas = letras.map(letra => {
        switch (letra) {
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "a":
                return "ai";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                return letra;
        }
    });
    return letrasEncriptadas.join("");
}

function desencriptar(texto) {
    const expresionesEncriptadas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    // creo una expresión regular que coincida con todas las expresiones encriptadas
    const regex = new RegExp(Object.keys(expresionesEncriptadas).join('|'), 'g');
    // reemplazo todas las expresiones encriptadas en el texto
    texto = texto.replace(regex, match => expresionesEncriptadas[match]);
    return texto;
}