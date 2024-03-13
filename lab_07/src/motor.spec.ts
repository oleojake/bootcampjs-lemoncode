import {dameNumeroDeCarta, dameNumeroAleatorio, dameLosPuntosDeLaCarta, generarMensajePointsInfo} from './motor';

import {partida, Estado} from './modelo'
import {vi} from "vitest";


// Número de la carta sin 8 ni 9
describe("dameNumeroDeCarta", () => {
    it("Debería devolver 10 si el resultado que le llega es 8", () => {
        // Arrange
        const numeroRandom = 8;

        // Act
        const numeroFinal = dameNumeroDeCarta(numeroRandom);

        // Assert
        expect(numeroFinal).toBe(10);
    });

    it("Debería devolver 11 si el resultado que le llega es 9", () => {
        // Arrange
        const numeroRandom = 9;

        // Act
        const numeroFinal = dameNumeroDeCarta(numeroRandom);

        // Assert
        expect(numeroFinal).toBe(11);
    });

    it("Debería devolver 12 si el resultado que le llega es 10", () => {
        // Arrange
        const numeroRandom = 10;

        // Act
        const numeroFinal = dameNumeroDeCarta(numeroRandom);

        // Assert
        expect(numeroFinal).toBe(12);
    });
});


// ¿REALMENTE SE GENERA UN NÚMERO DEL 1 AL 10?
describe("dameNumeroAleatorio", () => {
    it("Debería devolver 1 si el resultado que le llega es 0", () => {
        // Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.0001);

        // Act
        const numeroRandomGenerado = dameNumeroAleatorio();

        // Assert
        expect(numeroRandomGenerado).toBe(1);
    });

    it("Debería devolver 5 si el resultado que le llega es 0.5", () => {
        // Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.5);

        // Act
        const numeroRandomGenerado = dameNumeroAleatorio();

        // Assert
        expect(numeroRandomGenerado).toBe(5);
    });

    it("Debería devolver 10 si el resultado que le llega es 0.999", () => {
        // Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.999);

        // Act
        const numeroRandomGenerado = dameNumeroAleatorio();

        // Assert
        expect(numeroRandomGenerado).toBe(10);
    });
});

// PUNTUACIÓN DE LA CARTA
describe("dameLosPuntosDeLaCarta", () => {
    it("Debería sumar 1 punto si le llega un 1", () => {
        // Arrange
        const numeroDeCarta = 1

        // Act
        const puntosDeLaCarta = dameLosPuntosDeLaCarta(numeroDeCarta);

        // Assert
        expect(puntosDeLaCarta).toBe(1);
    });

    it("Debería sumar 7 puntos si le llega un 7", () => {
        // Arrange
        const numeroDeCarta = 7

        // Act
        const puntosDeLaCarta = dameLosPuntosDeLaCarta(numeroDeCarta);

        // Assert
        expect(puntosDeLaCarta).toBe(7);
    });

    it("Debería sumar 0.5 puntos si le llega un número mayor a 7", () => {
        // Arrange
        const numeroDeCarta = 8;

        // Act
        const puntosDeLaCarta = dameLosPuntosDeLaCarta(numeroDeCarta);

        // Assert
        expect(puntosDeLaCarta).toBe(0.5);
    });
});

// ¿SE GENERA CORRECTAMENTE EL MENSAJE PARA EL JUGADOR?
describe("revisarPartida", () => {
    it("Si el estado es HA_GANADO, debería generar el mensaje de Victoria", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.HA_GANADO);

        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe("🥳 ¡Lo has clavado! ¡Enhorabuena!");
    });

    it("Si el estado es HA_PERDIDO, debería generar el mensaje de Derrota", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.HA_PERDIDO);

        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe(`💀 ¡GAME OVER, te has pasado!`);
    });

    it("Si el estado es JUGANDO, debería generar el mensaje genérico", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.JUGANDO);

        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe("ℹ️ Cartas del 1-7 y las figuras 0.5 puntos");
    });

    it("Si el estado es HA_PLANTADO, y los puntos inferiores a 4, debería recibir mensaje 'Has sido conservador'", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.HA_PLANTADO);
        vi.spyOn(partida, "puntos", "get").mockReturnValue(3);
        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe("🥱 Has sido muy conservador");
    });

    it("Si el estado es HA_PLANTADO, y los puntos entre 5 y 6, debería recibir mensaje 'Te ha entrado el canguelo'", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.HA_PLANTADO);
        vi.spyOn(partida, "puntos", "get").mockReturnValue(5.5);
        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe("💩 Te ha entrado el canguelo eh?");
    });

    it("Si el estado es HA_PLANTADO, y los entre 6 y 7, debería recibir mensaje 'Casi Casi'", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.HA_PLANTADO);
        vi.spyOn(partida, "puntos", "get").mockReturnValue(6.5);
        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe("🤏 Casi casi...");
    });

    it("Si el estado es QUE_HUBIERA PASADO, y los puntos superiores a 7.5 'te hubierasp pasado'", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.QUE_HUBIERA_PASADO);
        vi.spyOn(partida, "puntos", "get").mockReturnValue(9);
        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe(`💀 ¡Te hubieras pasado, con ${partida.puntos} puntos!`);
    });

    it("Si el estado es QUE_HUBIERA PASADO, y los puntos inferiores a 7.5 'hubieras llegado'", () => {
        // Arrange
        vi.spyOn(partida, "estado", "get").mockReturnValue(Estado.QUE_HUBIERA_PASADO);
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7);
        // Act
        const mensaje = generarMensajePointsInfo();

        // Assert
        expect(mensaje).toBe(`🍀 ¡Lástima, Hubieras llegado a ${partida.puntos} puntos!`);
    });
});
