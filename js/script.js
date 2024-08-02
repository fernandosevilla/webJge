const palabras = ["Diviértete", "Explora", "Aprende", "Juega"];
const palabrasDinamicas = document.querySelector('.dinamicas');
let indiceActual = 0;
const changeInterval = 3000; // 3000 ms = 3 segundos

function cambiarPalabra() {
    palabrasDinamicas.style.opacity = 0;
    setTimeout(() => {
        indiceActual = (indiceActual + 1) % palabras.length;
        palabrasDinamicas.textContent = palabras[indiceActual];
        palabrasDinamicas.style.opacity = 1;
    }, 1000); // tiempo de la animacion (es 1 segundo)
}

// Cambia la palabra inicialmente y luego en intervalos regulares
setInterval(cambiarPalabra, changeInterval);
cambiarPalabra();
