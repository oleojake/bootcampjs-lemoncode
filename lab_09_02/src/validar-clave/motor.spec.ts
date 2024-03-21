import { __COMMON_PASSWORDS } from "./constantes";
import { validarClave } from "./motor";


describe("validarClave", () => {

    it.each([
        ["pablo", "hola", false],
        ["pablo", "HOLA", false],
        ["pablo", "hola123", false],
        ["pablo", "HOLA123", false],
        ["pablo", "123", false],
        ["pablo", "hola12@", false],
        ["pablo", "@@@", false],
        ["pablo", "pablo", false],
        ["pablo", "PABLO", false],
        ["pablo", "12paBlo3ada", false],
        ["pablo", "Dolyadm678in@", true],

    ])
    ("Para el usuario %s y la clave %s debería devolver la validacion: %s", (nombreUsuario, clave, resultado) => {
    expect(validarClave(nombreUsuario, clave, __COMMON_PASSWORDS).esValida).toBe(resultado);
    });
});