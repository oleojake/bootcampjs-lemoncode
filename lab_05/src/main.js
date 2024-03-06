// VARIABLES GLOBALES
const estado = {
    status: "JUGANDO"
}

let puntos = 0;
let jugadas = [];

const elementPointsInfo = document.getElementById("points-info");
const elementPoints = document.getElementById("points");

const dameNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
}

const dameNumeroDeCarta = (numeroAleatorio) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio +2;
    }
    return numeroAleatorio;
}

const dameSrcCarta = (carta) => {
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

const mostrarCarta = (srcCarta)  => {
    const imgCarta = document.getElementById("card");
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = srcCarta;
    }
}

const dameLosPuntosDeLaCarta = (numeroDeCarta) => {
    if (numeroDeCarta <= 7) {
        return numeroDeCarta;
    } else {
        return 0.5;
    }
}

const sumaPuntos = (numeroDeCarta) => {
    return puntos + numeroDeCarta
}

const actualizarPuntos = (nuevosPuntos) => {
    puntos = nuevosPuntos;
}

const registrarJugadas = (puntosAnotados) => {
    jugadas.push (puntosAnotados);
}

const obtenerIdCartaHistorial = () => {
    return `card${jugadas.length}`;
}

const muestraCartaEnHistorial = (numeroDeCarta) => {
    const id = obtenerIdCartaHistorial();
    const cartaAPintarHistorial = document.getElementById(id);
    if(cartaAPintarHistorial !== null && cartaAPintarHistorial !== undefined &&
        cartaAPintarHistorial instanceof HTMLImageElement){
            const srcCarta = dameSrcCarta (numeroDeCarta);
            cartaAPintarHistorial.src = srcCarta;
            cartaAPintarHistorial.style.opacity = "1";
    }
}

// Desactiva Botón Dame Carta // UI
const desactivaDameCarta = () => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarme.style.display = "none";
            botonNuevaPartida.style.display = "inline";
    }
}

const generarMensajePointsInfo = () => {
    let mensaje = "";
    switch (estado.status) {
        case "HA_GANADO":
            mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena!";
        break;

        case "HA_PLANTADO":
            if (puntos <= 7 && puntos >= 6)
                mensaje = "🤏 Casi casi...";
            else if (puntos >= 5)
                mensaje = "💩 Te ha entrado el canguelo eh?";
            else if (puntos <= 4)
                mensaje = "🥱 Has sido muy conservador";
        break;

        case "HA_PERDIDO":
            mensaje = `💀 ¡GAME OVER, te has pasado!`;
        break;

        case "QUE_HUBIERA_PASADO":
            if (puntos > 7.5)
                mensaje = `💀 ¡Te hubieras pasado, con ${puntos} puntos!`;
            else
                mensaje = `🍀 ¡Lástima, Hubieras llegado a ${puntos} puntos!`;
        break;

        case "JUGANDO":
            mensaje = "ℹ️ Cartas del 1-7 y las figuras 0.5 puntos"          
        break;
    }
    return mensaje;
}

// UI
const imprimeMensajePointsInfo = (mensaje) => {
    if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
        elementPointsInfo instanceof HTMLElement) {
            elementPointsInfo.innerHTML = mensaje;
        }
}

const generarMensajePoints = () =>  {
    return "PUNTUACIÓN: " + puntos.toString();
}

// UI
const imprimeMensajePoints = (mensaje) => {
    if (elementPoints !== null && elementPoints !== undefined &&
        elementPoints instanceof HTMLElement) {
            elementPoints.innerHTML = mensaje;
        }
}

const actualizaPuntuacion = () => {
    const mensajePoints = generarMensajePoints();
    imprimeMensajePoints (mensajePoints);
    const mensajePointsInfo = generarMensajePointsInfo ();
    imprimeMensajePointsInfo(mensajePointsInfo);
}

const revisarPartida = () => {  
    if (puntos > 7.5 && estado !== "QUE_HUBIERA_PASADO") {
        estado.status = "HA_PERDIDO";
        desactivaDameCarta();
    }
    actualizaPuntuacion();
}
document.addEventListener("DOMContentLoaded", revisarPartida);

// BUCLE PRINCIPAL
const dameCarta = () => {
    const numeroAleatorio = dameNumeroAleatorio(); 
    const numeroDeCarta = dameNumeroDeCarta (numeroAleatorio);
    const srcCarta = dameSrcCarta (numeroDeCarta);
    mostrarCarta(srcCarta);
    const puntosDeLaCarta = dameLosPuntosDeLaCarta (numeroDeCarta);
    const puntosSumados = sumaPuntos (puntosDeLaCarta);
    actualizarPuntos(puntosSumados);
    registrarJugadas(puntosDeLaCarta);
    muestraCartaEnHistorial(numeroDeCarta);
    revisarPartida();
}
const botonDameCarta = document.getElementById("boton-dame-carta");
if (botonDameCarta !== null && botonDameCarta !== undefined
    && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.addEventListener("click", dameCarta);
}

// UI
const restablecerBotones = () => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement &&
        botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement &&
        elementPointsInfo !== null && elementPointsInfo !== undefined) {
            botonDameCarta.disabled = false;
            botonPlantarme.style.display = "inline";
            botonNuevaPartida.style.display = "none";
            botonHubieraPasado.style.display = "none";
        }
}

const restablecerVariables = () => {
    estado.status = "JUGANDO";
    puntos = 0;
}

const vaciaJugadasAnteriores = () => {
    jugadas = [];
}

// UI
const borraCartaHistorial = (idCarta) => {
let cartaHistorial = document.getElementById(idCarta);
    if(cartaHistorial !== null && cartaHistorial !== undefined &&
    cartaHistorial instanceof HTMLImageElement){
        cartaHistorial.style.opacity = "0";
        const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
        cartaHistorial.src = srcCarta;
    }
}

// BORRAR HISTORIAL
const borrarHistorial = () => {
    vaciaJugadasAnteriores();
    for (let i = 1; i <= 8; i++){
        borraCartaHistorial (`card${i}`);
    }
}

// NUEVA PARTIDA
const nuevaPartida = () => {
    restablecerBotones();
    restablecerVariables();
    const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
    mostrarCarta (srcCarta);
    borrarHistorial();
    actualizaPuntuacion ();  
}
const botonNuevaPartida = document.getElementById("boton-nueva-partida");
if (botonNuevaPartida !== null && botonNuevaPartida !== undefined
    && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click",nuevaPartida);
}

const muestraBotonQueHubieraPasado = () => {
    if (botonHubieraPasado!== null && botonHubieraPasado !== undefined
        && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.style.display = "block";
    }
}

// QUE HUBIERA PASADO
const queHubieraPasado = () => {
    if (botonHubieraPasado !== null && botonHubieraPasado !== undefined 
        && botonHubieraPasado instanceof HTMLButtonElement) {
        estado.status = "QUE_HUBIERA_PASADO";
        dameCarta(); 
    }
}
const botonHubieraPasado = document.getElementById("boton-proxima-carta");
if (botonHubieraPasado !== null && botonHubieraPasado !== undefined
    && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.addEventListener("click", queHubieraPasado);
    }

const mePlanto = () => {
    estado.status = "HA_PLANTADO";
    const mensajePointsInfo = generarMensajePointsInfo();
    imprimeMensajePointsInfo(mensajePointsInfo);
    muestraBotonQueHubieraPasado();
    desactivaDameCarta();
}

const botonPlantarme = document.getElementById("boton-plantarme");
if (botonPlantarme !== null && botonPlantarme !== undefined
    && botonPlantarme instanceof HTMLButtonElement) {
        botonPlantarme.addEventListener("click", mePlanto);
}