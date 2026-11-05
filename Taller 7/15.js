// Crea una nueva lista con los tres primeros colores, sin modificar el array original. Luego crea otra lista
// que combine esa con los colores secundarios.

const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

let primerosTres = colores.slice(0, 3);

let combinados = primerosTres.concat(secundarios);
console.log(primerosTres);
console.log(combinados);
console.log(`Colores sigue con sus ${colores.length} colores`);