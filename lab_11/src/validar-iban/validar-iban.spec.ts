import { estaBienFormadoElIBAN } from "./validar-iban";

describe("estaBienFormadoElIBAN", () => {
    test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES66210004184012345678916", false],
    ["6621000418401234567891", false],
    ["546621000418401234567891", false],
    ["ES21.1465.0100.72.2030876293", false],
    ["ES662100041840123456789", false],
    ])(
    "Deberia devolver para el IBAN %s el valor %s",
    (valor: string, expected: boolean) => {
    expect(estaBienFormadoElIBAN(valor)).toBe(expected);
    }
    );
});

