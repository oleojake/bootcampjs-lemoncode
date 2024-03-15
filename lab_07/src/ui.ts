import {
    Estado,
    partida,
} from './modelo';

import {
    dameSrcCarta,
    generarMensajePointsInfo,
    generarMensajePoints,
    dameNumeroAleatorio,
    dameNumeroDeCarta,
    dameLosPuntosDeLaCarta,
    sumaPuntos,
    actualizarPuntos,
    registrarJugadas,
    vaciaJugadasAnteriores,
    restablecerVariables,
    obtenerIdCartaHistorial
} from './motor';


const mostrarCarta = (srcCarta : string) : void  => {
    const imgCarta = document.getElementById("card");
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = srcCarta;
    }
}


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

// BUCLE PRINCIPAL
const dameCarta = () : void => {
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

const desactivaDameCarta = () : void => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarme.style.display = "none";
            botonNuevaPartida.style.display = "inline";
    }
}

const imprimeMensajePointsInfo = (mensaje : string) : void => {
        const elementPointsInfo = document.getElementById("points-info");
        if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
            elementPointsInfo instanceof HTMLParagraphElement) {
                elementPointsInfo.innerHTML = mensaje;
            }
}

const imprimeMensajePoints = (mensaje : string) : void => {
        const elementPoints = document.getElementById("points");
        if (elementPoints !== null && elementPoints !== undefined &&
            elementPoints instanceof HTMLParagraphElement) {
                elementPoints.innerHTML = mensaje;
        }
}

const actualizaPuntuacion = () : void => {
    const mensajePoints = generarMensajePoints();
    imprimeMensajePoints (mensajePoints);
    const mensajePointsInfo = generarMensajePointsInfo ();
    imprimeMensajePointsInfo(mensajePointsInfo);
}

export const revisarPartida = () : void => {  
    if(partida.estado !== "QUE_HUBIERA_PASADO"){
        if (partida.puntos > 7.5) {
            partida.estado = Estado.HA_PERDIDO;
            desactivaDameCarta();
            }
        if (partida.puntos === 7.5){
            partida.estado = Estado.HA_GANADO;
            desactivaDameCarta();
        }
    }
    actualizaPuntuacion();
}

const restablecerBotones = () : void => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement &&
        botonHubieraPasado !== null && botonHubieraPasado !== undefined && botonHubieraPasado instanceof HTMLButtonElement) {
            botonDameCarta.disabled = false;
            botonPlantarme.style.display = "inline";
            botonNuevaPartida.style.display = "none";
            botonHubieraPasado.style.display = "none";
        }
}

const borraCartaHistorial = (idCarta : string) : void => {
    let cartaHistorial = document.getElementById(idCarta);
        if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.style.opacity = "0";
            const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
            cartaHistorial.src = srcCarta;
        }
    }

const borrarHistorial = () : void => {
    vaciaJugadasAnteriores();
    for (let i = 1; i <= 8; i++){
        borraCartaHistorial (`card${i}`);
    }
}

export const nuevaPartida = () : void => {
    restablecerBotones();
    const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
    mostrarCarta (srcCarta);
    borrarHistorial();
    restablecerVariables();
    actualizaPuntuacion();
}

const muestraBotonQueHubieraPasado = () : void => {
    if (botonHubieraPasado!== null && botonHubieraPasado !== undefined
        && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.style.display = "block";
    }
}

const mePlanto = () : void => {
    partida.estado = Estado.HA_PLANTADO;
    const mensajePointsInfo = generarMensajePointsInfo();
    imprimeMensajePointsInfo(mensajePointsInfo);
    muestraBotonQueHubieraPasado();
    desactivaDameCarta();
}


const queHubieraPasado = () : void => {
    partida.estado = Estado.QUE_HUBIERA_PASADO;
    dameCarta(); 
}

// LAS HE MOVIDO AQUÍ DESDE SHELL PARA EVITAR DEPENDENCIA CIRCULAR
    const botonNuevaPartida = document.getElementById("boton-nueva-partida");
        if (botonNuevaPartida !== null && botonNuevaPartida !== undefined
            && botonNuevaPartida instanceof HTMLButtonElement) {
                botonNuevaPartida.addEventListener("click", nuevaPartida);
    }

    const botonPlantarme = document.getElementById("boton-plantarme");
        if (botonPlantarme !== null && botonPlantarme !== undefined
            && botonPlantarme instanceof HTMLButtonElement) {
            botonPlantarme.addEventListener("click", mePlanto);
    }

    const botonHubieraPasado = document.getElementById("boton-proxima-carta");
        if (botonHubieraPasado !== null && botonHubieraPasado !== undefined
            && botonHubieraPasado instanceof HTMLButtonElement) {
            botonHubieraPasado.addEventListener("click", queHubieraPasado);
    }

    const botonDameCarta = document.getElementById("boton-dame-carta");
    if (botonDameCarta !== null && botonDameCarta !== undefined
        && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.addEventListener("click", dameCarta);
    }

