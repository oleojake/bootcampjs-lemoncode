import { calcularPrecioConIva, calculoDiferenciaIVA } from "./motor";
import { TipoIva } from "./modelo";



describe("calcularPrecioConIva", () => {
    const IVAgeneral : TipoIva = "general";
    const IVAreducido : TipoIva = "reducido";
    const sinIVA : TipoIva = "sinIva";
    const IVAsuperreducidoA : TipoIva = "superreducidoA";
    const IVAsuperreducidoB : TipoIva = "superreducidoB";
    const IVAsuperreducidoC : TipoIva = "superreducidoC";
    it.each([
        [10, IVAgeneral, 12.1],
        [10, IVAreducido, 11],
        [10, sinIVA, 10],
        [10, IVAsuperreducidoA, 10.5],
        [10, IVAsuperreducidoB, 10.4],
        [10, IVAsuperreducidoC, 10],
    ])
    ("Para el precio %s y el tipoIVA %s debería devolver %s", (precio, tipoIva, resultado) => {
        expect(calcularPrecioConIva(precio, tipoIva)).toBe(resultado)
    });
});

describe("calculoDiferenciaIVA", () => {
    it.each([
        [12.1, 10, 2.1],
        [11, 10, 1],
    ])
    ("Para el importe con IVA: %s y el sinIVA: %s la diferencia es %s", (precioconIVA, preciosinIVA, resultado) => {
        expect(calculoDiferenciaIVA(precioconIVA, preciosinIVA)).toBe(resultado)
    });

});