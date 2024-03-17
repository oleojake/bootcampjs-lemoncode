import { LineaTicket, ResultadoLineaTicket } from "./modelo";
import { calcularPrecioConIva } from "./motor";


export const calculoLineasTicket = (lineasTicket: LineaTicket[]) : ResultadoLineaTicket[] => {

    let ResultadoLineasTicket: ResultadoLineaTicket [] = []
        for (let i = 0; i < lineasTicket.length; i++) {
        ResultadoLineasTicket[i] = {
        nombre: lineasTicket[i].producto.nombre,
        cantidad: lineasTicket[i].cantidad,
        precionSinIva: lineasTicket[i].producto.precio,
        tipoIva: lineasTicket[i].producto.tipoIva,
        precioConIva: calcularPrecioConIva(lineasTicket[i].producto.precio,lineasTicket[i].producto.tipoIva),
        }
    }
    
    return ResultadoLineasTicket;
};