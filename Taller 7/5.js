// Usa shift() para eliminar el primer número, unshift() para agregar un 5 al principio y push() para
// agregar un 50 al final. Imprime lo que devuelve cada método.

const numeros = [10, 20, 30, 40];

console.log(`Shift devuelve: ${numeros.shift()}`);
console.log(`Unshift devuelve: ${numeros.unshift(5)}`);
console.log(`Push devuelve: ${numeros.push(50)}`);
console.log(`Numeros queda: ${numeros}`);

// Pregunta de análisis: ¿Qué devuelven unshift() y push()? ¿Es el array?
// no devuelven el array, devuelven la longitud de este mismo