// VARIABLES GLOBALES
let puntos = 0;
let queHubieraPasadoPulsado = false; // Botón para simulación
let jugadas = [];

const elementPointsInfo = document.getElementById("points-info");
const elementPoints = document.getElementById("points");

// MOSTRAR PUNTUACIÓN
function muestraPuntuacion () : void {
if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
    elementPoints !==null && elementPoints !== undefined){
        if(queHubieraPasadoPulsado == false) {
            if ( puntos > 7.5){
                elementPointsInfo.innerHTML = `💀 ¡GAME OVER, te has pasado!`;
                elementPoints.innerHTML = "PUNTUACIÓN: " + puntos.toString();
                gameOver();
            }
            else {
                elementPoints.innerHTML = "PUNTUACIÓN: " + puntos.toString();
            }
        }
        else { // Hace la simulación pero no cuenta como nueva jugada
            if ( puntos > 7.5) {
                elementPointsInfo.innerHTML = `💀 ¡Te hubieras pasado, con ${puntos} puntos!`;
            }
            else {
                elementPointsInfo.innerHTML = `🍀 ¡Lástima, Hubieras llegado a ${puntos} puntos!`;
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// DAME CARTA
function dameCarta() : void {
    let cartaSeleccionada = Math.ceil(Math.random() * 10); // Entre 1 y 10
    if (cartaSeleccionada > 7) {
        cartaSeleccionada = cartaSeleccionada +2; // Si es 8, 9 o 10 le suma 2 => 10, 11 y 12
    }
    mostrarCarta(cartaSeleccionada);
}
const botonDameCarta = document.getElementById("boton-dame-carta");
botonDameCarta?.addEventListener("click", dameCarta);

// MOSTRAR CARTA
function mostrarCarta (carta : number) : void {
    let imgCarta = document.getElementById("card");
    switch (carta) {
        case 0:
            if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 1:
            if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 2:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 3:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 4:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 5:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 6:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 7:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                puntos = puntos + carta;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 10:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                puntos = puntos + 0.5;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 11:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                puntos = puntos + 0.5;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;
        case 12:
            if(imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                puntos = puntos + 0.5;
                jugadas.push(carta);
                actualizaHistorial(imgCarta.src);
                muestraPuntuacion();
            }
            break;           
    }
}

// HISTORIAL 
function actualizaHistorial (src : string) : void {
    const cartaHistorial = document.getElementById(`card${jugadas.length}`);
    if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.src = src;
            cartaHistorial.style.opacity = "1";
        }
}

// GAME OVER
function gameOver () {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarme.style.display = "none";
            botonNuevaPartida.style.display = "inline";
    }
}

// NUEVA PARTIDA
function nuevaPartida () {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement &&
        botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement &&
        elementPointsInfo !== null && elementPointsInfo !== undefined) {
            // Se restablece el juego
            botonDameCarta.disabled = false;
            botonPlantarme.style.display = "inline";
            botonNuevaPartida.style.display = "none";
            botonHubieraPasado.style.display = "none";
            queHubieraPasadoPulsado = false;
            puntos = 0;
            elementPointsInfo.innerHTML = "ℹ️ Cartas del 1-7 y las figuras 0.5 puntos";
            muestraPuntuacion ();
            mostrarCarta (puntos); // Como se pasa el 0 mostrarCarta muestra el reverso
            borrarHistorial ();
        }
}
const botonNuevaPartida = document.getElementById("boton-nueva-partida");
botonNuevaPartida?.addEventListener("click",nuevaPartida);

// BORRAR HISTORIAL
function borrarHistorial () : void {
    jugadas = []; // Vacía el array de jugadas
    for (let i = 1; i <= 8; i++){
        let cartaHistorial = document.getElementById(`card${i}`);
        if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
            cartaHistorial.style.opacity = "0";
        }
    }
}

// ME PLANTO
function mePlanto () : void {
    if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
        elementPoints !==null && elementPoints !== undefined) {
        if (puntos === 7.5) {
            elementPointsInfo.innerHTML = "🥳 ¡Lo has clavado! ¡Enhorabuena!";
        }
        else if (puntos >= 6 && puntos <= 7) {
            elementPointsInfo.innerHTML = "🤏 Casi casi...";
        }
        else if (puntos >= 5) {
            elementPointsInfo.innerHTML = "💩 Te ha entrado el canguelo eh?";
        }
        else if (puntos <= 4) {
            elementPointsInfo.innerHTML = "🥱 Has sido muy conservador";
        }
    }
    if (botonHubieraPasado!== null && botonHubieraPasado !== undefined) {
        botonHubieraPasado.style.display = "block";
        gameOver();
    }

}
const botonPlantarme = document.getElementById("boton-plantarme");
botonPlantarme?.addEventListener("click", mePlanto);

// QUE HUBIERA PASADO
function queHubieraPasado () {
    if (botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.style.display = "none";
        queHubieraPasadoPulsado = true;
        // Hace la simulación pero como se ha marcado a true, cuando llegue a muestra puntuación no será una nuevajugada
        dameCarta(); 
    }
}
const botonHubieraPasado = document.getElementById("boton-proxima-carta");
botonHubieraPasado?.addEventListener("click",queHubieraPasado);

// CENTRAR UN DIV SIMPLE EN EL CENTRO
// MEDIA QUERIES PARA MOBILE (width 100% o menú alargado)
// COLORES BALATRO