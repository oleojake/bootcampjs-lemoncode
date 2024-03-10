# Laboratorio Módulo 6 - Imports => ([TypeScript](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_06/src))

### Descripción del ejercicio:

1. Extrae la parte que define el modelo de datos a un fichero [model.ts](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_06/src/model.ts)
2. Extrae la parte que define las reglas a un fichero [motor.ts](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_06/src/motor.ts) y haz limpia en main.ts.
3. Extrae la parte que define el UI a un fichero [ui.ts](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_06/src/ui.ts) y haz limpia en [main.ts](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_06/src/main.ts).

### Apartado Opcional

**¿Te animas a crear un objeto partida y su método de ayuda para crear una partida?**

````JavaScript
export const enum Estado {
	HA_GANADO = "HA_GANADO",
	HA_PERDIDO = "HA_PERDIDO",
	HA_PLANTADO = "HA_PLANTADO",
    QUE_HUBIERA_PASADO = "QUE_HUBIERA_PASADO",
    JUGANDO = "JUGANDO"
}

interface Partida {
    estado: Estado,
    puntos : number,
    jugadas : number[]
    iniciarPartida() : void,
}

export const partida : Partida = {
    estado: Estado.JUGANDO,
    puntos: 0,
    jugadas: [],
    iniciarPartida() {
        nuevaPartidaUI();
        nuevaPartidaMotor();
    },
}
````
El método iniciarPartida llama a los elementos mínimos de la UI para que el juego se pinte por pantalla y restablece las variables de juego a través del motor. Se llama tanto cuando se carga por primera vez el HTML como cuando se pulsa en el botón "Nueva Partida.

````JavaScript
document.addEventListener("DOMContentLoaded", partida.iniciarPartida);
````