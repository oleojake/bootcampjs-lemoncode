import axios from "axios";
import { Personaje } from "./personaje-listado.model";

export const obtenerBusquedaPersonajesAPI = async (termino: string): Promise<Personaje[]> => {
    try {
        const { data } = await axios.get(`http://localhost:3000/personajes/?nombre_like=${termino}`);
        return data;
    } catch (error) {
        throw new Error("Error al obtener los personajes");
    }
};

export const borrarPersonajeAPI = async (id:string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:3000/personajes/${id}`);
    } catch (error) {
        throw new Error("Error al borrar el personaje");
    }
};