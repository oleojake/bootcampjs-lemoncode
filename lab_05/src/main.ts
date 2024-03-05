// VARIABLES GLOBALES
let puntos = 0;
let queHubieraPasadoPulsado = false; // Botón para simulación
let jugadas = [];

const elementPointsInfo = document.getElementById("points-info");
const elementPoints = document.getElementById("points");

const dameNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
}

const dameNumeroDeCarta = (numeroAleatorio : number) : number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio +2;
    }
    return numeroAleatorio;
}

const dameSrcCarta = (carta : number) : string => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}

const dameLosPuntosDeLaCarta = (numeroDeCarta : number) : number => {
    if (numeroDeCarta <= 7) {
        return numeroDeCarta;
    } else {
        return 0.5;
    }
}

const sumaPuntos = (numeroDeCarta : number) => {
    puntos = puntos + numeroDeCarta
}

const mostrarCarta = (srcCarta : string) : void  => {
    const imgCarta = document.getElementById("card");
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = srcCarta;
    }
}

const registrarJugadas = (puntosAnotados : number) => {
    jugadas.push (puntosAnotados);
}

const obtenerIdCartaHistorial = () : string => {
    return `card${jugadas.length}`;
}

// HISTORIAL 
const muestraCartaEnHistorial = (numeroDeCarta : number) : void => {
    const id = obtenerIdCartaHistorial();
    const cartaAPintarHistorial = document.getElementById(id);
    if(cartaAPintarHistorial !== null && cartaAPintarHistorial !== undefined &&
        cartaAPintarHistorial instanceof HTMLImageElement){
            const srcCarta = dameSrcCarta (numeroDeCarta);
            cartaAPintarHistorial.src = srcCarta;
            cartaAPintarHistorial.style.opacity = "1";
    }
}

const revisarPartida = () => {
    if (puntos > 7.5) {
        muestraMensajeGameOver ();
    }
    else {
        actualizaPuntuación ();
    }
}
// La primera vez se llama cuando el DOM está listo
document.addEventListener("DOMContentLoaded", revisarPartida);

// BUCLE PRINCIPAL
const dameCarta = () : void => {
    const numeroAleatorio = dameNumeroAleatorio();
    const numeroDeCarta = dameNumeroDeCarta (numeroAleatorio);
    const srcCarta = dameSrcCarta (numeroDeCarta);
    mostrarCarta(srcCarta);
    const puntosDeLaCarta = dameLosPuntosDeLaCarta (numeroDeCarta);
    sumaPuntos (puntosDeLaCarta);
    registrarJugadas(puntosDeLaCarta);
    muestraCartaEnHistorial(numeroDeCarta);
    revisarPartida();
}
const botonDameCarta = document.getElementById("boton-dame-carta");
if (botonDameCarta !== null && botonDameCarta !== undefined
    && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.addEventListener("click", dameCarta);
}

// Desactiva Botón Dame Carta
const desactivaDameCarta = () => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarme.style.display = "none";
            botonNuevaPartida.style.display = "inline";
    }
}

const muestraMensajeGameOver = () => {
if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
    elementPoints !==null && elementPoints !== undefined) {
        if (queHubieraPasadoPulsado == false) {
            elementPointsInfo.innerHTML = `💀 ¡GAME OVER, te has pasado!`;
            elementPoints.innerHTML = "PUNTUACIÓN: " + puntos.toString();
            desactivaDameCarta();
        }
        else {
            elementPointsInfo.innerHTML = `💀 ¡Te hubieras pasado, con ${puntos} puntos!`;
        }
    }
}

const actualizaPuntuación = () => {
if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
    elementPoints !==null && elementPoints !== undefined) {
        if (queHubieraPasadoPulsado == false) {
            elementPoints.innerHTML = "PUNTUACIÓN: " + puntos.toString();
        }
        else {
            elementPointsInfo.innerHTML = `🍀 ¡Lástima, Hubieras llegado a ${puntos} puntos!`;
        }
    }
}               

const restablecerJuego = () => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement &&
        botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement &&
        elementPointsInfo !== null && elementPointsInfo !== undefined) {
            botonDameCarta.disabled = false;
            botonPlantarme.style.display = "inline";
            botonNuevaPartida.style.display = "none";
            botonHubieraPasado.style.display = "none";
            queHubieraPasadoPulsado = false;
            puntos = 0;
            elementPointsInfo.innerHTML = "ℹ️ Cartas del 1-7 y las figuras 0.5 puntos";
        }
}

const vaciaJugadasAnteriores = () => {
    jugadas = [];
}

const borraCartaHistorial = (idCarta : string) => {
let cartaHistorial = document.getElementById(idCarta);
    if(cartaHistorial !== null && cartaHistorial !== undefined &&
    cartaHistorial instanceof HTMLImageElement){
        cartaHistorial.style.opacity = "0";
        const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
        cartaHistorial.src = srcCarta;
    }
}

// BORRAR HISTORIAL
const borrarHistorial = () : void => {
vaciaJugadasAnteriores();
for (let i = 1; i <= 8; i++){
    borraCartaHistorial (`card${i}`);
}
}

// NUEVA PARTIDA
const nuevaPartida = () => {
    restablecerJuego();
    const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
    mostrarCarta (srcCarta);
    borrarHistorial ();
    revisarPartida ();  
}
const botonNuevaPartida = document.getElementById("boton-nueva-partida");
if (botonNuevaPartida !== null && botonNuevaPartida !== undefined
    && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click",nuevaPartida);
}


const muestraBotonQueHubieraPasado = () => {
    if (botonHubieraPasado!== null && botonHubieraPasado !== undefined) {
        // Muestra el botón qué hubiera pasado y desactiva el resto de botones
        botonHubieraPasado.style.display = "block";
        desactivaDameCarta();
    }
}

// ME PLANTO
const mePlanto = () : void => {
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

    muestraBotonQueHubieraPasado();

}
const botonPlantarme = document.getElementById("boton-plantarme");
if (botonPlantarme !== null && botonPlantarme !== undefined
    && botonPlantarme instanceof HTMLButtonElement) {
        botonPlantarme.addEventListener("click", mePlanto);
    }

// QUE HUBIERA PASADO
const queHubieraPasado = () => {
    if (botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement) {
        // Hace la simulación pero mostrará otro mensaje y no actualizará puntos
        botonHubieraPasado.style.display = "none";
        queHubieraPasadoPulsado = true;
        dameCarta(); 
    }
}
const botonHubieraPasado = document.getElementById("boton-proxima-carta");
if (botonHubieraPasado !== null && botonHubieraPasado !== undefined
    && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.addEventListener("click",queHubieraPasado);
    }