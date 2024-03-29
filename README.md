# Pika-Encriptador

Este proyecto es un encriptador y desencriptador de texto simple, con un estilo basado en el personaje de Pokémon Pikachu. Utiliza una serie de transformaciones para modificar el texto ingresado de manera que sea "encriptado" o "desencriptado".

La aplicación es responsiva para todo tipo de dispositivos moviles y  desktop.

### Aclaración
Cabe mencionar de que además de lo solicitado por el challenge, se ha añadido una encriptación adicional, esto con el fin de poder aprender aun más y hacer el desafío más desafiante.

## Cómo Funciona

El proyecto consta de dos secciones principales: 

1. **Área de Texto**: Aquí puedes ingresar el texto que deseas encriptar o desencriptar. Asegúrate de escribir solo letras minúsculas y sin tildes, nada de caracteres especiales, mayúsculas o números.

2. **Botones de Encriptar y Desencriptar**: Una vez que has ingresado el texto, puedes utilizar los botones correspondientes para realizar la acción deseada.

## Pasos de transformación del texto para ser encriptado

1. Obtener el texto del área de texto
2. Separar las palabras del texto en un array, generando un array dentro de otro array,
contituido por palbras separadas en sus letras
3. Añadir dos letras aleatorias antes de cada letra, una consonante* y una vocal.
*Dentro de las consonantes solo se utilizaron las 10 más utilizadas en el idioma español.
4. Invertir el orden del trio letras de cada palabra, manteniendo el orden de las palabras.
5. Juntar las letras de cada palabra, formando un array de las palabras encriptadas
6. Cambiar las vocales por lo solicitado en el challenge
7. Añadir el prefijo "pika" a cada palabra
8. Convertir el array de palabras encriptadas a string encriptado
9. Mostrar texto encriptado

## Tecnologías Utilizadas

El proyecto está desarrollado utilizando las siguientes tecnologías:

- **HTML**: Para la estructura básica de la página.
- **CSS**: Para el diseño y estilos de la interfaz.
- **JavaScript**: Para la lógica de encriptación y desencriptación del texto.
- **SweetAlert2**: Para mostrar mensajes de alerta personalizados.

## Cómo Usar

1. Ingresa el texto que deseas encriptar o desencriptar en el área de texto.
2. Haz clic en el botón "Encriptar" o "Desencriptar", según la acción que desees realizar.
3. El resultado se mostrará en el área designada para ello.
4. Si deseas guardar los resultados, puedes hacer clic en el botón "Pika-Copiar".

## Autor

Este proyecto fue desarrollado por Daniel Uribe - "Duridev" como parte de Bootcamp de Programación del programa ONE - Oracle Next Education, en convenio con Alura Latam.

## Licencia

Este proyecto está bajo la licencia MIT.