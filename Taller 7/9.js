 // Usa findIndex() para encontrar el índice del primer producto cuyo precio sea mayor a 100. Prueba
// también con una condición que ningún producto cumpla.

const productos = [
{ nombre: "Lápiz", precio: 50 },
{ nombre: "Cuaderno", precio: 120 },
{ nombre: "Libro", precio: 200 },
];

let producto = productos.findIndex((producto) => producto.precio>100);
console.log(productos[producto])

// ¿Qué te devolvería find() en lugar de findIndex() con esos mismos datos?
// find() me devolveria el valor de la posicion, findIndex() me devuelve la posicion donde encontro el valor que se le pide