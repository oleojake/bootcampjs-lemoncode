import { extraerEnlaces, extraerNombreImagenes } from "./extraer-enlaces";




const pintarEnlacesImagenes = (srcImagenes : string []) => {
    const elementoEnlaces = document.getElementById("informacion-enlaces");
    const parrafoEnlaces = document.createElement("p");
    parrafoEnlaces.innerHTML = "<strong>Estos son los enlaces a imágenes que hemos encontrado:</strong>"
    if (elementoEnlaces && elementoEnlaces instanceof HTMLDivElement){
        const ol = document.createElement("ol");
        for( let i = 0; i < srcImagenes.length; i++){
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = srcImagenes[i]
            a.innerText = srcImagenes[i];
            li.appendChild(a);            
            ol.appendChild(li);
        }
        elementoEnlaces?.appendChild(parrafoEnlaces)
        elementoEnlaces.appendChild(ol);
    }
}

const pintarContenedorImagenes = (srcImagenes : string []) => {
    const contenedorImagenes = document.getElementById("contenedor-imagenes");
    if(contenedorImagenes && contenedorImagenes instanceof HTMLDivElement) {
        for( let i = 0; i < srcImagenes.length; i++){
            const divImagen = document.createElement("div");
            const imagen = document.createElement("img");
            imagen.src = srcImagenes[i];
            imagen.alt = extraerNombreImagenes(srcImagenes[i]);
            const a = document.createElement("a");
            a.href = srcImagenes[i];
            a.innerText = `${i+1}.- ${srcImagenes[i]}`;
            divImagen.appendChild(imagen);
            divImagen.appendChild(a);
            contenedorImagenes.appendChild(divImagen);
        }
    }
}

const limpiarContenedor = () => {
    const elementoEnlaces = document.getElementById("informacion-enlaces");
    const contenedorImagenes = document.getElementById("contenedor-imagenes");
    if (elementoEnlaces && elementoEnlaces instanceof HTMLDivElement &&
        contenedorImagenes && contenedorImagenes instanceof HTMLDivElement){
        elementoEnlaces.innerHTML="";
        contenedorImagenes.innerHTML="";
    }
}

export const mostrarInformacionEnlaces = (codigo : string) => {
    const srcImagenes : string [] = extraerEnlaces(codigo);
    
    limpiarContenedor();
    pintarEnlacesImagenes(srcImagenes);
    pintarContenedorImagenes(srcImagenes);
}