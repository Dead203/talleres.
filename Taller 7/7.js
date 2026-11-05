// Usa filter() para quedarte con las frutas que contienen la letra "a" (los strings también tienen
// includes()). Luego usa join() para unirlas en un solo string, separadas por coma y espacio.

const frutas = ["manzana", "kiwi", "pera", "uva"];

let frutasA = frutas.filter(fruta => fruta.includes("a"));

console.log(frutasA.join(", "));

// ¿Por qué no puedes hacer primero join() y después filter()?
// Si se usa primero join(), se utilizarian todas las frutas del array frutas, incluyendo kiwi