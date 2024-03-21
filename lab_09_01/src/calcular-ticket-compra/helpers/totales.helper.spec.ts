import {ResultadoLineaTicket } from "../modelo";
import { calculoTotalesConIVA, calculoTotalesIVA, calculoTotalesSinIVA } from "./totales.helper";

describe("calculoTotalesConIVA", () => {
    it("Debería devolver la suma correcta del precio con IVA", () => {
        // Arrange

        const productosTest: ResultadoLineaTicket[] = [
            {
                nombre: "Turron", cantidad: 2, precionSinIva: 18, tipoIva: "reducido", precioConIva: 19.8
            },
            {
                nombre: "Juguete", cantidad: 3, precionSinIva: 60, tipoIva: "general", precioConIva: 72.60
            }
        ]

        // Act
        const resultado = productosTest[0].precioConIva + productosTest[1].precioConIva;

        // Assert
        expect(calculoTotalesConIVA(productosTest)).toBe(resultado);
    });
});


describe("calculoTotalesSinIVA", () => {
    it("Debería devolver la suma correcta del precio sin IVA", () => {
        // Arrange

        const productosTest: ResultadoLineaTicket[] = [
            {
                nombre: "Turron", cantidad: 2, precionSinIva: 18, tipoIva: "reducido", precioConIva: 19.8
            },
            {
                nombre: "Juguete", cantidad: 3, precionSinIva: 60, tipoIva: "general", precioConIva: 72.60
            }
        ]

        // Act
        const resultado = productosTest[0].precionSinIva + productosTest[1].precionSinIva;

        // Assert
        expect(calculoTotalesSinIVA(productosTest)).toBe(resultado);
    });
});

describe("calculoTotalesIVA", () => {
    it("Debería devolver la diferencia de IVAS correcta", () => {
        // Arrange

        const productosTest: ResultadoLineaTicket[] = [
            {
                nombre: "Turron", cantidad: 2, precionSinIva: 18, tipoIva: "reducido", precioConIva: 19.8
            },
            {
                nombre: "Juguete", cantidad: 3, precionSinIva: 60, tipoIva: "general", precioConIva: 72.60
            }
        ]

        // Act
        const totalesConIVA = productosTest[0].precioConIva + productosTest[1].precioConIva;
        const totalesSinIVA = productosTest[0].precionSinIva + productosTest[1].precionSinIva;
        const resultado = Number((totalesConIVA - totalesSinIVA).toFixed(2));

        // Assert
        expect(calculoTotalesIVA(productosTest)).toBe(resultado);
    });
});