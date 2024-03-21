import { LineaTicket, ResultadoLineaTicket } from "../modelo";
import { calculoLineasTicket } from "./lineas-ticket.helper";



describe("calculoLineasTicket", () => {
    it("Debería devolver un objeto de ResultadoLineaTicket tras recibir los productos en formato LineaTicket", () => {
        // Arrange

        const productosTest: LineaTicket[] = [
            {
                producto: {
                    nombre: "Iphone 14",
                    precio: 1400,
                    tipoIva: "general",
                },
                cantidad: 2,
            }
        ]

        // Act
        const resultadoLinea : ResultadoLineaTicket [] = [{
            nombre: "Iphone 14",
            cantidad: 2,
            precionSinIva: 2800,
            tipoIva: "general",
            precioConIva: 3388,
        }]

        // Assert
        expect(calculoLineasTicket(productosTest)).toStrictEqual(resultadoLinea);
    });
});