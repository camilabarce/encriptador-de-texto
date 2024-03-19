let parrafoAside = document.getElementById('parrafoAside');
let divMensajes = document.getElementById('mensajes');
let copiarBtn = document.getElementById('copiarBtn');

function encriptarTexto() {
    let textoOriginal = document.getElementById('inputTexto').value.toLowerCase();
    console.log(textoOriginal);
    let textoEncriptado = encriptar(textoOriginal);
    console.log(textoEncriptado);
    ocultarMostrarElementos();
    agregarEstilos();
    parrafoAside.innerHTML = textoEncriptado;
}

function desencriptarTexto() {
    let textoOriginal = document.getElementById('inputTexto').value.toLowerCase();
    console.log(textoOriginal);
    let textoDesencriptado = desencriptar(textoOriginal);
    console.log(textoDesencriptado)
    ocultarMostrarElementos();
    agregarEstilos();
    parrafoAside.innerHTML = textoDesencriptado;
}

function agregarEstilos(){
    divMensajes.style.textAlign = 'left';
    divMensajes.style.left = '1.25rem';
    divMensajes.style.top = '1.25rem';
    divMensajes.style.overflow = 'auto';
    parrafoAside.style.color = '#495057';
    parrafoAside.style.fontSize = '1.5rem';
    parrafoAside.style.lineHeight = '2.25rem';
    copiarBtn.style.background = '#D8DFE8';
    copiarBtn.style.color = '#0A3871';
    copiarBtn.style.border = '.05rem solid #0A3871';
    copiarBtn.style.top = '33rem';
}

function ocultarMostrarElementos() {
    let muñeco = document.getElementById('muñeco');
    muñeco.style.display = 'none';

    let mensajeAside = document.getElementById('mensajeAside');
    mensajeAside.style.display = 'none';

    copiarBtn.style.display = 'block';
}

function copiar() {
    // Selecciona el texto dentro del elemento #parrafoAside
    let textoParaCopiar = document.getElementById("parrafoAside").innerText;

    // Copia el texto al portapapeles utilizando el API de Clipboard
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            // Muestra un mensaje de "Copiado exitosamente" usando Toastify
            Toastify({
                text: "¡Texto copiado exitosamente!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #0A3871, #D8DFE8)",
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

    Object.keys(expresionesEncriptadas).forEach(expresion => {
        const regex = new RegExp(expresion, 'g');
        texto = texto.replace(regex, expresionesEncriptadas[expresion]);
    });

    return texto;
}
