import { esIBANvalido, estaBienFormadoElIBAN, extraeDatosSucursalIBAN } from "./validar-iban";
import { datosIBANSucursal } from "./validar-iban.modelo";


const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.innerHTML= `${texto}`;
    return parrafo;
};

const pintarParrafoEstaBienFormado = (estaBienFormado : boolean) => {
    const elementoInformacionIBAN = document.getElementById("informacion-iban");
    if (elementoInformacionIBAN && elementoInformacionIBAN instanceof HTMLDivElement){
        let parrafoEstaBienFormado = document.createElement("p");
        (estaBienFormado)
        ? parrafoEstaBienFormado = crearElementoParrafo ("✔️ El IBAN está bien formado")
        : parrafoEstaBienFormado = crearElementoParrafo ("❌ El IBAN NO está bien formado")
        elementoInformacionIBAN.appendChild(parrafoEstaBienFormado);
    }
}

const pintarParrafoEsValido = (esValido : boolean) => {
    const elementoInformacionIBAN = document.getElementById("informacion-iban");
    if (elementoInformacionIBAN && elementoInformacionIBAN instanceof HTMLDivElement){
        let parrafoEsValido = document.createElement("p");
        (esValido)
        ? parrafoEsValido = crearElementoParrafo ("✔️ El IBAN es válido")
        : parrafoEsValido = crearElementoParrafo ("❌ El IBAN NO es válido")
        elementoInformacionIBAN.appendChild(parrafoEsValido);
    }
}

const pintarDatosInformacionSucursal = (datosextraidos : datosIBANSucursal) => {
    const elementoInformacionIBAN = document.getElementById("informacion-iban");
    if (elementoInformacionIBAN && elementoInformacionIBAN instanceof HTMLDivElement){
        let parrafoBanco = document.createElement("p");
        parrafoBanco = crearElementoParrafo (`Banco: <strong>${datosextraidos.banco}</strong>`);
        elementoInformacionIBAN.appendChild(parrafoBanco)

        let parrafoSucursal = document.createElement("p");
        parrafoSucursal = crearElementoParrafo (`Código Sucursal: <strong>${datosextraidos.codigo_sucursal}</strong>`);
        elementoInformacionIBAN.appendChild(parrafoSucursal)

        let parrafoDigitoDeControl = document.createElement("p");
        parrafoDigitoDeControl = crearElementoParrafo (`Dígito de Control: <strong>${datosextraidos.digito_control}</strong>`);
        elementoInformacionIBAN.appendChild(parrafoDigitoDeControl)
        
        let parrafoCuenta = document.createElement("p");
        parrafoCuenta = crearElementoParrafo (`Número de Cuenta: <strong>${datosextraidos.numero_cuenta}</strong>`);
        elementoInformacionIBAN.appendChild(parrafoCuenta)
    }
}

const limpiarInformacion = () => {
    const elementoInformacionIBAN = document.getElementById("informacion-iban");
    if (elementoInformacionIBAN && elementoInformacionIBAN instanceof HTMLDivElement){
        elementoInformacionIBAN.innerHTML="";
    }
}

export const mostrarInformacionIBAN = (IBAN : string) => {
    limpiarInformacion();
    
    const estaBienFormado = estaBienFormadoElIBAN(IBAN);
    pintarParrafoEstaBienFormado(estaBienFormado);

    const esValido = esIBANvalido(IBAN);
    pintarParrafoEsValido (esValido);

    if(estaBienFormado && esValido){
        const datosextraidos : datosIBANSucursal = extraeDatosSucursalIBAN(IBAN)
        pintarDatosInformacionSucursal(datosextraidos);
    }

}