document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".contenedor-1").style.display = "none";
        document.querySelector(".contenedor-2").style.display = "grid";
        
    }, 60000); // 60 segundos
});


function verRespuestas() {
     // Obtener todos los elementos de texto que quieres marcar
    let respuesta = document.querySelectorAll(".respuesta");

    // Iterar sobre los elementos y aplicar algún cambio, como agregar una clase
        respuesta.forEach(function(texto) {
        texto.classList.add("respuestaCorrecta");
})
};

 // Obtener el contenido del párrafo
let parrafo = document.querySelector(".textoVeloz").innerText;

 // Contar las palabras
 let palabras = parrafo.split(/\s+/).filter(function (word) {
   return word.length > 0;
 });

 // Mostrar el resultado en la consola
document.querySelector(".contador").innerText = palabras.length + "\n"+ "Palabras";
