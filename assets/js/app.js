const consonantes = ["n", "s", "r", "l", "d", "t", "c", "m", "p", "b"];
const vocales = ["a", "e", "i", "o", "u"];



// FUNCION PARA ENCRIPTAR
/*function Encriptar() {
    arrayATextoEncriptado(juntarLetrasPalabrasArray(adicionarLetrasArray(separarLetrasInvertidasArray(separarPalabrasArray(valorTextArea())))));

}*/
function encriptar() {

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
    mostrarTextoEncriptado(TextoEncriptadoListo);


    // Limpiar area de texto luego de encriptar
    limpiarTextArea();

    // Creación boton copiar texto encriptado
    botonCopiarTexto();

};


// FUNCIONES VALIDACION DE FORMULARIO ****************************************

function validacionTextArea() {
    const textArea = document.querySelector('#text-area');
    const contenido = textArea.value;
    const soloMinusculasSinTildes = /^(?:[a-z\s]*)?$/;
    const parrafo = document.querySelector('#parrafo-advertencia');
    const pokeball = document.querySelector('.pokeball');

    if (soloMinusculasSinTildes.test(contenido)) {
        // Si el contenido es válido, devolver el texto y restaurar el estilo del borde
        textArea.style.border = '2px solid black'; // Restaurar el estilo del borde
        parrafo.style.color = 'black';
        pokeball.classList.remove('parpadeando');

    } else {
        // Si el contenido no es válido, cambiar el estilo del borde
        textArea.style.border = '2px solid red';
        parrafo.style.color = 'red';
        parrafo.style.fontweight = 'bold';
        pokeball.classList.add('parpadeando');

    }
};

// FUNCIONES PARA ENCRIPTAR EL TEXTO ****************************************

function valorTextArea() {
    const contenido = document.querySelector('#text-area').value;
   // const contenido = textArea.value;
    const soloMinusculasSinTildes = /^(?=[\s\S]*[a-z])[\n\s]*[a-z\s]*$/;

    if (soloMinusculasSinTildes.test(contenido)) {
 
        return contenido;
    } else {
        // Si el contenido no es válido, cambiar el estilo del borde
        Swal.fire({
            title: "Error de capa 8",
            html: '<img src="../assets/img/pikachu-pokemon.gif" width="150px" style="margin: auto"><p style="font-size: 1.8rem">Escribe solo letras minúsculas sin tildes ni caracteres especiales</p>'
          });
        return null; // O puedes devolver un valor que indique que hay un error
    }
};


function separarPalabrasArray(texto) {
    const arrayPalabras = texto.split(/\s+/);
    return arrayPalabras;
};

function separarLetrasInvertidasArray(arr) {

    const arrayLetrasSeparadasInvertidas = [];
    for(let i = 0; i < arr.length; i++){
        arrayLetrasSeparadasInvertidas.push(arr[i].split('').reverse());
    }
    return arrayLetrasSeparadasInvertidas;
};

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
    };
    return arrayConLetrasAdicionadas;
};


function juntarLetrasPalabrasArray(arr) {

    const palabrasConLetrasJuntas = [];


    for (let i = 0; i < arr.length; i++) {
        const arrayLetrasJuntadas = [];

        for (let j = 0; j < arr[i].length; j++) {
            arrayLetrasJuntadas.push(arr[i][j]);
        }
        palabrasConLetrasJuntas.push("pika" + arrayLetrasJuntadas.join(''));
    };
    
    const arrayPalabrasConLetrasJuntas = palabrasConLetrasJuntas;

    return arrayPalabrasConLetrasJuntas;
};

function arrayATextoEncriptado(arr) {
    let textoEncriptado = "";

    for (let i = 0; i < arr.length; i++) {
        textoEncriptado += arr[i] + " ";
    };
        return textoEncriptado;
};

function limpiarLadoDerecho() {
    const ladoDerecho = document.querySelector('.right-area');

    ladoDerecho.innerHTML= "";
};

function mostrarTextoEncriptado(text) {
    const ventanaTexto = document.querySelector('.right-area');

    limpiarLadoDerecho();

    const divTop = document.createElement('div');
    ventanaTexto.appendChild(divTop);
    divTop.classList.add('div-top');
    
    const divBottom = document.createElement('div');
    ventanaTexto.appendChild(divBottom);
    divBottom.classList.add('div-bottom');

    const parrafo = document.createElement('p');
    divTop.appendChild(parrafo);
    parrafo.classList.add('parrafo-texto');


    const imgPika = document.createElement('img');
    imgPika.src="./assets/img/pika-saludo-cortado.png";
    imgPika.classList.add('pikachu-saludando');
    ventanaTexto.appendChild(imgPika);

    parrafo.textContent = text;
    parrafo.classList.add('mostrar-texto-encriptado');

    ventanaTexto.style.justifyContent = 'space-between';
    ventanaTexto.style.textAlign = 'left';
    ventanaTexto.style.paddingBottom = 0;
    ventanaTexto.style.paddingTop = "1rem";

};

function limpiarTextArea() {
    const textArea = document.querySelector('#text-area');
    textArea.value = '';
};

function botonCopiarTexto() {

    const parrafo = document.querySelector('.parrafo-texto');
    const divBottom = document.querySelector('.div-bottom');


    if (parrafo != '') {
        const botonCopiar = document.createElement('button');
        divBottom.appendChild(botonCopiar);
        botonCopiar.classList.add('boton-copiar');
        botonCopiar.innerHTML='Pika-Copiar';
        botonCopiar.onclick = copiarTexto;
    };
};



function copiarTexto() {
    const parrafo = document.querySelector('.parrafo-texto');
    navigator.clipboard.writeText(parrafo.innerText)
        .then(() => {
            Swal.fire({
                position: "bottom-end",
                title: "Listo!",
                html: '<img src="../assets/img/pikajockey.png" width="150px" style="margin: auto"><p style="font-size: 1.8rem">Texto copiado exitosamente</p>',
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err => {
            console.error('Falló al intentar copiar: ', err);
        });
};




function desencriptar() {

    const arrayDePalabras = pasarDePalabrasAArray();

    const arrayDeLetras = pasarArrayPalabrasALetras(arrayDePalabras);

    const pikasEliminados = eliminarPikaDePalabras(arrayDeLetras);

    const palabrasReversadas = invertirOrdenDePalabras(pikasEliminados);

    const sinLetrasAdicionales = removerCaracteresAdicionales(palabrasReversadas);

    const arrayDePalabrasListas = reunirLetras(sinLetrasAdicionales);

    const textoDesencriptado = convertirArrayAOracion(arrayDePalabrasListas);

    limpiarTextArea();

    mostrarTextoDesencriptado(textoDesencriptado);

    botonCopiarTexto();

}

// FUNCIONES PARA DESENCRIPTAR EL TEXTO ****************************************





// Seleccionar el codigo y convertirlo en array de palabras
function pasarDePalabrasAArray() {
    const textArea = document.querySelector('#text-area').value;

    const arrayPalabrasEncriptado = textArea.split(' ');

    return arrayPalabrasEncriptado;
}

// Convertimos el array de palabras,a array de letras con subindice
function pasarArrayPalabrasALetras(arr) {
    const arrayLetras = []
    
    for(let i = 0; i < arr.length; i++) {
        const letrasPorPalabra = arr[i].split('');
        arrayLetras.push(letrasPorPalabra);
    }
    return arrayLetras;
    
}

// Quitamos todos los "pika" de las palabras
function eliminarPikaDePalabras(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].splice(0, 4)
        }
        return arr;
}

// Invertimos el orden de los elementos del array
function invertirOrdenDePalabras(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].reverse()
    }
    return arr;
}

// eliminamos las letras agregadas a cada palabra
function removerCaracteresAdicionales(arr){
    const arrayReunido = []

    for(let i = 0; i < arr.length; i++) {
        const newArr = []

        for (let j = 0; j < arr[i].length; j+=3) {
            newArr.push(arr[i][j]);
        };
        arrayReunido.push(newArr);
    };
    return arrayReunido;
};

// reunimos las letras del array para formar las palabras
function reunirLetras(arr){
    const newArray = []
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i].join(''))
    }
    return newArray;
}
// Unimos las palabras en una sola oración de tipo String
function convertirArrayAOracion(arr) {
    oracion = arr.join(' ');
    
    return oracion;
}


function mostrarTextoDesencriptado(text) {
    const ventanaTexto = document.querySelector('.right-area');

    limpiarLadoDerecho();
    
    const divTop = document.createElement('div');
    ventanaTexto.appendChild(divTop);
    divTop.classList.add('div-top');
    
    const divBottom = document.createElement('div');
    ventanaTexto.appendChild(divBottom);
    divBottom.classList.add('div-bottom');

    const parrafo = document.createElement('p');
    divTop.appendChild(parrafo);
    parrafo.classList.add('parrafo-texto');


    const imgPika = document.createElement('img');
    imgPika.src="./assets/img/pika-saludo-cortado.png";
    imgPika.classList.add('pikachu-saludando');
    ventanaTexto.appendChild(imgPika);

    parrafo.textContent = text;
    parrafo.classList.add('mostrar-texto-encriptado');

    ventanaTexto.style.justifyContent = 'space-between';
    ventanaTexto.style.textAlign = 'left';
    ventanaTexto.style.paddingBottom = 0;
    ventanaTexto.style.paddingTop = "1rem";

};