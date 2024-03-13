console.log("Prueba de Concepto 4");


const prueba4changeCardSrc1 = () : void => {
    console.log("Hola");
    const card1Image = document.getElementById("image-1");
    if (card1Image && card1Image instanceof HTMLImageElement) {
        card1Image.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
    }
}

const prueba4changeCardSrc2 = () : void => {
    const card1Image = document.getElementById("image-2");
    if (card1Image && card1Image instanceof HTMLImageElement) {
        card1Image.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
    }
}

const prueba4Container1 = document.getElementById("container-1");
if (prueba4Container1 && prueba4Container1 instanceof HTMLDivElement) {
    prueba4Container1.addEventListener("click", prueba4changeCardSrc1);
}


const prueba4Container2 = document.getElementById("container-2");
if (prueba4Container2 && prueba4Container2 instanceof HTMLDivElement) {
    prueba4Container2.addEventListener("click", prueba4changeCardSrc2);
}

