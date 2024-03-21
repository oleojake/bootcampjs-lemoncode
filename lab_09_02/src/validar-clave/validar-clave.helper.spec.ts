import { ValidacionClave } from "./modelo";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validar-clave.helper";
import {__COMMON_PASSWORDS} from "./constantes";


describe("tieneMayusculasYMinusculas", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave debe de tener mayúsculas y minúsculas"};
    it.each([
        ["pablo", claveFalse],
        ["PABLO", claveFalse],
        ["Pablo", claveTrue],
    ])
    ("Para la clave %s debería devolver la validacion: %s", (clave, resultado : ValidacionClave) => {
    expect(tieneMayusculasYMinusculas(clave)).toStrictEqual(resultado);
    });
});

describe("tieneNúmeros", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave debe de tener números"};
    it.each([
        ["pablo", claveFalse],
        ["1231", claveTrue],
        ["pablo1213", claveTrue],
    ])
    ("Para la clave %s debería devolver la validacion: %s", (clave, resultado : ValidacionClave) => {
    expect(tieneNumeros(clave)).toStrictEqual(resultado);
    });
});

describe("tieneCaracteresEspeciales", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave debe de tener caracteres especiales"};
    it.each([
        ["pablo", claveFalse],
        ["pablo1213", claveFalse],
        ["pablo@", claveTrue],
    ])
    ("Para la clave %s debería devolver la validacion: %s", (clave, resultado : ValidacionClave) => {
    expect(tieneCaracteresEspeciales(clave)).toStrictEqual(resultado);
    });
});

describe("tieneLongitudMinima", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave debe de tener una longitud mínima de 8 caracteres"};
    it.each([
        ["pablo", claveFalse],
        ["pablopmg", claveTrue],
        ["pablomarzal", claveTrue],
    ])
    ("Para la clave %s debería devolver la validacion: %s", (clave, resultado : ValidacionClave) => {
    expect(tieneLongitudMinima(clave)).toStrictEqual(resultado);
    });
});

describe("tieneNombreUsuario", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave no debe tener el nombre del usuario"};
    it.each([
        ["pablo", "pablo", claveFalse],
        ["PABLO", "pablo", claveFalse],
        ["Pablo", "pablo", claveFalse],
        ["pablo", "PABLO", claveFalse],
        ["PABLO", "PABLO", claveFalse],
        ["Pablo", "PABLO", claveFalse],
        ["Pablo", "aaPABLOaa", claveFalse],
        ["Pablo", "aapabloaa", claveFalse],
        ["Pablo", "aaaPaBloaaa", claveFalse],
        ["pablo", "p.ablo", claveTrue],
    ])
    ("Para el usuario %s y la clave %s debería devolver la validacion: %s", (nombreUsuario, clave, resultado : ValidacionClave) => {
    expect(tieneNombreUsuario(nombreUsuario,clave)).toStrictEqual(resultado);
    });
});

describe("tienePalabrasComunes", () => {
    const claveTrue : ValidacionClave = {esValida:true};
    const claveFalse : ValidacionClave = {esValida:false, error:"La clave no debe de contener palabras comunes"};
    it.each([
        ["pablo", claveTrue],
        ["pablopmg", claveTrue],
        ["pablomarzal", claveTrue],
        ["admin", claveFalse],
        ["2313adminsdada", claveFalse],
        ["aDmiNdasa", claveFalse],
    ])
    ("Para el usuario %s y la clave %s debería devolver la validacion: %s", (clave, resultado : ValidacionClave) => {
    expect(tienePalabrasComunes(clave, __COMMON_PASSWORDS)).toStrictEqual(resultado);
    });
});