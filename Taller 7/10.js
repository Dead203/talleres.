// Usa map() para crear un nuevo array donde cada número se divide entre 2. Luego usa includes()
// para verificar si el número 5 está en el array resultante. Prueba con los dos arrays.

const a = [4, 10, 7, 12];
const b = [4, 9];

let c = a.map((numero) => numero/2);
let d = b.map((numero) => numero/2);

console.log(`a: ${c} -> ${c.includes(5)}`);
console.log(`b: ${d} -> ${d.includes(5)}`);

// includes() no acepta una condición como n => n === 5. ¿Qué método usarías
// si necesitaras una condición?
// podria utilizar some() para añadirle una condicion