const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const imagemFundo = document.getElementById("displayNone");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    imagemFundo.style.backgroundImage = "none"
    mensagem.value = textoEncriptado;
    textArea.value =  "";
  
}

function encriptar (textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();

    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    imagemFundo.style.backgroundImage = "none"
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar (textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();
    
    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptado.includes(matrizCodigo[i][1])) {
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return textoDesencriptado;
}

function copiarTexto() {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mensagem.value =  "";
    alert("Texto copiado!")
}