import {__CONSTANTES, __CSSCLASNAMES, WarningMessage} from "./constantes";
import {Tablero, tablero} from "./modelo"
import {
    marcarCartaVolteada,
    sePuedeVoltearLaCarta,
    barajarCartas,
    sonPareja,
    esPartidaCompleta,
    estaLaPartidaIniciada,
    getDivElementID,
    getImageElementID,
    getSrc,
    guardarIndiceYCambiarEstadoTablero,
    hayDosCartasLevantadas
} from "./motor"

const pintarParejaEncontradaGreen = (indiceA : number, indiceB : number) => {
    const imageAElementID = getImageElementID(indiceA)
    const imageBElementID = getImageElementID(indiceB)
    const imageA = document.getElementById(imageAElementID);
    const imageB = document.getElementById(imageBElementID);
    if((imageA && imageA instanceof HTMLImageElement) && 
        (imageB && imageB instanceof HTMLImageElement)){
        setTimeout(() => {
            imageA.style.backgroundColor = "#00C6A8";
            imageB.style.backgroundColor = "#00C6A8";
        }, 380);
    }
}

const comprobarMostrarVictoria = () => {
    if (esPartidaCompleta(tablero)) {
        tablero.cambiarEstadoTablero("PartidaCompleta");
        displayWarningMessage("HasCompletadoLaPartida");
    }
}

const addExitAnimation = (indiceA : number, indiceB : number) => {
    const divElementID1 = getDivElementID(indiceA)
    const div1 = document.getElementById(divElementID1)
    const divElementID2 = getDivElementID(indiceB)
    const div2 = document.getElementById(divElementID2)
    if(div1 && div1 instanceof HTMLDivElement
        && div2 && div2 instanceof HTMLDivElement) {
        div1.classList.remove(__CSSCLASNAMES.entryAnimation);
        div2.classList.remove(__CSSCLASNAMES.entryAnimation);
        div1.classList.add(__CSSCLASNAMES.exitAnimation);
        div2.classList.add(__CSSCLASNAMES.exitAnimation);
        setTimeout(() => {
            div1.classList.remove(__CSSCLASNAMES.exitAnimation);
            div2.classList.remove(__CSSCLASNAMES.exitAnimation);   
        }, 380);
    }
}

const pintarVolteoHaciaAbajoDeLaPareja = (indiceA : number, indiceB : number) => {
    addExitAnimation(indiceA, indiceB);
    const imageAElementID = getImageElementID(indiceA)
    setSrc (__CONSTANTES.srcBackCard, imageAElementID);
    const imageBElementID = getImageElementID(indiceB)
    setSrc (__CONSTANTES.srcBackCard, imageBElementID);
}

export const mostrarIntentos = () => {
    const intentosElement = document.getElementById("intentos");
    if(intentosElement && intentosElement instanceof HTMLParagraphElement){
            intentosElement.innerText = `${__CONSTANTES.intentosPrefix}${tablero.intentos}`;
        }
}

const actualizarParejaJugada = (tablero : Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if(sonPareja (indiceA, indiceB, tablero)){
        pintarParejaEncontradaGreen(indiceA, indiceB);
        comprobarMostrarVictoria();
    }
    else {
        setTimeout(() => {
        pintarVolteoHaciaAbajoDeLaPareja (indiceA, indiceB);
        }, 750);
    }
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    tablero.sumarIntentos();
    mostrarIntentos();
}

const getIndice = (div : HTMLDivElement) : number => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    let indice : number = -1;
    if(dataIndiceID){
        indice = parseInt(dataIndiceID);
    }
    return indice;
}

const setSrc = (src: string, idElement: string) => {
    const cardImgElement = document.getElementById(idElement);
    if(cardImgElement && cardImgElement instanceof HTMLImageElement)
        cardImgElement.src = src;
}

const addEntryAnimation = (indice : number) => {
    const divElementID = getDivElementID(indice)
    const div = document.getElementById(divElementID)
    if(div && div instanceof HTMLDivElement) {
        div.classList.add(__CSSCLASNAMES.entryAnimation);
    }
}

const voltearCartaHaciaArriba = (indice : number, tablero: Tablero) => {
    addEntryAnimation(indice);
    const imageElementID = getImageElementID(indice)
    const src = getSrc(tablero, indice);
    setTimeout(() => {
        setSrc (src, imageElementID);   
    }, 150);
}

export const handleFlipCard = (div : HTMLDivElement, tablero: Tablero) => {
    const indice = getIndice(div);
    if (!estaLaPartidaIniciada(tablero)) {
        displayWarningMessage("DebesDarleAlBotón");
    }
    else if (sePuedeVoltearLaCarta(indice, tablero)){
        displayWarningMessage("InformaciónGenérica");
        marcarCartaVolteada(indice, tablero);
        voltearCartaHaciaArriba (indice, tablero);
        guardarIndiceYCambiarEstadoTablero (indice, tablero);
        if(hayDosCartasLevantadas(tablero)) {
            actualizarParejaJugada(tablero);
        }
    }
    else {
        displayWarningMessage("YaHasVolteadoEstaCarta");
    }
}

export const restablecerAnimaciones = (tablero: Tablero) => {
    const divlist = document.getElementsByClassName(__CSSCLASNAMES.standardDiv);
    // Si es la primera vez, no hace falta reiniciar animaciones, solo se desbloquea el cursor not-allowed
    if(tablero.estadoPartida === "PartidaNoIniciada") {
        for(let i = 0 ; i < divlist.length; i++) {
            divlist[i].className = __CSSCLASNAMES.standardDiv;
        }
    }
    // Si ya se ha jugado, se hace la animación de flip para voltear y se restablecen las cartas solo encontradas
    else {
        for(let i = 0 ; i < divlist.length; i++) {
            if(tablero.cartas[i].encontrada === true){
                divlist[i].classList.add(__CSSCLASNAMES.exitAnimation);
                setTimeout(() => {
                    // Cuando termina la animación empiezan con la clase estandar
                    divlist[i].className = __CSSCLASNAMES.standardDiv;
                }, 380);
            }
        }
    }
}

export const mostrarCartasBocaAbajo = () => {
    const imagelist = document.getElementsByClassName(__CSSCLASNAMES.standardImage);
        for(let i = 0 ; i < imagelist.length; i++) {
        (imagelist[i] as HTMLImageElement).src = __CONSTANTES.srcBackCard;
        (imagelist[i] as HTMLImageElement).style.backgroundColor = "white";
    }
}

export const iniciarPartidaUI = (tablero: Tablero) => {
    restablecerAnimaciones(tablero);
    mostrarCartasBocaAbajo();
    displayWarningMessage("InformaciónGenérica");
}

export const iniciaPartida = (tablero: Tablero): void => {
    iniciarPartidaUI(tablero);
    barajarCartas(tablero.cartas);
    tablero.restablecerEncontradasYVolteadas();
    tablero.borrarIndices();
    tablero.borrarIntentos();
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    mostrarIntentos();
};

const displayWarningMessage = (display : WarningMessage) => {
    const warningMessageElement = document.getElementById("warning-message");
    if(warningMessageElement && warningMessageElement instanceof HTMLParagraphElement) {
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
                warningMessageElement.innerHTML = "🎉 ¡Has ganado! ¿Podrías hacerlo con menos intentos?";
                warningMessageElement.style.backgroundColor = "#FFA5B5";
                break;
            case "InformaciónGenérica":
                warningMessageElement.innerHTML = "¡Encuentra todas las parejas! 🦁🐔🐶🦉🐝🐷";
                warningMessageElement.style.backgroundColor = "#E6F4F1";
                break;
        }
    }
}