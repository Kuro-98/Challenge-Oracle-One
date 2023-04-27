function encriptarTexto() {
    const input = document.getElementById('input-area').value;

    if (!input) {
        resetOutputContainer();
        return;
    }

    if (!/^[a-z ,.!?]+$/.test(input)) {
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales');
        return;
    }

    const encrypted = input
        .split('')
        .map(function (char) {
            switch (char) {
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'a':
                    return 'ai';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
                default:
                    return char;
            }
        })
        .join('');

    const outputContainer = document.getElementById('output-container');
    outputContainer.querySelector('h1').textContent = 'Texto encriptado';
    outputContainer.querySelector('p').textContent = encrypted;
    outputContainer.querySelector('#image-container').style.display = 'none';
    outputContainer.querySelector('#copy-button').style.display = 'block';
}

function desencriptarTexto() {
    const input = document.getElementById('input-area').value;

    if (!input) {
        resetOutputContainer();
        return;
    }

    if (!/^[a-z ,.!?]+$/.test(input)) {
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales');
        return;
    }

    const decrypted = input
        .split(/(enter|imes|ai|ober|ufat)/)
        .map(function (word) {
            switch (word) {
                case 'enter':
                    return 'e';
                case 'imes':
                    return 'i';
                case 'ai':
                    return 'a';
                case 'ober':
                    return 'o';
                case 'ufat':
                    return 'u';
                default:
                    return word;
            }
        })
        .join('');

    const outputContainer = document.getElementById('output-container');
    outputContainer.querySelector('h1').textContent = 'Texto desencriptado';
    outputContainer.querySelector('p').textContent = decrypted;
    outputContainer.querySelector('#image-container').style.display = 'none';
    outputContainer.querySelector('#copy-button').style.display = 'block';
}

function resetOutputContainer() {
    const outputContainer = document.getElementById('output-container');

    if (document.getElementById('input-area').value.trim() === '') {
        outputContainer.querySelector('h1').textContent = 'Ningún mensaje fue encontrado';
        outputContainer.querySelector('p').textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
        outputContainer.querySelector('#copy-button').style.display = 'none';
        outputContainer.querySelector('#image-container').style.display = 'block';
        return;
    }
    // Si el área de entrada no está vacía, no hacemos nada
}
function copiarTexto() {
    const outputContainer = document.getElementById('output-container');
    const texto = outputContainer.querySelector('p').textContent;

    if (texto == 'Ingresa el texto que desees encriptar o desencriptar.') {
        alert('No hay texto encriptado para copiar');
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('El texto se ha copiado al portapapeles');
}
