export const enum Estado {
    HA_GANADO = "HA_GANADO",
    HA_PERDIDO = "HA_PERDIDO",
    HA_PLANTADO = "HA_PLANTADO",
    QUE_HUBIERA_PASADO = "QUE_HUBIERA_PASADO",
    JUGANDO = "JUGANDO"
}

interface Partida {
    estado: Estado,
    puntos : number,
    jugadas : number[]
    iniciarPartida() : void,
    setEstado(estado: Estado) : void,
}

export const partida : Partida = {
    estado: Estado.JUGANDO,
    puntos: 0,
    jugadas: [],
    iniciarPartida() {
        //nuevaPartidaUI();
        //nuevaPartidaMotor();
    },
    setEstado (newEstado : Estado) {
        partida.estado = newEstado;
    }
}  


export const dameNumeroDeCarta = (numeroAleatorio : number) : number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio +2;
    }
    return numeroAleatorio;
}

export const dameNumeroAleatorio = () => {
    return Math.ceil(Math.random() * 10);
}

export const dameLosPuntosDeLaCarta = (numeroDeCarta : number) : number => {
    if (numeroDeCarta <= 7) {
        return numeroDeCarta;
    } else {
        return 0.5;
    }
}

export const revisarPartida = () => {
    if(partida.estado !== "QUE_HUBIERA_PASADO"){
        if (partida.puntos > 7.5) {
            partida.setEstado(Estado.HA_PERDIDO);
            //desactivaDameCarta();
            }
        if (partida.puntos === 7.5){
            partida.setEstado(Estado.HA_GANADO);
            //desactivaDameCarta();
        }
    }
    //actualizaPuntuacion();
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