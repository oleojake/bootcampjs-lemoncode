# Laboratorio Módulo 10 - Asincronía => ([TypeScript](src/))

Vamos a crear una aplicación que nos permita buscar personajes de **Mortadelo y Filemón** por su nombre. Existe una api con un endpoint que contiene la siguiente [información](src\content\db.json). 

Si el usuario introduce un nombre en el campo de texto y pulsa el botón de filtrar, se debe mostrar un listado con los personajes que contengan el nombre introducido.

*(Se ha utilizado la dependencia de **axios** para realizar las llamadas a la API)*

### 1. Resultado carga y filtro del listado de personajes "GET"

Por defecto se cargan todos los personajes pero si se realiza una búsqueda se vuelve a realizar una llamada a la API filtrada por el nombre.

![listado personajes](src\content\readme_img\screen1.PNG)


### 2. (Opcional) Se ha añadido la funcionalidad para borrar personajes "DELETE"
````JavaScript
export const borrarPersonajeAPI = async (id:string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:3000/personajes/${id}`);
    } catch (error) {
        throw new Error("Error al borrar el Personaje");
    }
};
````
### 3. (Opcional) Se ha añadido la funcionalidad para editar personajes "PUT"

![editar personajes](src\content\readme_img\screen2.PNG)