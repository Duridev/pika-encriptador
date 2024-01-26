

const helados = ["chocolate", "vainilla", "fresa", "menta"];

const consonantes = ["n", "s", "r", "l", "d", "t", "c", "m", "p", "b"];
const vocales = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];




function Encriptar() {
    adicionarLetrasArray(separarLetrasInvertidasArray(separarPalabrasArray(valorTextArea())));

}

function valorTextArea() {
    const textArea = document.querySelector('#text-area').value;
    console.log(textArea);
    return textArea;
}

function separarPalabrasArray(texto) {
    const arrayPalabras = texto.split(/\s+/);
    console.log(arrayPalabras);
    return arrayPalabras;
}

function separarLetrasInvertidasArray(arr) {

    const arrayLetrasSeparadasInvertidas = []
    for(let i = 0; i < arr.length; i++){
        arrayLetrasSeparadasInvertidas.push(arr[i].split('').reverse())
    }
    console.log(arrayLetrasSeparadasInvertidas);
    return arrayLetrasSeparadasInvertidas
}

function adicionarLetrasArray(arr) {             
    const arrayConLetrasAdicionadas = []

    for(let i = 0; i < arr.length; i++){
        const palabrasConLetrasAdicionadas = []

        for(let j = 0; j < arr[i].length; j++) {
            consRamdom = consonantes[Math.floor(Math.random() * consonantes.length)]
            vocRamdom = vocales[Math.floor(Math.random() * vocales.length)]
            palabrasConLetrasAdicionadas.push(consRamdom + vocRamdom + arr[i][j])
        }
        arrayConLetrasAdicionadas.push(palabrasConLetrasAdicionadas)
    }
    console.log(arrayConLetrasAdicionadas);
    return arrayConLetrasAdicionadas;
}

