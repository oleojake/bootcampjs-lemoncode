console.log("Prueba de Concepto 5");

interface InfoCarta {
    idFoto: number;
    imagen: string;
};

let prueba5arrayCartas : InfoCarta[] = [
    {
        idFoto: 1,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
        idFoto: 2,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
        idFoto: 3,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
    {
        idFoto: 4,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
    },
    {
        idFoto: 5,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    },
    {
        idFoto: 6,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
    },
]

prueba5arrayCartas = [...prueba5arrayCartas, ...prueba5arrayCartas];
// MUTABLE
function shuffle <T>(array: T[]) {
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
shuffle(prueba5arrayCartas);

console.log(prueba5arrayCartas);

const prueba5getSrc = (dataIndiceID : string) : string => {
    switch (dataIndiceID){
        case "0":
        return prueba5arrayCartas[parseInt(dataIndiceID)].imagen
        case "1":
        return prueba5arrayCartas[parseInt(dataIndiceID)].imagen
        default:
        return "\src\content\images\card-back.jpg";
    }
}

const prueba5setSrc = (src: string, idElement: string) => {
    const cardImgElement = document.getElementById(idElement);
    if(cardImgElement instanceof HTMLImageElement)
        cardImgElement.src = src;
}

const prueba5handleFlipCard = (div : HTMLDivElement) => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    if(dataIndiceID){
        const cardImageID = (`image-${dataIndiceID}`);
        const src = prueba5getSrc(dataIndiceID);
        prueba5setSrc (src, cardImageID);
    }
}



const prueba5Container0 = document.getElementById("container-0");
if (prueba5Container0 && prueba5Container0 instanceof HTMLDivElement) {
    prueba5Container0.addEventListener("click", () => prueba5handleFlipCard(prueba5Container0));
}

const prueba5Container1 = document.getElementById("container-1");
if (prueba5Container1 && prueba5Container1 instanceof HTMLDivElement) {
    prueba5Container1.addEventListener("click", () => prueba5handleFlipCard(prueba5Container1));
}