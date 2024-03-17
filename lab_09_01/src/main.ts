import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TicketFinal, TotalPorTipoIva } from "./modelo";
import { calculoLineasTicket } from "./lineas-ticket.helper";
import { calculoTotales } from "./totales.helper";
import { calculoDesglosePorIVA } from "./desglose-iva.helper";

const productos: LineaTicket[] = [
    {
        producto: {
            nombre: "Legumbres",
            precio: 2,
            tipoIva: "general",
        },
        cantidad: 2,
    },
    {
        producto: {
            nombre: "Perfume",
            precio: 20,
            tipoIva: "general",
        },
        cantidad: 3,
    },
    {
        producto: {
            nombre: "Leche",
            precio: 1,
            tipoIva: "superreducidoC",
        },
        cantidad: 6,
    },
    {
        producto: {
            nombre: "Lasaña",
            precio: 5,
            tipoIva: "superreducidoA",
        },
        cantidad: 1,
    },
];


const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {

    const calculoLineas : ResultadoLineaTicket[] = calculoLineasTicket(lineasTicket);
    const calculosTotales : ResultadoTotalTicket = calculoTotales(calculoLineas)
    const calculoDesgloseIVA : TotalPorTipoIva[] = calculoDesglosePorIVA(calculoLineas);

    const ticketFinal : TicketFinal = {
        lineas: calculoLineas,
        total: calculosTotales,
        desgloseIva: calculoDesgloseIVA
    }

    return ticketFinal
};

console.log(calculaTicket(productos));