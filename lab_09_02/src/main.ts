const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
];

interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    const claveMayusculas = clave.toUpperCase().split("")
    const claveMinisculas = clave.toLowerCase().split("")

    const tieneMinusculas = claveArray.some(c => claveMinisculas.includes(c));
    const tieneMayusculas = claveArray.some(c => claveMayusculas.includes(c));

    return (tieneMinusculas && tieneMayusculas)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener mayúsculas y minúsculas"}
};

const tieneNumeros = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    const arrayNumeros = ["1","2","3","4","5","6","7","8","9"];

    const tieneNumeros = claveArray.some(c => arrayNumeros.includes(c));

    return (tieneNumeros)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener números"}
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    const caracteresEspeciales = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

    const tieneCaracteresEspeciales = claveArray.some(c => caracteresEspeciales.includes(c));

    return (tieneCaracteresEspeciales)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener caracteres especiales"}
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
    return (clave.length >= 8)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener una longitud mínima de 8 caracteres"}
};

const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
    return (!clave.includes(nombreUsuario))
    ? {esValida:true}
    : {esValida:false, error:"La clave no debe tener el nombre del usuario"}
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const tienePalabrasComunes = commonPasswords.some(pwd => clave.includes(pwd));

    return (!tienePalabrasComunes)
    ? {esValida:true}
    : {esValida:false, error:"La clave no debe de contener palabras comunes"}
};

const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    let claveParaValidar : ValidacionClave = {esValida: false}

    claveParaValidar = tieneMayusculasYMinusculas(clave);

    if(claveParaValidar.esValida === true){
        claveParaValidar = tieneNumeros(clave)
    }

    if(claveParaValidar.esValida === true){
        claveParaValidar = tieneCaracteresEspeciales(clave)
    }

    if(claveParaValidar.esValida === true){
        claveParaValidar = tieneLongitudMinima(clave)
    }

    if(claveParaValidar.esValida === true){
        claveParaValidar = tieneNombreUsuario(nombreUsuario,clave)
    }

    if(claveParaValidar.esValida === true){
        claveParaValidar = tienePalabrasComunes(clave,commonPasswords)
    }

    return claveParaValidar
};

console.log(validarClave("pablo", "oleoA1@dsad", commonPasswords));