import { __CARACTERES_ESPECIALES, __MAYUSCULAS, __MINUSCULAS, __NUMEROS } from "./constantes";
import { ValidacionClave } from "./modelo";

const devolverClaveValida = () => {
    return {esValida:true}
}

const devolverClaveNoEsValida = (mensaje : string) => {
    return {esValida:false, error:mensaje}
}

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")

    const tieneMinusculas = claveArray.some(c => __MAYUSCULAS.includes(c));
    const tieneMayusculas = claveArray.some(c => __MINUSCULAS.includes(c));

    return (tieneMinusculas && tieneMayusculas)
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave debe de tener mayúsculas y minúsculas");
};

export const tieneNumeros = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")

    const tieneNumeros = claveArray.some(c => __NUMEROS.includes(c));

    return (tieneNumeros)
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave debe de tener números")
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    
    const tieneCaracteresEspeciales = claveArray.some(c => __CARACTERES_ESPECIALES.includes(c));

    return (tieneCaracteresEspeciales)
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave debe de tener caracteres especiales")
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    return (clave.length >= 8)
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave debe de tener una longitud mínima de 8 caracteres")
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
    return (!clave.toLowerCase().includes(nombreUsuario.toLowerCase()))
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave no debe tener el nombre del usuario")
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const tienePalabrasComunes = commonPasswords.some(pwd => clave.toLowerCase().includes(pwd.toLowerCase()));

    return (!tienePalabrasComunes)
    ? devolverClaveValida()
    : devolverClaveNoEsValida("La clave no debe de contener palabras comunes")
};