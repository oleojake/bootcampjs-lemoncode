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
    jugadas : number[],
    setEstado(estado: Estado) : void,
}

export const partida : Partida = {
    estado: Estado.JUGANDO,
    puntos: 0,
    jugadas: [],
    setEstado (newEstado : Estado) {
        partida.estado = newEstado;
    }
}