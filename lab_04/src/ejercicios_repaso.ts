// EJERCICIOS ESENCIALES DE REPASO
// FUNCIONES BÁSICAS

// Implementa una función que muestre por consola “Hola Mundo”.
function helloWorld () : void {
    console.log("Hola Mundo");
}
helloWorld();

// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
function helloName (name : string) : void {
    console.log(`Hola ${name}`);
}
helloName("Pablo");

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
function stringToUpperCase (string : string) : string {
    return string.toUpperCase();
}
console.log(stringToUpperCase("pablo"));

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
function stringToLowerCase (string : string) : string {
    return string.toLocaleLowerCase();
}
console.log(stringToLowerCase("PABLO"));

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
function sum (number1 : number, number2 : number) : number {
    return number1 + number2;
}
console.log(sum(2,3));

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
function joinWords (word1 : string, word2 : string, word3 : string) : string {
    return word1 + word2 + word3
}
console.log(joinWords("Pablo", "Marzal", "Garrigós"));

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.
function addID (obj1 : any) : void {
    obj1.id = null;
}
let obj = {};
addID(obj);
console.log(obj);

// FUNCIONES CON IF/ELSE, SWITCHES Y COMPROBACIONES

// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null.
function isNullorUndefined (param : any) : void {
    if (param === null) {
        console.log("El parámetro es NULL");
    }
    else if (param === undefined) {
        console.log("El parámetro es UNDEFINED");
    }
}
isNullorUndefined(null);


// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
function isPositive (num1 : number) : void {
    if (num1 >= 0) {
        console.log(`El número ${num1} es positivo`);
    }
    else {
        console.log(`El número ${num1} es negativo`);
    }
}
isPositive(-5);

// Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
function isEqualTo100 (num1 : number) : void {
    if (num1 > 100) {
        console.log(`El número ${num1} es mayor que 100`);
    }
    else if (num1 < 100) {
        console.log(`El número ${num1} es menor que 100`);
    }
    else if (num1 === 100) {
        console.log(`El número ${num1} es igual que 100`);
    }
}
isEqualTo100(105);

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.


// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
function isDivisible (num1 : number, num2 : number) : void {
    if ((num1 % num2) === 0){
        console.log(`${num1} es divisible entre ${num2}`);
    }
    else {
        console.log(`${num1} NO es divisible entre ${num2}`);
    }
}
isDivisible(10,5);

// Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.
function stringLength (str : string, num1 : number) : void {
    if (str.length === num1) {
        console.log(`${str} tiene ${num1} caracteres`);
    }
    else{
        console.log(`${str} NO tiene ${num1} caracteres, tiene: ${str.length}`);
    }
}
stringLength("Dolyta", 5);

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).
function dayOfTheWeek (num1 : number) : void {
    switch(num1){

    case 1:
    break;

    }
}
dayOfTheWeek(1);
// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
// Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

/*

Funciones con arrays
Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
devuelva ‘undefined’ .
Implementa una función que admita un string como parámetro y devuelva la última letra.
Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el
resultado.

Funciones con bucles
Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas
veces como indique el número.
Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
tiene el objeto.
Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
del array multiplicado por dicho número. Devuelve el resultado.
Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
dicho carácter en el string.
Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
elemento por consola.
Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
muestre por consola.
Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
son menores a dicho número, y cuántos no.
Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
segundo.
Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
y viceversa. Muestra los arrays transformados por consola.
Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
Muestra por consola cada elemento por el que iteres.
Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
otra función equivalente que haga la traducción inversa.
Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
de cada subarray y mostrarlos por consola.
*/