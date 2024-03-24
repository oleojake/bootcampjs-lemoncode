import { mostrarInformacionEnlaces} from "./ui";

const submitFormularioExtraerEnlaces = (evento : Event) => {
    evento.preventDefault();
    const elementoCodigo = document.querySelector("#inputcodigo");
    if (elementoCodigo && elementoCodigo instanceof HTMLInputElement){
        mostrarInformacionEnlaces(elementoCodigo.value);
    }

}

const iniciarFormulario = () => {
    const formulario = document.getElementById("formulario");
    if(formulario && formulario instanceof HTMLFormElement){
        formulario.addEventListener("submit", submitFormularioExtraerEnlaces)
    }
}

document.addEventListener("DOMContentLoaded", iniciarFormulario)