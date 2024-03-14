import {tablero} from "./modelo"
import {handleFlipCard, iniciaPartida} from "./ui"

const Container0 = document.getElementById("container-0");
if (Container0 && Container0 instanceof HTMLDivElement) {
    Container0.addEventListener("click", () => handleFlipCard(Container0, tablero));
}

const Container1 = document.getElementById("container-1");
if (Container1 && Container1 instanceof HTMLDivElement) {
    Container1.addEventListener("click", () => handleFlipCard(Container1, tablero));
}

const Container2 = document.getElementById("container-2");
if (Container2 && Container2 instanceof HTMLDivElement) {
    Container2.addEventListener("click", () => handleFlipCard(Container2, tablero));
}

const Container3 = document.getElementById("container-3");
if (Container3 && Container3 instanceof HTMLDivElement) {
    Container3.addEventListener("click", () => handleFlipCard(Container3, tablero));
}

const Container4 = document.getElementById("container-4");
if (Container4 && Container4 instanceof HTMLDivElement) {
    Container4.addEventListener("click", () => handleFlipCard(Container4, tablero));
}

const Container5 = document.getElementById("container-5");
if (Container5 && Container5 instanceof HTMLDivElement) {
    Container5.addEventListener("click", () => handleFlipCard(Container5, tablero));
}

const Container6 = document.getElementById("container-6");
if (Container6 && Container6 instanceof HTMLDivElement) {
    Container6.addEventListener("click", () => handleFlipCard(Container6, tablero));
}

const Container7 = document.getElementById("container-7");
if (Container7 && Container7 instanceof HTMLDivElement) {
    Container7.addEventListener("click", () => handleFlipCard(Container7, tablero));
}

const Container8 = document.getElementById("container-8");
if (Container8 && Container8 instanceof HTMLDivElement) {
    Container8.addEventListener("click", () => handleFlipCard(Container8, tablero));
}

const Container9 = document.getElementById("container-9");
if (Container9 && Container9 instanceof HTMLDivElement) {
    Container9.addEventListener("click", () => handleFlipCard(Container9, tablero));
}

const Container10 = document.getElementById("container-10");
if (Container10 && Container10 instanceof HTMLDivElement) {
    Container10.addEventListener("click", () => handleFlipCard(Container10, tablero));
}

const Container11 = document.getElementById("container-11");
if (Container11 && Container11 instanceof HTMLDivElement) {
    Container11.addEventListener("click", () => handleFlipCard(Container11, tablero));
}

const botonEmpezarPartida = document.getElementById("boton-empezar-partida");
if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
    botonEmpezarPartida.addEventListener("click", () => iniciaPartida(tablero));
}