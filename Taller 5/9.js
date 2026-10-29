// Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
// inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
// el original quedó igual.

let palabras = []
let palabrasInverso = []

const cantidadPalabras = parseInt(prompt(`Ingrese la cantidad de palabras a ingresar: `));

for(let i=0; i<cantidadPalabras; i++){
    palabras.push(prompt(`Ingrese la palabra ${i+1}`));
}
console.log("Las palabras en orden de ingreso es: ")
console.log(palabras)
for(let j=0; j<palabras.length; j++){
    palabrasInverso.push(palabras[palabras.length - (j+1)])
}

console.log("Palabras en orden inverso: ")
console.log(palabrasInverso)