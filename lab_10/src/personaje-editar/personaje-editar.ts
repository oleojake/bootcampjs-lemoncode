import { actualizarPersonajeAPI, obtenerPersonajeAPI } from "./personaje-editar.api";
import { Personaje } from "./personaje-editar.model";

const capturarIdDeLaUrl = (): string => {
    const parametrosUrl = new URLSearchParams(window.location.search);
    const id = parametrosUrl.get("id") || "";
    return decodeURIComponent(id);
};

const obtenPersonajeURL = async (): Promise<Personaje> => {
    const id = capturarIdDeLaUrl();
    const personaje = await obtenerPersonajeAPI(id);
    return personaje;
};

const pintarDatosPersonaje = async (): Promise<void> => {
    const personaje: Personaje = await obtenPersonajeURL();

    const tituloPersonaje = document.querySelector("#titulo-personaje");
    if (tituloPersonaje && tituloPersonaje instanceof HTMLHeadingElement) {
        tituloPersonaje.innerText = `Editar al personaje: ${personaje.nombre}`;
    } else {
        throw new Error("Error al obtener el título");
    }

    const nombre = document.querySelector("#nombre");
    const especialidad = document.querySelector("#especialidad");
    const habilidad1 = document.querySelector("#habilidad1");
    const habilidad2 = document.querySelector("#habilidad2");
    const habilidad3 = document.querySelector("#habilidad3");

    if (nombre && nombre instanceof HTMLInputElement) {
        nombre.value = personaje.nombre;
    } else {
        throw new Error("Error al obtener el nombre");
    }

    if (especialidad && especialidad instanceof HTMLInputElement) {
        especialidad.value = personaje.especialidad
    } else {
    throw new Error("Error al obtener la especialidad");
    }

    if (habilidad1 && habilidad1 instanceof HTMLInputElement) {
        habilidad1.value = personaje.habilidades[0];
    } else {
        throw new Error("Error al obtener la habilidad1");
    }

    if (habilidad2 && habilidad2 instanceof HTMLInputElement) {
        habilidad2.value = personaje.habilidades[1];
    } else {
        throw new Error("Error al obtener la habilidad2");
    }

    if (habilidad3 && habilidad3 instanceof HTMLInputElement) {
        habilidad3.value = personaje.habilidades[2];
    } else {
        throw new Error("Error al obtener la habilidad3");
    }
};

const obtenerValorCampo = (campo: string): string => {
    const elementoCampo = document.querySelector(`#${campo}`);
    if ((elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement) {
        return elementoCampo.value;
    } else {
        throw new Error(`No se ha encontrado el campo ${campo}`);
    }
};

const actualizaPersonaje = async(evento: Event): Promise<void> => {
    evento.preventDefault();

    const personaje: Personaje = await obtenPersonajeURL();
    const personajeActualizado: Personaje = {
        id: personaje.id,
        nombre: obtenerValorCampo("nombre"),
        apodo: personaje.apodo,
        especialidad: obtenerValorCampo("especialidad"),
        habilidades: [obtenerValorCampo("habilidad1"),obtenerValorCampo("habilidad2"),obtenerValorCampo("habilidad3")],
        amigo: personaje.amigo,
        imagen: personaje.imagen,
    };

    try {
        await actualizarPersonajeAPI(personajeActualizado);
        window.location.href = "../index.html";
        alert("Personaje actualizado satisfactoriamente");
    } catch (error) {
        alert(error);
    }

};

const iniciarFormulario = () => {
    const formulario = document.querySelector("#formulario-editar");
    if (formulario && formulario instanceof HTMLFormElement) {
        formulario.addEventListener("submit", actualizaPersonaje);
    } else {
        throw new Error("No se ha encontrado el formulario");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    iniciarFormulario();
    pintarDatosPersonaje();
});