console.log("Prueba de Concepto 1");

function prueba1shuffle <T>(array: T[]) {
    let currentIndex = array.length;
    let randomIndex;
    // Se ejecuta tantas veces como el array length
    while (currentIndex > 0) {
        // Selecciona un índice aleatorio disponible
        randomIndex = Math.floor(Math.random() * currentIndex);
        // Va recorriendo todos los índices
        currentIndex--;
        // Intercambia el índice aleatorio obtenido con el índice actual
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

var arrayInicial = ['🦁', '🦁', '🦉', '🦉', '🐶', '🐶', '🐔', '🐔', '🐷', '🐷', '🐝', '🐝',];
prueba1shuffle(arrayInicial);
console.log(arrayInicial);
prueba1shuffle(arrayInicial);
console.log(arrayInicial);
prueba1shuffle(arrayInicial);
console.log(arrayInicial);