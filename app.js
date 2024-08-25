const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje_encriptado");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase() 

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase() 

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado
}

function botonCopiar() {
    var texto = document.getElementById("textoACopiar").value;
    navigator.clipboard.writeText(texto).then(function () {
        let feedbackElement = document.getElementById("feedbackElement");
        feedbackElement.textContent = 'Texto copiado al portapapeles';
    }).catch(function(err) {
        feedbackElement.textContent = 'Error al copiar texto:' + err;
        
    });

}
    var mensaje_encriptado = document.getElementById("textoACopiar");
    mensaje_encriptado.addEventListener('focus', function() {
        mensaje_encriptado.value = "";
    })

    

    