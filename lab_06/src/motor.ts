import {
    Estado,
    partida,
} from './modelo';

export const dameNumeroAleatorio = () : number => {
    return Math.ceil(Math.random() * 10);
}

export const dameNumeroDeCarta = (numeroAleatorio : number) : number => {
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

export const dameLosPuntosDeLaCarta = (numeroDeCarta : number) : number => {
    if (numeroDeCarta <= 7) {
        return numeroDeCarta;
    } else {
        return 0.5;
    }
}

export const sumaPuntos = (numeroDeCarta : number) : number => {
    return partida.puntos + numeroDeCarta
}

export const actualizarPuntos = (nuevosPuntos : number) => {
    partida.puntos = nuevosPuntos;
}

export const registrarJugadas = (puntosAnotados : number) => {
    partida.jugadas.push (puntosAnotados);
}

export const generarMensajePointsInfo = () : string => {
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

export const generarMensajePoints = () : string =>  {
    return "PUNTUACIÓN: " + partida.puntos.toString();
}

export const restablecerVariables = () : void => {
    partida.estado = Estado.JUGANDO;
    partida.puntos = 0;
}

export const vaciaJugadasAnteriores = () : void => {
    partida.jugadas = [];
}

export const obtenerIdCartaHistorial = () : string => {
    return `card${partida.jugadas.length}`;
}