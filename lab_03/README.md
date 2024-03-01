# Laboratorio Módulo 2 - Tipos de datos y Operadores
## Descripción del ejercicio:

### Grupos Musicales (TypeScript)
Queremos mostrar información acerca de grupos musicales.

Los grupos que vamos a mostrar:

* The Beatles / 1960 / Activo: true / 🎵 Pop Rock
* Queen / 1970 / Activo: false / 🎸 Rock
* AC DC / 1973 / Activo: true / 🤘 Hard Rock
* Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
* The Rolling Stones / 1962 / Activo: true / 🎸 Rock

**Cada género queremos tenerlo en una variable.**

```JavaScript
let generoPopRock : string = "🎵 Pop Rock";
let generoRock : string = "🎸 Rock";
let generoHardRock : string = "🤘 Hard Rock";
let generoClasica : string = "🎼 Clásica";
```
**Hacemos uso de las interfaces en TypeScript**

```TypeScript
interface GrupoMusical {
    nombre : string;
    year : number;
    activo : boolean;
    genero : string;
}
```

**Queremos mostrar cada grupo por consola,** el nombre del grupo de música queremos ponerlo en **negrita**, con **fuente más grande y color de fondo verde**.

***Resultado por consola:*** 

![Resultado por consola](lab_03/src/images_readme/resultado_readme.PNG)
