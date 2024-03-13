import {revisarPartida} from './ui'
import {partida, Estado} from './modelo'
import {vi} from "vitest";

// GANADO, PERDIDO o JUGANDO
describe("revisarPartida", () => {
    it("partida.estado debería ser igual a Estado.JUGANDO si partida.puntos es inferior 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7);

        // Act
        partida.setEstado(Estado.JUGANDO);
        revisarPartida();

        // Assert
        expect(partida.estado).toBe(Estado.JUGANDO);
    });
    
    
    it("partida.estado debería ser igual a Estado.HA_GANADO si partida.puntos es igual a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5);

        // Act
        partida.setEstado(Estado.JUGANDO);
        revisarPartida();

        // Assert
        expect(partida.estado).toBe(Estado.HA_GANADO);
    });


    it("partida.estado debería ser igual a Estado.HA_PERDIDO si partida.puntos es superior a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntos", "get").mockReturnValue(8);

        // Act
        partida.setEstado(Estado.JUGANDO);
        revisarPartida();

        // Assert
        expect(partida.estado).toBe(Estado.HA_PERDIDO);
    });
});