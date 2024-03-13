# Laboratorio Módulo 7 - Testing

### Descripción del ejercicio:

En este laboratorio vamos a realizar pruebas unitarias para comprobar que el juego funciona correctamente.

### 1. Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.


````JavaScript
describe("revisarPartida", () => {
    it("partida.estado debería ser igual a Estado.HA_GANADO si partida.puntos es igual a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5);

        // Act
        partida.setEstado(Estado.JUGANDO);
        revisarPartida();

        // Assert
        expect(partida.estado).toBe(Estado.HA_GANADO);
    });
});
````
Con este Test comprobamos que el estado de la partida pasa a ser **HA_GANADO** cuando se obtiene la puntuación exacta de 7.5. Hemos hecho otras pruebas unitarias para verificar que el estado es **JUGANDO** si no ha alcanzado la puntuación de 7.5 al levantar una nueva carta. O por el contrario pasa a **HA_PERDIDO** cuando supera los 7.5 puntos

## Apartados opcionales

### 1. Función dameNúmeroDeCarta

Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. 

````JavaScript
describe("dameNumeroDeCarta", () => {
    it("Debería devolver 10 si el resultado que le llega es 8", () => {
        // Arrange
        const numeroRandom = 8;

        // Act
        const numeroFinal = dameNumeroDeCarta(numeroRandom);

        // Assert
        expect(numeroFinal).toBe(10);
    });
});
````
Hemos comprobado que los números 8, 9 y 10. Se transforman en 10, 11 y 12 en esta función.

### 2. Función dameLosPuntosDeLaCarta

En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva el valor de esa carta.

````JavaScript
describe("dameLosPuntosDeLaCarta", () => {
    it("Debería sumar 0.5 puntos si le llega un número mayor a 7", () => {
        // Arrange
        const numeroDeCarta = 10;

        // Act
        const puntosDeLaCarta = dameLosPuntosDeLaCarta(numeroDeCarta);

        // Assert
        expect(puntosDeLaCarta).toBe(0.5);
    });
});
````
Hemos realizado pruebas para ver que las cartas del 1 al 7 suman su valor como puntos, en cambio las superiores (figuras de la baraja) solo suman 0.5 puntos.

### 3. Función dameNumeroAleatorio

También se han realizado pruebas unitarias para saber si podemos obtener los valores del 1 al 10 utilizando la función de Math.Random() y así practicamos el spyOn con global.Math.

````JavaScript
describe("dameNumeroAleatorio", () => {
    it("Debería devolver 10 si el resultado que le llega es 0.999", () => {
        // Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.999);

        // Act
        const numeroRandomGenerado = dameNumeroAleatorio();

        // Assert
        expect(numeroRandomGenerado).toBe(10);
    });
});
````