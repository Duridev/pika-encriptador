const consonantes = ["n", "s", "r", "l", "d", "t", "c", "m", "p", "b"];
const vocales = ["a", "e", "i", "o", "u"];


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


    // Limpiar area de texto luego de encriptar
    limpiarTextArea();

    // Creación boton copiar texto encriptado
    botonCopiarTexto();

};


// FUNCIONES PARA ENCRIPTAR EL TEXTO ****************************************

function valorTextArea() {
    const textArea = document.querySelector('#text-area');
    const contenido = textArea.value;
    const soloMinusculasSinTildes = /^(?=[\s\S]*[a-z])[\n\s]*[a-z\s]*$/;
    const parrafo = document.querySelector('#parrafo-advertencia');

    if (soloMinusculasSinTildes.test(contenido)) {
        // Si el contenido es válido, devolver el texto y restaurar el estilo del borde
        textArea.style.border = '1px solid black'; // Restaurar el estilo del borde
        parrafo.style.color = 'black'
        parrafo.style.fontSize = ''
        return contenido;
    } else {
        // Si el contenido no es válido, cambiar el estilo del borde
        textArea.style.border = '3px solid red';
        parrafo.style.color = 'red'
        parrafo.style.fontSize = '1.5rem'
        parrafo.style.fontweight = 'bold'
        return null; // O puedes devolver un valor que indique que hay un error
    }
};


function separarPalabrasArray(texto) {
    const arrayPalabras = texto.split(/\s+/);
    //console.log(arrayPalabras);
    return arrayPalabras;
};

function separarLetrasInvertidasArray(arr) {

    const arrayLetrasSeparadasInvertidas = [];
    for(let i = 0; i < arr.length; i++){
        arrayLetrasSeparadasInvertidas.push(arr[i].split('').reverse());
    }
    //console.log(arrayLetrasSeparadasInvertidas);
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
    //console.log(arrayConLetrasAdicionadas);
    return arrayConLetrasAdicionadas;
};


function juntarLetrasPalabrasArray(arr) {

    const palabrasConLetrasJuntas = [];


    for (let i = 0; i < arr.length; i++) {
        const arrayLetrasJuntadas = [];

        for (let j = 0; j < arr[i].length; j++) {
            arrayLetrasJuntadas.push(arr[i][j]);
        }
        //console.log(arrayLetrasJuntadas.join(''));
        palabrasConLetrasJuntas.push("pika" + arrayLetrasJuntadas.join(''));
    };
    
    const arrayPalabrasConLetrasJuntas = palabrasConLetrasJuntas;

    console.log(arrayPalabrasConLetrasJuntas);
    return arrayPalabrasConLetrasJuntas;
};

function arrayATextoEncriptado(arr) {
    let textoEncriptado = "";

    for (let i = 0; i < arr.length; i++) {
        textoEncriptado += arr[i] + " ";
    };
        console.log(textoEncriptado);
        return textoEncriptado;
};

function limpiarLadoDerecho() {
    const ladoDerecho = document.querySelector('.right-area');

    ladoDerecho.innerHTML= "";
};

function mostrarTextEncriptado(text) {
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
                text: "Texto copiado exitosamente",
                html: '<img src="../assets/img/pikajockey.png" width="150px" style="margin: auto"><p style="font-size: 1.8rem">Texto copiado exitosamente</p>',
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err => {
            console.error('Falló al intentar copiar: ', err);
        });
};



