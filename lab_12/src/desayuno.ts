import "./style.css";

interface Reserva {
    tipoHabitacion: "standard" | "suite";
    desayuno: boolean;
    pax: number;
    noches: number;
}

const reservas : Reserva[] = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3,
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4,
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1,
    },
];

class ClienteReserva {
    reservas : Reserva [];
    precioPorPersona : number
    precioDesayuno: number;

    constructor (reservas : Reserva []) {
        this.reservas = reservas;
        this.precioPorPersona = 40;
        this.precioDesayuno = 15;
    }

    obtenerPrecioPorTipoHabitacion = (tipoHabitacion : string): number => {
        switch(tipoHabitacion){
            case "standard":
                return 100;
            case "suite":
                return 150;
            default:
                return 0;
        }
    }


    get subtotal() {
        return Number(this.reservas.reduce((acc, reserva) => {
            const precioSinDesayuno =  acc + reserva.noches * this.obtenerPrecioPorTipoHabitacion(reserva.tipoHabitacion) + (reserva.pax - 1) * this.precioPorPersona;
            return (reserva.desayuno)
                ? precioSinDesayuno + this.precioDesayuno * reserva.pax
                : precioSinDesayuno;
        },0).toFixed(2));
    }

    get total() {
        return Number((this.subtotal * 1.21).toFixed(2));
    }
}

class ClienteParticular extends ClienteReserva {

    constructor (reservas : Reserva []) {
        super(reservas);
    }

}

const totalesClienteParticular = new ClienteParticular(reservas);
console.log(totalesClienteParticular);
console.log(totalesClienteParticular.subtotal);
console.log(totalesClienteParticular.total);

class ClienteOperador extends ClienteReserva {
    descuento : number;

    constructor (reservas : Reserva []) {
        super(reservas);
        this.descuento = 15;
    }

    obtenerPrecioPorTipoHabitacion = (tipoHabitacion : string): number => {
        switch(tipoHabitacion){
            case "standard":
                return 100;
            case "suite":
                return 100;
            default:
                return 0;
        }
    }

    get subtotal() {
        return Number(((super.subtotal * (100 - this.descuento)) / 100).toFixed(2));
    }
    
}

const totalesClienteOperador = new ClienteOperador(reservas);
console.log(totalesClienteOperador);
console.log(totalesClienteOperador.subtotal);
console.log(totalesClienteOperador.total);
