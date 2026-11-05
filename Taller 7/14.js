// Calcula el promedio de los precios con reduce(). Si el promedio es mayor a 100, crea un nuevo array
// con los precios menores al promedio.

const precios = [120, 80, 250, 60, 90];

let suma = precios.reduce((acumulado, n) => acumulado + n, 0);
let promedio = suma/precios.length
console.log(`Promedio: ${promedio}`);
if(promedio>100){
    let precios1 = precios.filter((numero) => numero<promedio);
    console.log(`Precios menores al promedio: ${precios1.join(", ")}`);
}else{
    console.log(`Precios ${precios.join(", ")}`);
}