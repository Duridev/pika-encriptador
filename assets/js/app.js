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


//********************** */ FUNCIONES GLOBALES ****************************************


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

// FUNCIONES PARA ENCRIPTAR EL TEXTO ****************************************

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
    console.log('**separar palabras en array:', arrayPalabras);
    return arrayPalabras;
};

    // Paso 3: Añadir letras aleatorias a cada palabra
function adicionarLetrasArray(arr) {             
    const arrayConLetrasAdicionadas = [];

    for(let i = 0; i < arr.length; i++){
        const palabrasConLetrasAdicionadas = [];

        for(let j = 0; j < arr[i].length; j++) {
            consRandom = consonantes[Math.floor(Math.random() * consonantes.length)];
            vocRandom = vocales[Math.floor(Math.random() * vocales.length)];
            palabrasConLetrasAdicionadas.push(consRandom + vocRandom + arr[i][j]);
        }
        arrayConLetrasAdicionadas.push(palabrasConLetrasAdicionadas);
    };
    console.log('**arr con letyras adicionadas:', arrayConLetrasAdicionadas);
    return arrayConLetrasAdicionadas;
};

    // Paso 4: Invertir las letras de cada palabra
function invertirArray(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].slice().reverse())
    }
    console.log('**array reversado:', newArr);
    return newArr
}


    // Paso 5: Juntar las letras de cada palabra
function juntarLetrasPalabrasArray(arr) {
    const arrayPalabrasConLetrasJuntas = [];

    for (let i = 0; i < arr.length; i++) {
        arrayPalabrasConLetrasJuntas.push(arr[i].join(''));
    }
    const palabrasConLetrasJuntas = arrayPalabrasConLetrasJuntas.join(' ');
    console.log(palabrasConLetrasJuntas);
    return palabrasConLetrasJuntas;
}

    // Paso 6: Cambiar las vocales por lo solicitado en el challenge
function encriptacionChallenge(text) {
    console.log('**antes de encriptar:', text);
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    console.log('**despues de encriptar:', text);
    return text;
}

    // Paso 7: Añadir el prefijo "pika" a cada palabra
function incluirPika(text) {
    const arr = text.split(' ')
    const arrConPika = []
    for(let i = 0; i <  arr.length; i++){
        if(arr[i] !==  '') {
        arrConPika.push("pika" + arr[i]);
        }
    }
    console.log(arrConPika);
    return arrConPika;
}

    // Paso 8: Convertir el array de palabras encriptadas a string encriptado
function arrayATexto(arr) {
    let texto = "";

    for (let i = 0; i < arr.length; i++) {
        texto += arr[i] + " ";
    };
        return texto;
};

function limpiarLadoDerecho() {
    const ladoDerecho = document.querySelector('.right-area');

    ladoDerecho.innerHTML= "";
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
            //console.error('Falló al intentar copiar: ', err);
        });
};



// pikaaloh pikaogima
function desencriptar() {

    const texto = valorTextArea();

    const arrayDePalabras = pasarDePalabrasAArray(texto);

    const pikasEliminados = eliminarPika(arrayDePalabras);

    const arrATexto =  arrayATexto(pikasEliminados);
    
    const descriptadosDelChallenge = desenciptarChallenge(arrATexto)
    
    const arrayDepalabrasSemiDesencriptado = pasarDePalabrasAArray(descriptadosDelChallenge);
    console.log('xxxxxxxxxxxxxxxxxx', arrayDepalabrasSemiDesencriptado);
    
    const sinLetrasAdicionales = removerCaracteresAdicionales(descriptadosDelChallenge);
    
    const arrayDeLetras = pasarArrayPalabrasALetras(sinLetrasAdicionales);
    
    const palabrasReversadas = invertirOrdenDePalabras(arrayDeLetras);
    
    const textoDesencriptado = arrayATextoDesencriptando(palabrasReversadas)
    /*


   // const arrATextoDesencriptadoChallenge = arrayATexto(descriptadosDelChallenge)


    const arrayDePalabrasListas = reunirLetras(sinLetrasAdicionales);

    const textoDesencriptado = convertirArrayAOracion(arrayDePalabrasListas);
*/
    limpiarTextArea();

    mostrarTextoDesencriptado(textoDesencriptado);

    botonCopiarTexto();

}

// FUNCIONES PARA DESENCRIPTAR EL TEXTO ****************************************





// Seleccionar el codigo y convertirlo en array de palabras
function pasarDePalabrasAArray(texto) {

    const arrayPalabrasEncriptado = texto.split(' ');
    console.log(arrayPalabrasEncriptado);
    return arrayPalabrasEncriptado;
}
//pikahola pikachao
// Convertimos el array de palabras,a array de letras con subindice
// Quitamos todos los "pika" de las palabras
function eliminarPika(arr) {
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].substring(4)
        }
        console.log(arr);
        return arr;
}

// Desencriptamos la version del challenge
function desenciptarChallenge(text) {
    console.log(text);
    text = text.replace(/ufat/g, 'u');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/enter/g, 'e');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/imes/g, 'i');
    console.log(text);
    return text;
}


function removerCaracteresAdicionales(text){
    cadena = text.trim();
    const arrPalabras = cadena.split(' ');
    const palabrasSinAdicionales = []
    console.log('recibiendo para arraySinAdicionales', text);

    for(let i = 0; i < arrPalabras.length; i++) {
        let palabraLimpia = '';

        for (let j = 2; j < arrPalabras[i].length; j+=3) {
            palabraLimpia += arrPalabras[i][j];
        };
        palabrasSinAdicionales.push(palabraLimpia);
    };
    console.log('array sin adicionales', palabrasSinAdicionales);
    return palabrasSinAdicionales;
}

function pasarArrayPalabrasALetras(arr) {
const arrayLetras = []
    
    for(let i = 0; i < arr.length; i++) {
        const letrasPorPalabra = arr[i].split('');
        arrayLetras.push(letrasPorPalabra);
    }
    console.log('***array de array de letras:', arrayLetras);
    return arrayLetras;
    
}



// Invertimos el orden de los elementos del array
function invertirOrdenDePalabras(arr){
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        arr[i].reverse()
    }
   console.log('**array de letras reversado:', arr);
    return arr;
}

function arrayATextoDesencriptando(arr) {
    let texto = "";

    for (let i = 0; i < arr.length; i++) {
        const arrUnido = arr[i].join('')
        texto += arrUnido + " ";
    };
    console.log('texto desencriptado:', texto);
        return texto;
};


/*
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
*/


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



/////////////////////////////////////////////////////////////////////////

