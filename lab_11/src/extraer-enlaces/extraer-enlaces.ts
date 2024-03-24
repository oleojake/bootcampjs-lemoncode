export const extraerEnlaces = (codigo : string) : string[] => {
    // Extraemos las img
    const regex =/<img\ssrc=".*?"/gm;
    const elementosIMG = codigo.match(regex);
    // Conseguimos las src
    let atributosSRC = [];
    const regexExec = /"(?<src>.*)"/;
    if(elementosIMG){
        for(let i = 0; i < elementosIMG.length; i++){
            const coincidencia = regexExec.exec(elementosIMG[i]);
            if(coincidencia) {
                const {src} = coincidencia.groups as any;
                // Las limpiamos
                const srcLimpia = src.replace(/\/\./,"")
                atributosSRC[i] = srcLimpia;
            }
        }
    }    
    return atributosSRC;
}

// Para los ALT de las IMG
export const extraerNombreImagenes = (src : string) : string => {
    const regex = /[\w-]+\./i;
    const filename = (src.match(regex));
    if(filename){
        const filenameLimpio = filename[0].replace(/\./,"");
        return filenameLimpio;
    }
    return src;
}