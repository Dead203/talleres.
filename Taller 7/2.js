// Usa reverse() para invertir el orden de las palabras. Luego usa find() para encontrar la primera
// palabra con más de 3 caracteres.

const palabras = ["sol", "luna", "mar", "estrella"];

let palabras1 = palabras.reverse();

const encontrar = (objeto) => {
    return objeto.find((palabra) => palabra.length >3);
}

console.log(`Invertido: ${palabras1}`);
console.log(encontrar(palabras1));

// ¿Qué palabra habría encontrado find() sin el reverse()? ¿Qué le pasó al array palabras?
// Sin el reverse, se hubiera encontrado primero la palabra luna, el array de palabras sigue igual