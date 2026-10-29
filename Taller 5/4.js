// Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo:
// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
// "Domingo"];
// Pedir la venta de cada día usando el nombre del día en el mensaje, guardarlas en otro array y
// mostrar un reporte día por día con el total de la semana.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let venta = 0;
let ventas = [];

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

console.log(`Total ventas: ${venta}`);