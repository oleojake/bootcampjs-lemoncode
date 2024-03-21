import { ResultadoLineaTicket, TotalPorTipoIva } from "../modelo";
import { calculoDesglosePorIVA } from "./desglose-iva.helper";



describe("calculoLineasTicket", () => {
    it("Debería devolver el desglose de IVAS correcto tras recibir los productos en formato LineaTicket", () => {
        // Arrange

        const productosTest: ResultadoLineaTicket[] = [
            {
                nombre: "Juguete", cantidad: 1, precionSinIva: 5, tipoIva: "general", precioConIva: 6.05
            },
            {
                nombre: "Juguete2", cantidad: 1, precionSinIva: 10, tipoIva: "general", precioConIva: 12.10
            },
            {
                nombre: "Turron", cantidad: 1, precionSinIva: 5, tipoIva: "reducido", precioConIva: 5.5
            },
            {
                nombre: "Turron2", cantidad: 1, precionSinIva: 10, tipoIva: "reducido", precioConIva: 11
            },
            {
                nombre: "Regalo", cantidad: 1, precionSinIva: 5, tipoIva: "sinIva", precioConIva: 5
            },
            {
                nombre: "Regalo2", cantidad: 1, precionSinIva: 10, tipoIva: "sinIva", precioConIva: 10
            },
            {
                nombre: "Aceite De Oliva", cantidad: 1, precionSinIva: 5, tipoIva: "superreducidoA", precioConIva: 5.25
            },
            {
                nombre: "Aceite De Oliva2", cantidad: 1, precionSinIva: 10, tipoIva: "superreducidoA", precioConIva: 10.50
            },
            {
                nombre: "Libro", cantidad: 1, precionSinIva: 5, tipoIva: "superreducidoB", precioConIva: 5.2
            },
            {
                nombre: "Libro2", cantidad: 1, precionSinIva: 10, tipoIva: "superreducidoB", precioConIva: 10.4
            },
            {
                nombre: "Pan", cantidad: 1, precionSinIva: 5, tipoIva: "superreducidoC", precioConIva: 5
            },
            {
                nombre: "Pan2", cantidad: 1, precionSinIva: 10, tipoIva: "superreducidoC", precioConIva: 10
            },
            
        ]

        // Act
        const desglosePorIVA : TotalPorTipoIva [] = [
            {tipoIva: "general", cuantia: 3.15},
            {tipoIva: "reducido", cuantia: 1.5},
            {tipoIva: "sinIva", cuantia: 0},
            {tipoIva: "superreducidoA", cuantia: 0.75},
            {tipoIva: "superreducidoB", cuantia: 0.6},
            {tipoIva: "superreducidoC", cuantia: 0},
        ]

        // Assert
        expect(calculoDesglosePorIVA(productosTest)).toStrictEqual(desglosePorIVA);
    });
});