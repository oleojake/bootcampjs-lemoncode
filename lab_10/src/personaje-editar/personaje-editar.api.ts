import axios from "axios";
import { Personaje } from "./personaje-editar.model";

export const obtenerPersonajeAPI = async (id: string): Promise<Personaje> => {
    try {
        const { data } = await axios.get(`http://localhost:3000/personajes/${id}`);
        return data;
    } catch (error) {
        throw new Error("Error al obtener el personaje");
    }
};


export const actualizarPersonajeAPI = async (personaje : Personaje): Promise<void> => {
    try {
        await axios.put(`http://localhost:3000/personajes/${personaje.id}`, personaje);
    } catch (error) {
        throw new Error("Error al actualizar el personaje");
    }
};