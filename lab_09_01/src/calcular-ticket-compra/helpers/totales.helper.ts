
import { ResultadoLineaTicket, ResultadoTotalTicket } from "../modelo";
import { calculoDiferenciaIVA } from "../motor";

// Función Auxiliar
export const calculoTotalesConIVA = (ResultadoLineasTicket: ResultadoLineaTicket[]): number => {
    let calculoConIva = 0;
    for(let i = 0; i < ResultadoLineasTicket.length; i++) {
        calculoConIva = calculoConIva + ResultadoLineasTicket[i].precioConIva;
    }

    return calculoConIva;
}

// Función Auxiliar
export const calculoTotalesSinIVA = (ResultadoLineasTicket: ResultadoLineaTicket[]): number => {
    let calculoSinIva = 0;
    for(let i = 0; i < ResultadoLineasTicket.length; i++) {
        calculoSinIva = calculoSinIva + ResultadoLineasTicket[i].precionSinIva
    }

    return calculoSinIva;
}

// Función Auxiliar
export const calculoTotalesIVA = (ResultadoLineasTicket: ResultadoLineaTicket[]): number => {
    let calculoIva = 0;
    for(let i = 0; i < ResultadoLineasTicket.length; i++) {
        calculoIva = calculoIva + calculoDiferenciaIVA(ResultadoLineasTicket[i].precioConIva,ResultadoLineasTicket[i].precionSinIva);
    }

    return calculoIva;
}

// Función Principal
export const calculoTotales = (ResultadoLineasTicket: ResultadoLineaTicket[]): ResultadoTotalTicket => {

    const calculoConIva: number = calculoTotalesConIVA (ResultadoLineasTicket);
    const calculoSinIva: number = calculoTotalesSinIVA (ResultadoLineasTicket);
    const calculoIva: number = calculoTotalesIVA (ResultadoLineasTicket);

    let resultadosTotales : ResultadoTotalTicket =
    {totalConIva: calculoConIva, totalSinIva: calculoSinIva, totalIva: calculoIva}

    return resultadosTotales;
}