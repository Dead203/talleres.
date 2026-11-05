// Con map() multiplica cada número por 3. Luego, sobre el nuevo array, usa filter() para quedarte con
// los mayores a 10.

const numeros = [2, 5, 3, 8, 1];

let numeros1 = numeros.map((numeros) => numeros * 3);

let numeros2 = numeros1.filter((numeros) => numeros>10);

console.log(`Array original`);
numeros.forEach((numero) => {
    console.log(numero);
});

console.log(`Array multiplicado por 3`);
numeros1.forEach((numero) => {
    console.log(numero);
});

console.log(`Array numeros mayor a 10`);
numeros2.forEach((numero) => {
    console.log(numero);
});

//El array de numeros no cambio, para comprobarlo imprimí tambien el array original para verificar