const consonantes = ["n", "s", "r", "l", "d", "t", "c", "m", "p", "b"];
const vocales = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];


// FUNCION PARA ENCRIPTAR
/*function Encriptar() {
    arrayATextoEncriptado(juntarLetrasPalabrasArray(adicionarLetrasArray(separarLetrasInvertidasArray(separarPalabrasArray(valorTextArea())))));

}*/
function Encriptar() {
    // Paso 1: Obtener el texto del área de texto
    const texto = valorTextArea();

    // Paso 2: Separar las palabras del texto en un array
    const palabrasSeparadas = separarPalabrasArray(texto);

    // Paso 3: Invertir las letras de cada palabra
    const palabrasInvertidas = separarLetrasInvertidasArray(palabrasSeparadas);

    // Paso 4: Añadir letras aleatorias a cada palabra
    const palabrasConLetrasAdicionadas = adicionarLetrasArray(palabrasInvertidas);

    // Paso 5: Juntar las letras de cada palabra y añadir prefijo "pika"
    const palabrasEncriptadas = juntarLetrasPalabrasArray(palabrasConLetrasAdicionadas);


    // Paso 6: Convertir el array de palabras encriptadas a texto encriptado
    const TextoEncriptadoListo = arrayATextoEncriptado(palabrasEncriptadas);

    // Paso 7: limpar el HTML y mostrar texto encriptado
    mostrarTextEncriptado(TextoEncriptadoListo);

}


// FUNCIONES PARA ENCRIPTAR EL TEXTO ****************************************

function valorTextArea() {
    const textArea = document.querySelector('#text-area').value;
    //console.log(textArea);
    return textArea;
}

function separarPalabrasArray(texto) {
    const arrayPalabras = texto.split(/\s+/);
    //console.log(arrayPalabras);
    return arrayPalabras;
}

function separarLetrasInvertidasArray(arr) {

    const arrayLetrasSeparadasInvertidas = [];
    for(let i = 0; i < arr.length; i++){
        arrayLetrasSeparadasInvertidas.push(arr[i].split('').reverse());
    }
    //console.log(arrayLetrasSeparadasInvertidas);
    return arrayLetrasSeparadasInvertidas;
}

function adicionarLetrasArray(arr) {             
    const arrayConLetrasAdicionadas = [];

    for(let i = 0; i < arr.length; i++){
        const palabrasConLetrasAdicionadas = [];

        for(let j = 0; j < arr[i].length; j++) {
            consRamdom = consonantes[Math.floor(Math.random() * consonantes.length)];
            vocRamdom = vocales[Math.floor(Math.random() * vocales.length)];
            palabrasConLetrasAdicionadas.push(consRamdom + vocRamdom + arr[i][j]);
        }
        arrayConLetrasAdicionadas.push(palabrasConLetrasAdicionadas);
    }
    //console.log(arrayConLetrasAdicionadas);
    return arrayConLetrasAdicionadas;
}


function juntarLetrasPalabrasArray(arr) {

    const palabrasConLetrasJuntas = [];


    for (let i = 0; i < arr.length; i++) {
        const arrayLetrasJuntadas = [];

        for (let j = 0; j < arr[i].length; j++) {
            arrayLetrasJuntadas.push(arr[i][j]);
        }
        //console.log(arrayLetrasJuntadas.join(''));
        palabrasConLetrasJuntas.push("pika" + arrayLetrasJuntadas.join(''));
    }
    
    const arrayPalabrasConLetrasJuntas = palabrasConLetrasJuntas;

    console.log(arrayPalabrasConLetrasJuntas);
    return arrayPalabrasConLetrasJuntas;
}

function arrayATextoEncriptado(arr) {
    let textoEncriptado = "";

    for (let i = 0; i < arr.length; i++) {
        textoEncriptado += arr[i] + " ";
    }
        console.log(textoEncriptado);
        return textoEncriptado;
}

function limpiarLadoDerecho() {
    const ladoDerecho = document.querySelector('.right-area');

    ladoDerecho.innerHTML= "";
}

function mostrarTextEncriptado(text) {
    const ventanaTexto = document.querySelector('.right-area');
    limpiarLadoDerecho();
    const parrafo = document.createElement('P');
    parrafo.textContent = text;
    parrafo.classList.add('.mostrar-texto-encriptado')


}