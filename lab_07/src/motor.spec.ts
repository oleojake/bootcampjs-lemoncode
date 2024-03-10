import { vi } from "vitest"

import {Estado, partida} from './modelo';

import {revisarPartida} from './motor';


describe("revisarPartida", () => {
    it("partida.estado debería ser igual a Estado.HA_GANADO si partida.puntos es igual a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5);

        // Act
        revisarPartida();

        // Assert
        expect(partida.estado).toBe(Estado.HA_GANADO);
    });
});

/*
export const revisarPartida = () => {  
    if(partida.estado !== "QUE_HUBIERA_PASADO"){
        if (partida.puntos > 7.5) {
            partida.estado = Estado.HA_PERDIDO;
            desactivaDameCarta();
            }
        if (partida.puntos === 7.5){
            partida.estado = Estado.HA_GANADO;
            desactivaDameCarta();
        }
    }
    actualizaPuntuacion();

    // Pruebas, > 7.5 == 7.5 < 7.5
}*/

/*
--> Actualizar Puntuación
--> Mostrar Mensaje Info == "Has ganado"
*/