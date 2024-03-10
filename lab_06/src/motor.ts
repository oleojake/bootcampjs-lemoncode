import {
    Estado,
    partida,
} from './modelo';

import {
    borraCartaHistorial,
    imprimeMensajePointsInfo,
    imprimeMensajePoints,
    desactivaDameCarta,
    mostrarCarta,
    muestraBotonQueHubieraPasado,
    muestraCartaEnHistorial
} from './ui';

const dameNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
}

const dameNumeroDeCarta = (numeroAleatorio : number) : number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio +2;
    }
    return numeroAleatorio;
}

export const dameSrcCarta = (carta : number) : string => {
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

const dameLosPuntosDeLaCarta = (numeroDeCarta : number) : number => {
    if (numeroDeCarta <= 7) {
        return numeroDeCarta;
    } else {
        return 0.5;
    }
}

const sumaPuntos = (numeroDeCarta : number) : number => {
    return partida.puntos + numeroDeCarta
}

const actualizarPuntos = (nuevosPuntos : number) => {
    partida.puntos = nuevosPuntos;
}

const registrarJugadas = (puntosAnotados : number) => {
    partida.jugadas.push (puntosAnotados);
}

const generarMensajePointsInfo = () : string => {
    let mensaje = "";
    switch (partida.estado) {
        case "HA_GANADO":
            mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena!";
        break;

        case "HA_PLANTADO":
            if (partida.puntos <= 7 && partida.puntos >= 6)
                mensaje = "🤏 Casi casi...";
            else if (partida.puntos >= 5)
                mensaje = "💩 Te ha entrado el canguelo eh?";
            else if (partida.puntos <= 4)
                mensaje = "🥱 Has sido muy conservador";
        break;

        case "HA_PERDIDO":
            mensaje = `💀 ¡GAME OVER, te has pasado!`;
        break;

        case "QUE_HUBIERA_PASADO":
            if (partida.puntos > 7.5)
                mensaje = `💀 ¡Te hubieras pasado, con ${partida.puntos} puntos!`;
            else
                mensaje = `🍀 ¡Lástima, Hubieras llegado a ${partida.puntos} puntos!`;
        break;

        case "JUGANDO":
            mensaje = "ℹ️ Cartas del 1-7 y las figuras 0.5 puntos"          
        break;
    }
    return mensaje;
}

const generarMensajePoints = () : string =>  {
    return "PUNTUACIÓN: " + partida.puntos.toString();
}

const actualizaPuntuacion = () => {
    const mensajePoints = generarMensajePoints();
    imprimeMensajePoints (mensajePoints);
    const mensajePointsInfo = generarMensajePointsInfo ();
    imprimeMensajePointsInfo(mensajePointsInfo);
}

export const revisarPartida = () => {  
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

// BUCLE PRINCIPAL
export const dameCarta = () : void => {
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

const restablecerVariables = () => {
    partida.estado = Estado.JUGANDO;
    partida.puntos = 0;
}

const vaciaJugadasAnteriores = () => {
    partida.jugadas = [];
}

// BORRAR HISTORIAL
const borrarHistorial = () : void => {
    vaciaJugadasAnteriores();
    for (let i = 1; i <= 8; i++){
        borraCartaHistorial (`card${i}`);
    }
}

// NUEVA PARTIDA MOTOR
export const nuevaPartidaMotor = () => {
    restablecerVariables();
    borrarHistorial();
    actualizaPuntuacion();  
}

// QUE HUBIERA PASADO
export const queHubieraPasado = () => {
    partida.estado = Estado.QUE_HUBIERA_PASADO;
    dameCarta(); 
    
}

export const mePlanto = () : void => {
    partida.estado = Estado.HA_PLANTADO;
    const mensajePointsInfo = generarMensajePointsInfo();
    imprimeMensajePointsInfo(mensajePointsInfo);
    muestraBotonQueHubieraPasado();
    desactivaDameCarta();
}