// Crea un nuevo array con todos los nombres en mayúsculas. Luego encuentra el primer nombre con
// más de 6 caracteres.

const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];

let nombres1 = nombres.map((nombre) => nombre.toUpperCase());

nombres1.forEach((nombre) => {
    console.log(nombre)
});
console.log(nombres1.find((nombre) => nombre.length > 6));