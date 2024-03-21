import { ResultadoLineaTicket, TotalPorTipoIva } from "../modelo";
import { calculoDiferenciaIVA } from "../motor";

export const calculoDesglosePorIVA = (resultadoLineasTicket: ResultadoLineaTicket[]) : TotalPorTipoIva[] => {
    let accGeneral = 0, accReducido = 0, accSuperreducidoA = 0, accSuperreducidoB = 0
    
    for( let i = 0; i < resultadoLineasTicket.length; i++) {
        switch(resultadoLineasTicket[i].tipoIva){
            case "general":
                accGeneral += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                break;
            case "reducido":
                accReducido += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                break;
            case "superreducidoA":
                accSuperreducidoA += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                break;
            case "superreducidoB":
                accSuperreducidoB += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                break;
        }
    }

    const desglosePorIVA : TotalPorTipoIva [] = [
        {tipoIva: "general", cuantia: Number(accGeneral.toFixed(2))},
        {tipoIva: "reducido", cuantia: Number(accReducido.toFixed(2))},
        {tipoIva: "sinIva", cuantia: 0},
        {tipoIva: "superreducidoA", cuantia: Number(accSuperreducidoA.toFixed(2))},
        {tipoIva: "superreducidoB", cuantia: Number(accSuperreducidoB.toFixed(2))},
        {tipoIva: "superreducidoC", cuantia: 0},
    ]

    return desglosePorIVA;
}
