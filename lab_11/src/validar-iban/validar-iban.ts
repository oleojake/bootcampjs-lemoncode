import { __NOMBRE_DEL_BANCO } from "./constantes";
import { datosIBANSucursal } from "./validar-iban.modelo";

export const estaBienFormadoElIBAN = (IBAN : string) : boolean => {
    const regex =/^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;
    console.log("Está bien formado: " + IBAN + " " + regex.test(IBAN));
    return regex.test(IBAN);
}

export const esIBANvalido = (IBAN : string) : boolean => {
    /*const ibantools = require('ibantools');
    console.log(ibantools.isValidIBAN(IBAN));
    console.log(ibantools.validateIBAN('NL91ABNA0517164300'));*/

    console.log("Es Válido : " + IBAN + " ");
    return true;
}

const asignarNombreDelBanco = (codigoBanco : string, datosExtraidos : datosIBANSucursal)  => {
    const nombreDelBanco = __NOMBRE_DEL_BANCO.get(codigoBanco);
    if(nombreDelBanco){
        datosExtraidos.banco = nombreDelBanco;
    }
}

export const extraeDatosSucursalIBAN = (IBAN : string) : datosIBANSucursal  => {
    let datosExtraidos : datosIBANSucursal = {
        banco: "No encontrado",
        codigo_sucursal: "No encontrado",
        digito_control: "No encontrado",
        numero_cuenta: "No encontrado"
    }

    const regex =/^[A-Z]{2}\d{2}(\s|-)?(?<banco>\d{4})(\s|-)?(?<sucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/;
    const coincidencia = regex.exec(IBAN);

    if(coincidencia){
        const { banco , sucursal, digitoControl, numeroCuenta } = coincidencia.groups as any;
        asignarNombreDelBanco(banco, datosExtraidos)
        datosExtraidos.codigo_sucursal = sucursal;
        datosExtraidos.digito_control = digitoControl;
        datosExtraidos.numero_cuenta = numeroCuenta;
    }

    return datosExtraidos;
}