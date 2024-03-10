import {
    partida
} from './modelo';

import {
    mePlanto,
    queHubieraPasado,
    dameCarta,
} from './motor';


document.addEventListener("DOMContentLoaded", partida.iniciarPartida);

export const botonNuevaPartida = document.getElementById("boton-nueva-partida");
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined
        && botonNuevaPartida instanceof HTMLButtonElement) {
            botonNuevaPartida.addEventListener("click", partida.iniciarPartida);
}

export const botonPlantarme = document.getElementById("boton-plantarme");
    if (botonPlantarme !== null && botonPlantarme !== undefined
        && botonPlantarme instanceof HTMLButtonElement) {
        botonPlantarme.addEventListener("click", mePlanto);
}

export const botonHubieraPasado = document.getElementById("boton-proxima-carta");
    if (botonHubieraPasado !== null && botonHubieraPasado !== undefined
        && botonHubieraPasado instanceof HTMLButtonElement) {
        botonHubieraPasado.addEventListener("click", queHubieraPasado);
}

export const botonDameCarta = document.getElementById("boton-dame-carta");
if (botonDameCarta !== null && botonDameCarta !== undefined
    && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.addEventListener("click", dameCarta);
}