import {dameNumeroDeCarta} from './motor';


describe("dameNumeroDeCarta", () => {
    it("Debería devolver 10 si el resultado que le llega es 8", () => {
        // Arrange
        const numeroRandom = 8;

        // Act
        const puntuacion = dameNumeroDeCarta(numeroRandom);

        // Assert
        expect(puntuacion).toBe(10);
    });
});



/*
const dameNumeroDeCarta = (numeroAleatorio : number) : number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio +2;
    }
    return numeroAleatorio;
}


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