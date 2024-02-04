//***************************************************************************
//**************** FUNCION PRINCIPAL - ENCRIPTACION ***********************
//***************************************************************************


function encriptar() {

    // Paso 1: Obtener el texto del área de texto
    const texto = valorTextArea();

    // Paso 2: Separar las palabras del texto en un array
    const palabrasSeparadas = separarPalabrasArray(texto);

    // Paso 3: Añadir letras aleatorias a cada palabra
    const palabrasConLetrasAdicionadas = adicionarLetrasArray(palabrasSeparadas);

    // Paso 4: Invertir las letras de cada palabra
    const palabrasInvertidas = invertirArray(palabrasConLetrasAdicionadas);

    // Paso 5: Juntar las letras de cada palabra
    const palabrasEncriptadas = juntarLetrasPalabrasArray(palabrasInvertidas);

    // Paso 6: Cambiar las vocales por lo solicitado en el challenge
    const textoSegunChallenge = encriptacionChallenge(palabrasEncriptadas)

    // Paso 7: Añadir el prefijo "pika" a cada palabra
    const palabrasConPika = incluirPika(textoSegunChallenge)

    // Paso 8: Convertir el array de palabras encriptadas a string encriptado
    const TextoEncriptadoListo = arrayATexto(palabrasConPika);

    // Paso 9: limpar el HTML y mostrar texto encriptado
    mostrarTextoEncriptado(TextoEncriptadoListo);

    // Limpiar area de texto luego de encriptar
    limpiarTextArea();

    // Creación boton copiar texto encriptado
    botonCopiarTexto();
};



//********************** FUNCIONES GLOBALES ****************************************
//                      *******************

// Arrays para agregar letras aleatorias
const consonantes = ["n", "s", "r", "l", "d", "t", "c", "m", "p", "b"];
const vocales = ["a", "e", "i", "o", "u"];

// Funcion Validación de Text-Area (solo letras minusculas)
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

// Limpiar area de texto luego de encriptar
function limpiarTextArea() {
    const textArea = document.querySelector('#text-area');
    textArea.value = '';
};

// Función para crear el botón que permite copiar el texto
function botonCopiarTexto() {

    const parrafo = document.querySelector('.parrafo-texto');
    const divBottom = document.querySelector('.div-bottom');


    if (parrafo != '') {
        const botonCopiar = document.createElement('button');
        divBottom.appendChild(botonCopiar);
        botonCopiar.classList.add('boton-copiar');
        botonCopiar.innerHTML = 'Pika-Copiar';
        botonCopiar.onclick = copiarTexto;
    };
};

// Limpia el HTML del right-area
function limpiarLadoDerecho() {
    const ladoDerecho = document.querySelector('.right-area');

    ladoDerecho.innerHTML = "";
};

// Función para copiar el texto al portapapeles
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



//******** FUNCIONES PARA ENCRIPTAR EL TEXTO ****************************************
//        ***********************************


//Paso 1:  Obtener el texto del área de texto
function valorTextArea() {
    const contenido = document.querySelector('#text-area').value;
    const soloMinusculasSinTildes = /^(?=[\s\S]*[a-z])[\n\s]*[a-z\s]*$/;

    if (soloMinusculasSinTildes.test(contenido)) {

        return contenido;
    } else {
        Swal.fire({
            title: "Error de capa 8",
            html: '<img src="../assets/img/pikachu-pokemon.gif" width="150px" style="margin: auto"><p style="font-size: 1.8rem">Escribe solo letras minúsculas sin tildes ni caracteres especiales</p>'
        });
        return null;
    }
};

// Paso 2: Separar las palabras del texto en un array
function separarPalabrasArray(texto) {
    const arrayPalabras = texto.split(/\s+/);
    return arrayPalabras;
};

// Paso 3: Añadir letras aleatorias a cada palabra
function adicionarLetrasArray(arr) {
    const arrayConLetrasAdicionadas = [];

    for (let i = 0; i < arr.length; i++) {
        const palabrasConLetrasAdicionadas = [];

        for (let j = 0; j < arr[i].length; j++) {
            consRandom = consonantes[Math.floor(Math.random() * consonantes.length)];
            vocRandom = vocales[Math.floor(Math.random() * vocales.length)];
            palabrasConLetrasAdicionadas.push(consRandom + vocRandom + arr[i][j]);
        }
        arrayConLetrasAdicionadas.push(palabrasConLetrasAdicionadas);
    };
    return arrayConLetrasAdicionadas;
};

// Paso 4: Invertir las letras de cada palabra
function invertirArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].slice().reverse())
    }
    return newArr
}

// Paso 5: Juntar las letras de cada palabra
function juntarLetrasPalabrasArray(arr) {
    const arrayPalabrasConLetrasJuntas = [];

    for (let i = 0; i < arr.length; i++) {
        arrayPalabrasConLetrasJuntas.push(arr[i].join(''));
    }
    const palabrasConLetrasJuntas = arrayPalabrasConLetrasJuntas.join(' ');
    return palabrasConLetrasJuntas;
}

// Paso 6: Cambiar las vocales por lo solicitado en el challenge
function encriptacionChallenge(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

// Paso 7: Añadir el prefijo "pika" a cada palabra
function incluirPika(text) {
    const arr = text.split(' ')
    const arrConPika = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            arrConPika.push("pika" + arr[i]);
        }
    }
    return arrConPika;
}

// Paso 8: Convertir el array de palabras encriptadas a string encriptado
function arrayATexto(arr) {
    let texto = arr.join(' ');

    return texto;
};

// Paso 9: limpar el HTML y mostrar texto encriptado
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
    imgPika.src = "./assets/img/pika-saludo-cortado.png";
    imgPika.classList.add('pikachu-saludando');
    ventanaTexto.appendChild(imgPika);

    parrafo.textContent = text;
    parrafo.classList.add('mostrar-texto-encriptado');

    ventanaTexto.style.justifyContent = 'space-between';
    ventanaTexto.style.textAlign = 'left';
    ventanaTexto.style.paddingBottom = 0;
    ventanaTexto.style.paddingTop = "1rem";

};



//***************************************************************************
//**************** FUNCION PRINCIPAL - DESENCRIPTACION ***********************
//***************************************************************************


function desencriptar() {
    // Paso 1 (global): Obtener el texto del área de texto
    const texto = valorTextArea();

    // Paso 2: Convertir el texto encriptado en un array de palabras
    const arrayDePalabras = pasarDePalabrasAArray(texto);

    // Paso 3: Eliminar el prefijo "pika" de cada palabra
    const pikasEliminados = eliminarPika(arrayDePalabras);

    // Paso 4 (global): Convierte el array en una cadena de texto
    const arrATexto = arrayATexto(pikasEliminados);

    // Paso 5: Desencriptar las letras según las reglas establecidas en el challenge
    const descriptadosDelChallenge = desenciptarChallenge(arrATexto);

    // Paso 6: Remover los caracteres adicionales de las palabras desencriptadas
    const sinLetrasAdicionales = removerCaracteresAdicionales(descriptadosDelChallenge);

    // Paso 7: Convertir el array de palabras desencriptadas en un array de letras
    const arrayDeLetras = pasarArrayPalabrasALetras(sinLetrasAdicionales);

    // Paso 8: Invertir el orden de las letras en cada palabra
    const palabrasReversadas = invertirOrdenDePalabras(arrayDeLetras);

    // Paso 9: Convertir el array de letras de nuevo en texto desencriptado
    const textoDesencriptado = arrayATextoDesencriptando(palabrasReversadas);

    // Limpiar area de texto luego de encriptar
    limpiarTextArea();

    // Paso 10: limpar el HTML y mostrar texto encriptado
    mostrarTextoDesencriptado(textoDesencriptado);

    // Creación boton copiar texto encriptado
    botonCopiarTexto();

}


//******** FUNCIONES PARA DESENCRIPTAR EL TEXTO ****************************************
//        **************************************

// Paso 2: Convertir el texto encriptado en un array de palabras
function pasarDePalabrasAArray(texto) {

    const arrayPalabrasEncriptado = texto.split(' ');
    return arrayPalabrasEncriptado;
};

// Paso 3: Eliminar el prefijo "pika" de cada palabra
function eliminarPika(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substring(4)
    }
    return arr;
};

// Paso 5: Desencriptar las letras según las reglas establecidas en el challenge
function desenciptarChallenge(text) {
    text = text.replace(/ufat/g, 'u');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/enter/g, 'e');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/imes/g, 'i');
    return text;
};

// Paso 6: Remover los caracteres adicionales de las palabras desencriptadas
function removerCaracteresAdicionales(text) {
    cadena = text.trim();
    const arrPalabras = cadena.split(' ');
    const palabrasSinAdicionales = [];

    for (let i = 0; i < arrPalabras.length; i++) {
        let palabraLimpia = '';

        for (let j = 2; j < arrPalabras[i].length; j += 3) {
            palabraLimpia += arrPalabras[i][j];
        };
        palabrasSinAdicionales.push(palabraLimpia);
    };
    return palabrasSinAdicionales;
}

// Paso 7: Convertir el array de palabras desencriptadas en un array de letras
function pasarArrayPalabrasALetras(arr) {
    const arrayLetras = [];

    for (let i = 0; i < arr.length; i++) {
        const letrasPorPalabra = arr[i].split('');
        arrayLetras.push(letrasPorPalabra);
    }
    return arrayLetras;
};

// Paso 8: Invertir el orden de las letras en cada palabra
function invertirOrdenDePalabras(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].reverse();
    }
    return arr;
}

// Paso 9: Convertir el array de letras de nuevo en texto desencriptado
function arrayATextoDesencriptando(arr) {
    let texto = "";

    for (let i = 0; i < arr.length; i++) {
        const arrUnido = arr[i].join('');
        texto += arrUnido + " ";
    };
    return texto;
};

// Paso 10: limpar el HTML y mostrar texto encriptado
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
    imgPika.src = "./assets/img/pika-saludo-cortado.png";
    imgPika.classList.add('pikachu-saludando');
    ventanaTexto.appendChild(imgPika);

    parrafo.textContent = text;
    parrafo.classList.add('mostrar-texto-encriptado');

    ventanaTexto.style.justifyContent = 'space-between';
    ventanaTexto.style.textAlign = 'left';
    ventanaTexto.style.paddingBottom = 0;
    ventanaTexto.style.paddingTop = "1rem";
};