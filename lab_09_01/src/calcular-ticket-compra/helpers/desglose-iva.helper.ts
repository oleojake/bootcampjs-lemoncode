import { ResultadoLineaTicket, TipoIva, TotalPorTipoIva } from "../modelo";
import { calculoDiferenciaIVA } from "../motor";

const upsert = (desglosePorIVA : TotalPorTipoIva[], tipoIva : TipoIva, acc : number) => {
    const index = desglosePorIVA.findIndex(e => e.tipoIva === tipoIva);
    (index > -1)
    ? desglosePorIVA[index].cuantia = acc
    : desglosePorIVA.push({tipoIva:tipoIva,cuantia:Number(acc.toFixed(2))})
}

export const calculoDesglosePorIVA = (resultadoLineasTicket: ResultadoLineaTicket[]) : TotalPorTipoIva[] => {
    let  accGeneral= 0, accReducido = 0, accSuperreducidoA = 0, accSuperreducidoB = 0
    const desglosePorIVA : TotalPorTipoIva [] = [];

    for( let i = 0; i < resultadoLineasTicket.length; i++) {
        switch(resultadoLineasTicket[i].tipoIva){
            case "general":
                accGeneral += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, accGeneral);
                break;
            case "reducido":
                accReducido += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, accReducido);
                break;
            case "sinIva":
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, 0);
                break;
            case "superreducidoA":
                accSuperreducidoA += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, accSuperreducidoA);
                break;
            case "superreducidoB":
                accSuperreducidoB += calculoDiferenciaIVA(resultadoLineasTicket[i].precioConIva,resultadoLineasTicket[i].precionSinIva);
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, accSuperreducidoB);
                break;
            case "superreducidoC":
                upsert(desglosePorIVA, resultadoLineasTicket[i].tipoIva, 0);
                break;
        }
    }
    
    return desglosePorIVA;
}
