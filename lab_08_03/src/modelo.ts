import {__SRCIMAGENES} from "./constantes"

interface InfoCarta {
    idFoto: number;
    imagen: string;
};

const infoCartas : InfoCarta[] = [
    {idFoto: 1, imagen: __SRCIMAGENES.srcFotoId1},
    {idFoto: 2, imagen: __SRCIMAGENES.srcFotoId2},
    {idFoto: 3, imagen: __SRCIMAGENES.srcFotoId3},
    {idFoto: 4, imagen: __SRCIMAGENES.srcFotoId4},
    {idFoto: 5, imagen: __SRCIMAGENES.srcFotoId5},
    {idFoto: 6, imagen: __SRCIMAGENES.srcFotoId6},
]

export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    let arrayCartas : Carta [] = [];
    for ( let i = 0 ; i < infoCartas.length ; i++){
        arrayCartas[i] = crearCartaInicial (infoCartas[i].idFoto, infoCartas[i].imagen);
        arrayCartas[i + infoCartas.length] = crearCartaInicial (infoCartas[i].idFoto, infoCartas[i].imagen);
    }
    return arrayCartas
};


export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
| "PartidaNoIniciada"
| "CeroCartasLevantadas"
| "UnaCartaLevantada"
| "DosCartasLevantadas"
| "PartidaCompleta";


export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    intentos: number;
    indiceCartaVolteadaA: number;
    indiceCartaVolteadaB: number;
    cambiarEstadoTablero (estado : EstadoPartida) : void;
    sumarIntentos () : void;
    borrarIndices () : void;
    borrarIntentos () : void;
    restablecerEncontradasYVolteadas() : void
}

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
    intentos: 0,
    indiceCartaVolteadaA: -1,
    indiceCartaVolteadaB: -1,
    cambiarEstadoTablero(estado){
        this.estadoPartida = estado;
    },
    sumarIntentos() {
        this.intentos += 1;
    },
    borrarIndices() {
        this.indiceCartaVolteadaA = -1;
        this.indiceCartaVolteadaB = -1;
    },
    borrarIntentos() {
        this.intentos = 0;
    },
    restablecerEncontradasYVolteadas() {
        for(let i = 0 ; i < this.cartas.length; i++) {
            this.cartas[i].estaVuelta = false;
            this.cartas[i].encontrada = false;
        }
    },
});

export let tablero: Tablero = crearTableroInicial();