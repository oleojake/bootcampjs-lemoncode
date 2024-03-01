import "./style.css";

let generoPopRock : string = "🎵 Pop Rock";
let generoRock : string = "🎸 Rock";
let generoHardRock : string = "🤘 Hard Rock";
let generoClasica : string = "🎼 Clásica";

interface GrupoMusical {
    nombre : string;
    year : number;
    activo : boolean;
    genero : string;
}

const grupo1 : GrupoMusical = {
    nombre: "The Beatles",
    year: 1960,
    activo: true,
    genero: generoPopRock
}

const grupo2 : GrupoMusical = {
    nombre: "Queen",
    year: 1970,
    activo: false,
    genero: generoRock
}

const grupo3 : GrupoMusical = {
    nombre: "AC DC",
    year: 1973,
    activo: true,
    genero: generoHardRock
}

const grupo4 : GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    year: 1770,
    activo: false,
    genero: generoClasica
}

const grupo5 : GrupoMusical = {
    nombre: "The Rolling Stones",
    year: 1962,
    activo: true,
    genero: generoRock
}


console.log(`%c${grupo1.nombre}`,"font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${grupo1.year} del género musical (${grupo1.genero}) ¿Se encuentra en activo? ${grupo1.activo}`);
console.log(`%c${grupo2.nombre}`,"font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${grupo2.year} del género musical (${grupo2.genero}) ¿Se encuentra en activo? ${grupo2.activo}`);
console.log(`%c${grupo3.nombre}`,"font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${grupo3.year} del género musical (${grupo3.genero}) ¿Se encuentra en activo? ${grupo3.activo}`);
console.log(`%c${grupo4.nombre}`,"font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${grupo4.year} del género musical (${grupo4.genero}) ¿Se encuentra en activo? ${grupo4.activo}`);
console.log(`%c${grupo5.nombre}`,"font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${grupo5.year} del género musical (${grupo5.genero}) ¿Se encuentra en activo? ${grupo5.activo}`);