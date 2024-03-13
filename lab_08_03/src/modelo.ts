interface InfoCarta {
    idFoto: number;
    imagen: string;
};

const infoCartas : InfoCarta[] = [
    {
        idFoto: 1,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
        idFoto: 2,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
        idFoto: 3,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
    {
        idFoto: 4,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
    },
    {
        idFoto: 5,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    },
    {
        idFoto: 6,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
    },
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
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
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
    cambiarEstadoTablero(estado){
        this.estadoPartida = estado;
    },
    sumarIntentos() {
        this.intentos += 1;
    },
    borrarIndices() {
        this.indiceCartaVolteadaA = undefined;
        this.indiceCartaVolteadaB = undefined;
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