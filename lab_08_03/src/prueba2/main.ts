console.log("Prueba de Concepto 2");

const arraySrcs : string[] = [
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
]


const prueba2changeCardSrc = () : void => {
    const card1Image = document.getElementById("image-1");
    if (card1Image && card1Image instanceof HTMLImageElement) {
        card1Image.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
    }
}

const prueba2divContainer1 = document.getElementById("container-1");
if (prueba2divContainer1 && prueba2divContainer1 instanceof HTMLDivElement) {
    prueba2divContainer1.addEventListener("click", prueba2changeCardSrc);
}
