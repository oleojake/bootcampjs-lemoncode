import { TipoIva, LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TicketFinal, TotalPorTipoIva } from "./modelo";
import { calculoLineasTicket } from "./helpers/lineas-ticket.helper";
import { calculoTotales } from "./helpers/totales.helper";
import { calculoDesglosePorIVA } from "./helpers/desglose-iva.helper";

export const calcularPrecioConIva = (precio:number, tipoIva:TipoIva ): number => {
    switch (tipoIva){
        case "general":
            return precio * 1.21
        case "reducido":
            return precio * 1.10
        case "sinIva":
            return precio
        case "superreducidoA":
            return precio * 1.05
        case "superreducidoB":
            return precio * 1.04
        case "superreducidoC":
            return precio
        default:
            throw "No se reconoce el tipo de IVA"
    }
}

export const calculoDiferenciaIVA = (precioConIva: number, precionSinIva: number ): number => {
    return Number((precioConIva - precionSinIva).toFixed(2));
}


export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {

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