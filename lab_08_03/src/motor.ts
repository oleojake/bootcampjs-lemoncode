import {__CONSTANTES} from "./constantes";
import {Carta, Tablero} from "./modelo"


export const barajarCartas = (cartas : Carta[]): Carta[] => {
    let currentIndex = cartas.length;
    let randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cartas[currentIndex], cartas[randomIndex]] = [cartas[randomIndex], cartas[currentIndex]];
    }
    return cartas;
}

export const sePuedeVoltearLaCarta = (indice: number, tablero: Tablero): boolean => {
    if(tablero.cartas[indice].estaVuelta === false &&
        tablero.cartas[indice].encontrada === false 
        && tablero.estadoPartida !== "DosCartasLevantadas") {
        return true;
    }
    return false;
}

export const marcarCartaVolteada = (indice: number, tablero: Tablero) : void => {
    tablero.cartas[indice].estaVuelta = true;
}

export const guardarIndiceYCambiarEstadoTablero = (indice : number, tablero : Tablero) => {
    switch (tablero.estadoPartida){
        case "CeroCartasLevantadas":
            tablero.cambiarEstadoTablero("UnaCartaLevantada");
            tablero.indiceCartaVolteadaA = indice;
            break;
        case "UnaCartaLevantada":
            tablero.cambiarEstadoTablero("DosCartasLevantadas");
            tablero.indiceCartaVolteadaB = indice;
            break;
    }
}

export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if(tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
        parejaEncontrada(tablero, indiceA, indiceB);
        return true;
    }
    else{
        parejaNoEncontrada(tablero, indiceA, indiceB);
        return false;
    }
}

const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    
}

const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
}

export const esPartidaCompleta = (tablero: Tablero) : boolean => {
    const todasLasCartasEncontradas : boolean = tablero.cartas.every(
        (carta : Carta) => carta.encontrada === true
    );
    return todasLasCartasEncontradas;
}

export const estaLaPartidaIniciada = (tablero : Tablero) : boolean => {
    return tablero.estadoPartida === "PartidaNoIniciada"
    ? false 
    : true
}

export const hayDosCartasLevantadas = (tablero : Tablero) : boolean => {
    return tablero.estadoPartida === "DosCartasLevantadas"
    ? true 
    : false
}

export const getDivElementID = (indice : number) : string =>  {
    return (`${__CONSTANTES.divPrefixID}${indice}`);
}


export const getImageElementID = (indice : number) : string =>  {
    return (`${__CONSTANTES.imagePrefixID}${indice}`);
}

export const getSrc = (tablero: Tablero, indice : number) : string => {
    return tablero.cartas[indice].imagen
}