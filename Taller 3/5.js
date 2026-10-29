//En una escuela la matrícula de los 38 alumnos se determina según el número de materias
//que cursan. El costo de todas las materias es el mismo. Además, se ha establecido un
//programa para estimular a los alumnos, el cual consiste en lo siguiente: si el promedio
//obtenido por un alumno en el último periodo es mayor o igual que 9, se le hará un descuento
//del 30% sobre la matrícula y no se le cobrara IVA; si el promedio obtenido es menor que 9
//deberá pagar la matrícula completa, la cual incluye el 10% de IVA. Obtener cuanto debe
//pagar cada alumno.

let materias = 0;
let promedio = 0;
const valorMateria = 250;
let totalPagar = 0;
let descuento = 0;

for(let i = 1; i <=38; i++){
    materias = parseInt(prompt(`Ingrese el numero de materias a cursar del alumno ${i}: `));
    promedio = parseFloat(prompt("Ingrese el promedio del periodo pasado: "));
    totalPagar = materias * valorMateria;   

    if(promedio >= 9){
        descuento = totalPagar - (totalPagar * 0.3);
    }

    console.log(`el alumno ${i} debe pagar un total de: $${descuento}`);
}