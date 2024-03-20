import { Personaje, CrearBotonParams} from "./personaje-listado.model";
import { borrarPersonajeAPI, obtenerBusquedaPersonajesAPI } from "./personaje.listado.api";

const crearElementoParrafo = (titulo: string, texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.innerHTML= `<strong>${titulo}:</strong> ${texto}`;
    return parrafo;
};

const crearElementoImagen = (portada: string, titulo: string): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = portada;
    imagen.alt = titulo;
    return imagen;
};

const crearBoton = (crearBotonParams: CrearBotonParams): HTMLButtonElement => {
    const { texto, id: personajeID, nombreClase, onClick } = crearBotonParams;
    
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.classList.add(nombreClase);
    boton.addEventListener("click", () => {
        onClick(personajeID);
    });

    return boton;
};

const crearGrupoBotones = (id: string): HTMLDivElement => {
    const grupoBotones = document.createElement("div");
    grupoBotones.classList.add("grupo-botones");

    const botonEditar = crearBoton({
        texto: "✏️ Editar",
        id: id,
        nombreClase: "boton-editar",
        onClick: () => editaPersonaje(id),
    });

    const botonBorrar = crearBoton({
        texto: "🗑️ Borrar",
        id: id,
        nombreClase: "boton-borrar",
        onClick: () => borraPersonaje(id),
    });

    grupoBotones.appendChild(botonEditar);
    grupoBotones.appendChild(botonBorrar);

    return grupoBotones;
};

const editaPersonaje = (id: string) => {
    window.location.href = `../personaje-editar/index.html?id=${encodeURIComponent(id)}`;
};

const borraPersonaje = async (id: string) => {
    try{
        await borrarPersonajeAPI(id);
        pintarPersonajes("");
        alert("Personaje borado con éxito");
    } catch (error) {
        alert(error);
    }
};

const crearContenedorPersonaje = (personaje : Personaje): HTMLDivElement => {
    const elementoPersonaje = document.createElement("div");
    elementoPersonaje.classList.add("personaje-contenedor");

    const imagen = crearElementoImagen(`http://localhost:3000/${personaje.imagen}`, personaje.nombre);
    elementoPersonaje.appendChild(imagen);

    const nombre = crearElementoParrafo("Nombre", personaje.nombre);
    elementoPersonaje.appendChild(nombre);

    const especialidad = crearElementoParrafo("Especialidad", personaje.especialidad);
    elementoPersonaje.appendChild(especialidad);

    const habilidades = crearElementoParrafo("Habilidades", personaje.habilidades.join(", "));
    elementoPersonaje.appendChild(habilidades);

    const grupoBotones = crearGrupoBotones(personaje.id);
    elementoPersonaje.appendChild(grupoBotones);

    return elementoPersonaje;
};

const pintarPersonajes = async (termino : string): Promise<void> => {
    const personajes = await obtenerBusquedaPersonajesAPI(termino);
    const listado = document.querySelector("#listado-personajes");
    
    if (listado && listado instanceof HTMLDivElement) {
        listado.innerHTML=""; // Vacía el listado
        for(let i = 0; i < personajes.length; i++){
            const contenedorPersonaje = crearContenedorPersonaje(personajes[i]);
            listado.appendChild(contenedorPersonaje);
        }
    } else {
        throw new Error("No se ha encontrado el contenedor del listado");
    }
};

document.addEventListener("DOMContentLoaded", () =>  pintarPersonajes(""));

const submitFormularioBuscarPorNombre = (evento: Event) => {
    evento.preventDefault();
    const elementoCampoNombre = document.querySelector(`#name`);
    if (elementoCampoNombre && elementoCampoNombre instanceof HTMLInputElement){
        pintarPersonajes(elementoCampoNombre.value);
    }
}

const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", submitFormularioBuscarPorNombre);
}