
//let oracion = "Hola, esto es una oración";
//let arrayPalabras = oracion.split(/\s+/);

//console.log(arrayPalabras);


function Encriptar() {
    separarLetrasArray(separarPalabrasArray(valorTextArea()));

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

function separarLetrasArray(arr) {

    const arrayLetrasSeparadas = []
    for(let i = 0; i < arr.length; i++){
        arrayLetrasSeparadas.push(arr[i].split(''))
    }
    console.log(arrayLetrasSeparadas);
    return arrayLetrasSeparadas
}

//const helados = ["chocolate", "vainilla", "fresa", "menta"];
