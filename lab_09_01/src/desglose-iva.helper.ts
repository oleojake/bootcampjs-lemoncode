
import { ResultadoLineaTicket, TipoIva, TotalPorTipoIva } from "./modelo";
import { calculoDiferenciaIVA } from "./motor";

// Función Auxiliar
const almacenarTiposIVADeEstaCompra = (resultadoLineasTicket: ResultadoLineaTicket[]): Set<TipoIva> => {
    const setTiposDeIvaEnElTicket = new Set<TipoIva>();
    for( let i = 0; i < resultadoLineasTicket.length; i++) {
        setTiposDeIvaEnElTicket.add(resultadoLineasTicket[i].tipoIva);
    }

    return setTiposDeIvaEnElTicket
}

// Función Auxiliar
const sumatorioImportesDeCadaIVA = (resultadoLineasTicket: ResultadoLineaTicket[], setTiposDeIvaEnElTicket: Set<TipoIva>) : TotalPorTipoIva[] => {
    const sumatorioPorIVA : TotalPorTipoIva [] = []
    for (let item of setTiposDeIvaEnElTicket) {
        const calculoParaUnIva : number = resultadoLineasTicket.reduce(
            (acc, lineaTicket) => {
                const calculoDiferencia = calculoDiferenciaIVA(lineaTicket.precioConIva,lineaTicket.precionSinIva)
                return (lineaTicket.tipoIva === item) ? acc + calculoDiferencia : acc
            },
            0
        );

        sumatorioPorIVA.push({tipoIva:item, cuantia: calculoParaUnIva})
    }
    return sumatorioPorIVA;
}

// Función Principal
export const calculoDesglosePorIVA = (resultadoLineasTicket: ResultadoLineaTicket[]) : TotalPorTipoIva[] => {
    
    const setTiposDeIvaEnElTicket = almacenarTiposIVADeEstaCompra (resultadoLineasTicket);
    const desglosePorIVA = sumatorioImportesDeCadaIVA(resultadoLineasTicket, setTiposDeIvaEnElTicket);

    return desglosePorIVA
}
