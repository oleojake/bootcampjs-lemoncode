// BOTONES
function handleButtonTurn (botonPulsadoID) {

    const turnoElement = document.getElementById("numero-turno");
    const turnoActual = parseInt(turnoElement.innerHTML);
    let newTurn;

    switch(botonPulsadoID){
        case "boton-turno-anterior":
            if (turnoActual > 0){
                newTurn = turnoActual - 1;
                turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
            }
        break;

        case "boton-turno-siguiente":
                newTurn = turnoActual + 1;
                turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
        break;

        case "boton-turno-reset":
                newTurn = 0;
                turnoElement.innerHTML = newTurn.toString().padStart(2,'0');
        break;
    }
}

const botonAnteriorElement = document.getElementById("boton-turno-anterior");
botonAnteriorElement.addEventListener("click", () => handleButtonTurn(botonAnteriorElement.id));

const botonSiguienteElement = document.getElementById("boton-turno-siguiente");
botonSiguienteElement.addEventListener("click", () => handleButtonTurn(botonSiguienteElement.id));

const botonResetElement = document.getElementById("boton-turno-reset");
botonResetElement.addEventListener("click", () => handleButtonTurn(botonResetElement.id));

// INPUT
function inputTurn (){
    const turnoElement = document.getElementById("numero-turno");
    const inputElement = document.getElementById("input-turn");
    const inputValue = inputElement.value;
    const errorMsg = document.getElementById("input-warning");

    if (inputValue == "") {
        errorMsg.innerHTML = "Debes introducir algún valor";
    }
    else if (parseInt(inputValue) < 0) {
        errorMsg.innerHTML = "Debes introducir un número mayor que 0";
        inputElement.value = "";
    }
    else {

        turnoElement.innerHTML = (parseInt(inputValue)).toString().padStart(2,'0');
        inputElement.value = "";
        errorMsg.innerHTML = "";
    }
}

const botonInputElement = document.getElementById("button-input-turn");
botonInputElement.addEventListener("click", inputTurn);