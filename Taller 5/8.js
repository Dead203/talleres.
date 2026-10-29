// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días
// estuvieron por encima del promedio y cuántos fueron.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let venta = 0;
let ventas = [];
let promedio = 0;
let encimaPromedio = 0;

const calcularPromedio = (venta) => {
    return venta/dias.length;
}

for(let i=0; i<7; i++){
    ventas.push(parseInt(prompt(`Ingrese el valor de las ganancias del dia ${dias[i]}`)));
    venta += ventas[i];
}

let j = 0;
while(true){
    if(j<7){
        console.log(`Dia: ${dias[j]} | Ganancias: ${ventas[j]}`);
        j++;
    }else{
        break;
    }
}

promedio = calcularPromedio(venta);

console.log(`Total ventas: ${venta}`);
console.log(`Promedio de ventas ${promedio.toFixed(1)}`);
console.log(`Dias por encima del promedio de ventas: `);

for(let j=0; j<dias.length; j++){
    if(ventas[j]>promedio){
    console.log(dias[j])
    encimaPromedio ++;
    }
}

console.log(`Total: ${encimaPromedio} dias`)