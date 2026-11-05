// Verifica si todos los números son positivos. Luego crea un nuevo array solo con los números pares.
// Prueba con los dos arrays.

const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

let positivosA = a.every((numero) => numero>-1);
let positivosB = b.every((numero) => numero>-1);

let c = a.filter((numero) => (numero % 2) == 0);
let d = b.filter((numero) => (numero % 2) == 0);

console.log(`Positivios a: ${positivosA} | Pares a: ${c.join(", ")}`);
console.log(`Positivios b: ${positivosB} | Pares b: ${d.join(", ")}`);