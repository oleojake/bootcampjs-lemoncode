const turnoElement = document.getElementById("numero-turno");

// CALCULAR TURNO ACTUAL
function calcularTurnoActual () : number {
    let turno = 0;
    if (turnoElement !== null && turnoElement !== undefined) {
        turno = parseInt(turnoElement.innerHTML);
    }
    return turno;
}

// ACTUALIZAR TURNO
function actualizarTurno (puntuacion : number) : void {
    if (turnoElement !== null && turnoElement !== undefined) {
        turnoElement.innerHTML = puntuacion.toString().padStart(2,'0');
    }
}

// HANDLE BUTTON
function handleButtonTurn (botonPulsadoID : string) : void {
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

// MOSTRAR MENSAJE ERROR
function mostrarWarningMessage (str : string) : void {
    const errorMsg = document.getElementById("input-warning");
    if (errorMsg !== null && errorMsg !== undefined) {
        errorMsg.innerHTML = str;
    }
}

// INPUT TURN
function inputTurn () : void {
    const inputElement = document.getElementById("input-turn");
    const inputValue = (inputElement as HTMLInputElement).value;

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
    
    (inputElement as HTMLInputElement).value = "";
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