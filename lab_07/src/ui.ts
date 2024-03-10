import {
    partida,
} from './modelo';

import {
    dameSrcCarta,
} from './motor';

import {
    botonPlantarme,
    botonNuevaPartida,
    botonHubieraPasado,
    botonDameCarta
} from './shell';

export const imprimeMensajePointsInfo = (mensaje : string) => {
    const elementPointsInfo = document.getElementById("points-info");
    if (elementPointsInfo !== null && elementPointsInfo !== undefined &&
        elementPointsInfo instanceof HTMLParagraphElement) {
            elementPointsInfo.innerHTML = mensaje;
        }
}

export const imprimeMensajePoints = (mensaje : string) => {
    const elementPoints = document.getElementById("points");
    if (elementPoints !== null && elementPoints !== undefined &&
        elementPoints instanceof HTMLParagraphElement) {
            elementPoints.innerHTML = mensaje;
        }
}

export const desactivaDameCarta = () => {
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement && 
        botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement && 
        botonPlantarme !== null && botonPlantarme !== undefined && botonPlantarme instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
            botonPlantarme.style.display = "none";
            botonNuevaPartida.style.display = "inline";
    }
}

export const mostrarCarta = (srcCarta : string) : void  => {
    const imgCarta = document.getElementById("card");
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = srcCarta;
    }
}

export const restablecerBotones = () => {
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

export const borraCartaHistorial = (idCarta : string) => {
    let cartaHistorial = document.getElementById(idCarta);
        if(cartaHistorial !== null && cartaHistorial !== undefined &&
        cartaHistorial instanceof HTMLImageElement){
            cartaHistorial.style.opacity = "0";
            const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
            cartaHistorial.src = srcCarta;
        }
    }

export const muestraBotonQueHubieraPasado = () => {
    if (botonHubieraPasado!== null && botonHubieraPasado !== undefined
        && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.style.display = "block";
    }
}

const obtenerIdCartaHistorial = () : string => {
    return `card${partida.jugadas.length}`;
}

export const muestraCartaEnHistorial = (numeroDeCarta : number) : void => {
    const id = obtenerIdCartaHistorial();
    const cartaAPintarHistorial = document.getElementById(id);
    if(cartaAPintarHistorial !== null && cartaAPintarHistorial !== undefined &&
        cartaAPintarHistorial instanceof HTMLImageElement){
            const srcCarta = dameSrcCarta (numeroDeCarta);
            cartaAPintarHistorial.src = srcCarta;
            cartaAPintarHistorial.style.opacity = "1";
    }
}

export const nuevaPartidaUI = () => {
    restablecerBotones();
    const srcCarta = dameSrcCarta(0); // El 0 pinta reverso
    mostrarCarta (srcCarta);
}