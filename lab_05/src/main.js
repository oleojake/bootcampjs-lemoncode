let puntos = 0;
let queHubieraPasadoPulsado = false;
let jugadas = [];

// MOSTRAR PUNTUACIÓN
function muestraPuntuacion () {
    if(queHubieraPasadoPulsado == false) {
        if ( puntos > 7.5){
            document.getElementById("points-info").innerHTML = `💀 ¡GAME OVER, te has pasado!`;
            document.getElementById("points").innerHTML = "PUNTUACIÓN: " + puntos.toString();
            gameOver();
        }
        else {
            document.getElementById("points").innerHTML = "PUNTUACIÓN: " + puntos.toString();
        }
    }
    else {
        if ( puntos > 7.5) {
            document.getElementById("points-info").innerHTML = `💀 ¡Te hubieras pasado, con ${puntos} puntos!`;
        }
        else {
            document.getElementById("points-info").innerHTML = `🍀 ¡Lástima, Hubieras llegado a ${puntos} puntos!`;
        }
    }
}
document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// DAME CARTA
function dameCarta() {
    let cartaSeleccionada = Math.ceil(Math.random() * 10);
    if (cartaSeleccionada > 7) {
        cartaSeleccionada = cartaSeleccionada +2;
    }
    mostrarCarta(cartaSeleccionada);
}
const botonDameCarta = document.getElementById("boton-dame-carta");
botonDameCarta.addEventListener("click", dameCarta);

// MOSTRAR CARTA
function mostrarCarta (carta)  {
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

// ME PLANTO
function mePlanto () {
    if (puntos == 7.5) {
        document.getElementById("points-info").innerHTML = "🥳 ¡Lo has clavado! ¡Enhorabuena!";
    }
    else if (puntos >= 6 && puntos <= 7) {
        document.getElementById("points-info").innerHTML = "🤏 Casi casi...";
    }
    else if (puntos >= 5) {
        document.getElementById("points-info").innerHTML = "💩 Te ha entrado el canguelo eh?";
    }
    else if (puntos <= 4) {
        document.getElementById("points-info").innerHTML = "🥱 Has sido muy conservador";
    }
    botonHubieraPasado.style.display = "block";
    gameOver();
}
const botonPlantarme = document.getElementById("boton-plantarme");
botonPlantarme.addEventListener("click", mePlanto);

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
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = false;
            botonPlantarme.style.display = "inline";
            botonNuevaPartida.style.display = "none";
            botonHubieraPasado.style.display = "none";
            queHubieraPasadoPulsado = false;
            puntos = 0;
            document.getElementById("points-info").innerHTML = "ℹ️ Cartas del 1-7 y las figuras 0.5 puntos";
            muestraPuntuacion ();
            mostrarCarta (puntos);
            borrarHistorial ();
        }
}
const botonNuevaPartida = document.getElementById("boton-nueva-partida");
botonNuevaPartida.addEventListener("click",nuevaPartida);

// QUE HUBIERA PASADO
function queHubieraPasado () {
    botonHubieraPasado.style.display = "none";
    queHubieraPasadoPulsado = true;
    dameCarta();
}
const botonHubieraPasado = document.getElementById("boton-proxima-carta");
botonHubieraPasado.addEventListener("click",queHubieraPasado);

// HISTORIAL 
function actualizaHistorial (src)  {
    const cartaHistorial = document.getElementById(`card${jugadas.length}`);
    if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.src = src;
            cartaHistorial.style.opacity = "1";
        }
}

// BORRAR HISTORIAL
function borrarHistorial () {
    jugadas = [];
    for (let i = 1; i <= 8; i++){
        let cartaHistorial = document.getElementById(`card${i}`);
        if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
            cartaHistorial.style.opacity = "0";
        }
    }
}