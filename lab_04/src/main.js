
// CALCULAR TURNO ACTUAL // UI
function calcularTurnoActual () {
    const turnoElement = document.getElementById("numero-turno");
    let turno = 0;
    if (turnoElement !== null && turnoElement !== undefined) {
        turno = parseInt(turnoElement.innerHTML);
    }
    return turno;
}

// ACTUALIZAR TURNO // UI
function actualizarTurno (puntuacion) {
    const turnoElement = document.getElementById("numero-turno");
    if (turnoElement !== null && turnoElement !== undefined) {
        turnoElement.innerHTML = puntuacion.toString().padStart(2,'0');
    }
}

// HANDLE BUTTON // MOTOR
function handleButtonTurn (botonPulsadoID){
        const turnoActual = calcularTurnoActual();
        switch(botonPulsadoID){
            case "boton-turno-anterior":
                if (turnoActual > 0){
                    actualizarTurno(turnoActual - 1);
                }
            break;
            case "boton-turno-siguiente":
                actualizarTurno(turnoActual + 1);
            break;
            case "boton-turno-reset":
                actualizarTurno(0);
            break;
        }
}

// MOSTRAR MENSAJE ERROR // UI
function mostrarWarningMessage (str) {
    const errorMsg = document.getElementById("input-warning");
    if (errorMsg !== null && errorMsg !== undefined) {
        errorMsg.innerHTML = str;
    }
}

// UI
const obtenerValueInput = () => {
    const inputElement = document.getElementById("input-turn");
    return inputElement.value;
}

// UI
const actualizarValueInput = (value) => {
    const inputElement = document.getElementById("input-turn");
    inputElement.value = value;
}

// INPUT TURN // MOTOR
function inputTurn () {
    const inputValue = obtenerValueInput();

    if (inputValue === "") {
        mostrarWarningMessage("Debes introducir algún valor");
    }
    else if (parseInt(inputValue) < 0) {
        mostrarWarningMessage("Debes introducir un número mayor que 0");
    }
    else {
        actualizarTurno(parseInt(inputValue));
        mostrarWarningMessage("");
    }
    actualizarValueInput("");
}

const botonAnteriorElement = document.getElementById("boton-turno-anterior");
if (botonAnteriorElement!== null && botonAnteriorElement !== undefined && 
    botonAnteriorElement instanceof HTMLButtonElement) {
        botonAnteriorElement.addEventListener("click", () => handleButtonTurn(botonAnteriorElement.id));
}

const botonSiguienteElement = document.getElementById("boton-turno-siguiente");
if (botonSiguienteElement!== null && botonSiguienteElement !== undefined && 
    botonSiguienteElement instanceof HTMLButtonElement) {
        botonSiguienteElement.addEventListener("click", () => handleButtonTurn(botonSiguienteElement.id));
}

const botonResetElement = document.getElementById("boton-turno-reset");
if (botonResetElement!== null && botonResetElement !== undefined && 
    botonResetElement instanceof HTMLButtonElement) {
        botonResetElement.addEventListener("click", () => handleButtonTurn(botonResetElement.id));
}

const botonInputElement = document.getElementById("button-input-turn");
if (botonInputElement!== null && botonInputElement !== undefined && 
    botonInputElement instanceof HTMLButtonElement) {
        botonInputElement.addEventListener("click", inputTurn);
}