import {Carta, tablero, Tablero} from "./modelo"
import { CONSTANTES, WarningMessage } from './constantes';

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

export const getDivElementID = (indice : number) : string =>  {
    return (`${CONSTANTES.divPrefixID}${indice}`);
}

export const getImageElementID = (indice : number) : string =>  {
    return (`${CONSTANTES.imagePrefixID}${indice}`);
}

export const getSrc = (tablero: Tablero, indice : number) : string => {
    return tablero.cartas[indice].imagen
}

// UI
export const setSrc = (src: string, idElement: string) => {
    const cardImgElement = document.getElementById(idElement);
    if(cardImgElement!== null && cardImgElement !== undefined && 
        cardImgElement instanceof HTMLImageElement)
        cardImgElement.src = src;
}

// UI
const addExitAnimation = (indiceA : number, indiceB : number) => {
    const divElementID1 = getDivElementID(indiceA)
    const div1 = document.getElementById(divElementID1)
    const divElementID2 = getDivElementID(indiceB)
    const div2 = document.getElementById(divElementID2)
    if(div1 !== null && div1 !== undefined &&
        div1 instanceof HTMLDivElement &&
        div2 !== null && div2 !== undefined && 
        div2 instanceof HTMLDivElement) {
        div1.classList.add('flip-vertical-left');
        div2.classList.add('flip-vertical-left');
        div1.classList.remove('flip-vertical-right');
        div2.classList.remove('flip-vertical-right');
        setTimeout(() => {
            div1.classList.remove('flip-vertical-left');
            div2.classList.remove('flip-vertical-left');   
        }, 380);
    }
}

// UI
const pintarVolteoHaciaAbajoDeLaPareja = (indiceA : number, indiceB : number) => {
    addExitAnimation(indiceA, indiceB);

    const imageAElementID = getImageElementID(indiceA)
    setSrc (CONSTANTES.srcBackCard, imageAElementID);

    const imageBElementID = getImageElementID(indiceB)
    setSrc (CONSTANTES.srcBackCard, imageBElementID);

}

// UI
const pintarParejaEncontradaGreen = (indiceA : number, indiceB : number) => {
    const imageAElementID = getImageElementID(indiceA)
    const imageBElementID = getImageElementID(indiceB)
    const imageA = document.getElementById(imageAElementID);
    const imageB = document.getElementById(imageBElementID);
    if((imageA !== null && imageA !== undefined && imageA instanceof HTMLImageElement) && 
        (imageB !== null && imageB !== undefined && imageB instanceof HTMLImageElement)){
        setTimeout(() => {
            imageA.style.backgroundColor = "#00C6A8";
            imageB.style.backgroundColor = "#00C6A8";
        }, 380);
    }
}

export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    if(tablero.cartas[indice].estaVuelta === true) {
        displayWarningMessage("YaHasVolteadoEstaCarta");
    }
    if(tablero.cartas[indice].estaVuelta === false &&
        tablero.cartas[indice].encontrada === false 
        && tablero.estadoPartida !== "DosCartasLevantadas") {
        displayWarningMessage("InformaciónGenérica");
        return true;
    }
    return false;
}

const guardarIndice = (indiceVar: string, indice: number, tablero : Tablero) => {
    switch(indiceVar) {
        case "A":
            tablero.indiceCartaVolteadaA = indice;
            break;
        case "B":
            tablero.indiceCartaVolteadaB = indice;
            break;
    }
}

const actualizarJugada = (indice : number, tablero : Tablero) => {
    switch (tablero.estadoPartida){
        case "CeroCartasLevantadas":
            tablero.cambiarEstadoTablero("UnaCartaLevantada");
            guardarIndice("A", indice, tablero);
            break;
        case "UnaCartaLevantada":
            tablero.cambiarEstadoTablero("DosCartasLevantadas");
            guardarIndice("B", indice, tablero);
            if(tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB !== undefined) {
                sonPareja (tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero);
            }
            break;
    }
}

export const voltearLaCarta = (indice: number, tablero: Tablero) : void => {
    tablero.cartas[indice].estaVuelta = true;
    actualizarJugada (indice, tablero); 
}

const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if(tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
        parejaEncontrada(tablero, indiceA, indiceB);
        if (esPartidaCompleta(tablero)) {
            tablero.cambiarEstadoTablero("PartidaCompleta");
            displayWarningMessage("HasCompletadoLaPartida");
        }
        return true;
    }
    else{
        parejaNoEncontrada(tablero, indiceA, indiceB);
        return false;
    }
}

// UI
export const mostrarIntentos = () => {
    const intentosElement = document.getElementById("intentos");
    if(intentosElement !== null && intentosElement !== undefined
        && intentosElement instanceof HTMLParagraphElement){
            intentosElement.innerText = `${CONSTANTES.intentosPrefix}${tablero.intentos}`;
        }
}

const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    pintarParejaEncontradaGreen(indiceA, indiceB);
    tablero.sumarIntentos();
    mostrarIntentos();
}

const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    setTimeout(() => {
        pintarVolteoHaciaAbajoDeLaPareja (indiceA, indiceB);
    }, 1000);
    tablero.sumarIntentos();
    mostrarIntentos();
}

const esPartidaCompleta = (tablero: Tablero) : boolean => {
    const cartasVolteadas : boolean = tablero.cartas.every(
        (carta : Carta) => carta.encontrada === true
    );
    return cartasVolteadas;
}

// UI
export const displayWarningMessage = (display : WarningMessage) => {
    const warningMessageElement = document.getElementById("warning-message");
    if(warningMessageElement !== null && warningMessageElement !== undefined &&
        warningMessageElement instanceof HTMLParagraphElement) {
        switch (display) {
            case "DebesDarleAlBotón":
                warningMessageElement.innerHTML = "▶️ Primero debes darle al botón 'Empezar la Partida'";
                warningMessageElement.style.backgroundColor = "#F59432";
                break;
            case "YaHasVolteadoEstaCarta":
                warningMessageElement.innerHTML = "⚠️ Ya has volteado esa carta, prueba con otra";
                warningMessageElement.style.backgroundColor = "#F59432";
                break;
            case "HasCompletadoLaPartida":
                warningMessageElement.innerHTML = "🎉 ¡Has ganado! ¿Puedes hacerlo con menos intentos?";
                warningMessageElement.style.backgroundColor = "#FFA5B5";
                break;
            case "InformaciónGenérica":
                warningMessageElement.innerHTML = "¡Encuentra todas las parejas! 🦁🐔🐶🦉🐝🐷";
                warningMessageElement.style.backgroundColor = "#E6F4F1";
                break;
        }
    }
}