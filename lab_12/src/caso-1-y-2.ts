import "./style.css";

interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
}

const reservas : Reserva[]= [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3,
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4,
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1,
    },
];

class ClienteParticular {
    reservas : Reserva [];
    precioNocheStandar : number;
    precioNocheSuite : number;
    precioPorPersona : number

    constructor (reservas : Reserva []) {
        this.reservas = reservas;
        this.precioNocheStandar = 100;
        this.precioNocheSuite = 150;
        this.precioPorPersona = 40;
    }

    get subtotal() {
        let acc = 0;
        for (let i = 0 ; i < this.reservas.length; i++) {
            if (this.reservas[i].tipoHabitacion === "standard"){
                acc += this.precioNocheStandar * this.reservas[i].noches + (this.precioPorPersona * this.reservas[i].pax);
            } else if(this.reservas[i].tipoHabitacion === "suite"){
                acc += this.precioNocheSuite * this.reservas[i].noches + (this.precioPorPersona * this.reservas[i].pax);
            }
        }
        return acc;
    }

    get total() {
        return this.subtotal * 1.21;
    }
}

const totalesClienteParticular = new ClienteParticular(reservas);
console.log(totalesClienteParticular);
console.log(totalesClienteParticular.subtotal);
console.log(totalesClienteParticular.total);

class ClienteOperador extends ClienteParticular {
    descuento : number;

    constructor (reservas : Reserva []) {
        super(reservas);
        this.descuento = 15;
        this.precioNocheStandar = 100;
        this.precioNocheSuite = 100;
    }

    get subtotal() {
        return (super.subtotal * (100 - this.descuento)) / 100
    }
    
}

const totalesClienteOperador = new ClienteOperador(reservas);
console.log(totalesClienteOperador);
console.log(totalesClienteOperador.subtotal);
console.log(totalesClienteOperador.total);