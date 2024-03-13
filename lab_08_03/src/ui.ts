import {Tablero} from './modelo'
import {
    voltearLaCarta,
    sePuedeVoltearLaCarta,
    barajarCartas,
    mostrarIntentos,
    getDivElementID,
    getImageElementID,
    getSrc,
    setSrc,
    displayWarningMessage
} from './motor'
import { CONSTANTES} from './constantes';

const getIndice = (div : HTMLDivElement) : number => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    let indice : number = -1;
    if(dataIndiceID !== null && dataIndiceID !== undefined){
        indice = parseInt(dataIndiceID);
    }
    return indice;
}

const addEntryAnimation = (indice : number) => {
    const divElementID = getDivElementID(indice)
    const div = document.getElementById(divElementID)
    if(div !== null && div !== undefined && 
        div instanceof HTMLDivElement) {
        div.classList.add('flip-vertical-right');
    }
}

const pintarVolteoHaciaArriba = (indice : number, tablero: Tablero) => {
    addEntryAnimation(indice);
    const imageElementID = getImageElementID(indice)
    const src = getSrc(tablero, indice);
    setTimeout(() => {
        setSrc (src, imageElementID);   
    }, 150);
}

export const handleFlipCard = (div : HTMLDivElement, tablero: Tablero) => {
    if (tablero.estadoPartida === "PartidaNoIniciada") {
        displayWarningMessage("DebesDarleAlBotón");
    }
    else {
        const indice = getIndice(div);
        if(sePuedeVoltearLaCarta(tablero, indice)){
            voltearLaCarta(indice, tablero);
            pintarVolteoHaciaArriba (indice, tablero); 
        }
    }
}

export const mostrarCartasBocaAbajo = () => {
    const imagelist = document.getElementsByClassName("card-image");
        for(let i = 0 ; i < imagelist.length; i++) {
        (imagelist[i] as HTMLImageElement).src = CONSTANTES.srcBackCard;
        (imagelist[i] as HTMLImageElement).style.backgroundColor = "white";
    }
}

export const restablecerAnimaciones = () => {
    const divlist = document.getElementsByClassName("card-container");
        for(let i = 0 ; i < divlist.length; i++) {
        divlist[i].className = "card-container";
    }
}

export const iniciarPartidaUI = () => {
    mostrarCartasBocaAbajo();
    restablecerAnimaciones();
    displayWarningMessage("InformaciónGenérica");
}


// TODO: BORRAR ENCONTRADAS && BORRAR ESTA VUELTA
export const iniciaPartida = (tablero: Tablero): void => {
    barajarCartas(tablero.cartas);
    tablero.restablecerEncontradasYVolteadas();
    tablero.borrarIndices();
    tablero.borrarIntentos();
    mostrarIntentos();
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    iniciarPartidaUI();
    console.log(tablero.cartas);
    
};