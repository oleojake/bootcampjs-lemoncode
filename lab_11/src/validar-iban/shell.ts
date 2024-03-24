import { mostrarInformacionIBAN } from "./ui";

const submitFormularioIBAN = (evento : Event) => {
    evento.preventDefault();
    const elementoIBAN = document.querySelector("#inputiban");
    if (elementoIBAN && elementoIBAN instanceof HTMLInputElement){
        mostrarInformacionIBAN(elementoIBAN.value);
    }

}

const iniciarFormulario = () => {
    const formulario = document.getElementById("formulario");
    if(formulario && formulario instanceof HTMLFormElement){
        formulario.addEventListener("submit", submitFormularioIBAN)
    }
}

document.addEventListener("DOMContentLoaded", iniciarFormulario)