// BOTONES
function handleButtonTurn (botonPulsadoID : string) : void {

    const turnoElement = document.getElementById("numero-turno");
    let turnoActual;
    let newTurn;

    if (turnoElement !== null && turnoElement !== undefined) {
        turnoActual = parseInt(turnoElement.innerHTML);
    }
    
    switch(botonPulsadoID){
        case "boton-turno-anterior":
            if (turnoActual !== null && turnoActual !== undefined &&
                turnoElement !== null && turnoElement !== undefined &&
                turnoActual > 0){
                newTurn = turnoActual - 1;
                turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
            }
        break;

        case "boton-turno-siguiente":
            if (turnoActual !== null && turnoActual !== undefined &&
                turnoElement !== null && turnoElement !== undefined) {
                    newTurn = turnoActual + 1;
                    turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
                }
        break;

        case "boton-turno-reset":
            if (turnoActual !== null && turnoActual !== undefined &&
                turnoElement !== null && turnoElement !== undefined) {    
                    newTurn = 0;
                    turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
                }
        break;
    }
}

const botonAnteriorElement = document.getElementById("boton-turno-anterior");
botonAnteriorElement?.addEventListener("click", () => handleButtonTurn(botonAnteriorElement.id));

const botonSiguienteElement = document.getElementById("boton-turno-siguiente");
botonSiguienteElement?.addEventListener("click", () => handleButtonTurn(botonSiguienteElement.id));

const botonResetElement = document.getElementById("boton-turno-reset");
botonResetElement?.addEventListener("click", () => handleButtonTurn(botonResetElement.id));

// INPUT
function inputTurn () : void {
    const turnoElement = document.getElementById("numero-turno");
    const inputElement = document.getElementById("input-turn");
    const inputValue = (inputElement as HTMLInputElement).value;
    const errorMsg = document.getElementById("input-warning");

    if (errorMsg !== null && errorMsg !== undefined &&
        inputValue == "") {
        errorMsg.innerHTML = "Debes introducir algún valor";
    }
    else if (errorMsg !== null && errorMsg !== undefined &&
        parseInt(inputValue) < 0) {
        errorMsg.innerHTML = "Debes introducir un número mayor que 0";
        (inputElement as HTMLInputElement).value = "";
    }
    else if (errorMsg !== null && errorMsg !== undefined &&
        turnoElement !== null && turnoElement !== undefined) {
        turnoElement.innerHTML = (parseInt(inputValue)).toString().padStart(2,'0');
        (inputElement as HTMLInputElement).value = "";
        errorMsg.innerHTML = "";
    }
}

const botonInputElement = document.getElementById("button-input-turn");
botonInputElement?.addEventListener("click", inputTurn);