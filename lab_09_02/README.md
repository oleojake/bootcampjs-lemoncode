# Laboratorio Módulo 9.2 - Clave fuerte => ([TypeScript](src/))

En el proceso que de creación de una cuenta queremos evitar que el usuario puede crear una clave débil, para ellos nos piden que:

- La clave debe de tener mayúsculas y minúsculas.
- La clave debe de tener números.
- La clave debe de tener caracteres especiales (@,#,+, _, ...)
- La clave debe de tener una longitud mínima de 8 caracteres.
- La clave no debe tener el nombre del usuario.
- La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
<hr>
Nos crearemos una función para validar la clave, que nos devolverá un objeto con dos propiedades:

- **esValida**: booleano que nos indica si la clave es válida o no.
- **error**: string que nos indica el error que ha ocurrido.

### 1. La clave debe de tener mayúsculas y minúsculas.
````JavaScript
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
````
### 2. La clave debe de tener números.
````JavaScript
const tieneNumeros = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    const arrayNumeros = ["1","2","3","4","5","6","7","8","9"];

    const tieneNumeros = claveArray.some(c => arrayNumeros.includes(c));

    return (tieneNumeros)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener números"}
};
````
### 3. La clave debe de tener caracteres especiales (@,#,+, _, ...)
````JavaScript
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const claveArray = clave.split("")
    const caracteresEspeciales = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

    const tieneCaracteresEspeciales = claveArray.some(c => caracteresEspeciales.includes(c));

    return (tieneCaracteresEspeciales)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener caracteres especiales"}
};
````
### 4. La clave debe de tener una longitud mínima de 8 caracteres.
````JavaScript
const tieneLongitudMinima = (clave: string): ValidacionClave => {
    return (clave.length >= 8)
    ? {esValida:true}
    : {esValida:false, error:"La clave debe de tener una longitud mínima de 8 caracteres"}
};
````
### 5. La clave no debe tener el nombre del usuario.
````JavaScript
const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
    return (!clave.includes(nombreUsuario))
    ? {esValida:true}
    : {esValida:false, error:"La clave no debe tener el nombre del usuario"}
};
````
### 6. La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
````JavaScript
const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const tienePalabrasComunes = commonPasswords.some(pwd => clave.includes(pwd));

    return (!tienePalabrasComunes)
    ? {esValida:true}
    : {esValida:false, error:"La clave no debe de contener palabras comunes"}
};
````