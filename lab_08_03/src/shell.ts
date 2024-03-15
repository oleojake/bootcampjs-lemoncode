import {tablero} from "./modelo"
import {handleFlipCard, iniciaPartida} from "./ui"

const board = document.getElementById("board");
if (board && board instanceof HTMLDivElement) {
    for(let i = 0; i < board.children.length; i++ ){
        if (board.children[i] && board.children[i] instanceof HTMLDivElement) {
            board.children[i].addEventListener("click", () => handleFlipCard(board.children[i] as HTMLDivElement, tablero));
        }
    }
}

const botonEmpezarPartida = document.getElementById("boton-empezar-partida");
if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
    botonEmpezarPartida.addEventListener("click", () => iniciaPartida(tablero));
}