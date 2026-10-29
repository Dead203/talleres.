let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let venta = 0;
let ventas = [];
let mayor = ventas[0];
let menor = ventas[0];
let mejorDia = dias[0];
let peorDia = dias[0];

const numeroMayor = (array, array2) => {
    for(let f=0; f<array2.length; f++){
        if(array[f]>mayor){
            mayor = array[f];
            mejorDia = array2[f];
        }
    }
}

const numeroMenor = (array, array2) => {
    for(let g=0; g<array2.length; g++){
        if(array[g]<menor){
            menor = array[g];
            peorDia = array2[g];
        }
    }
}

const calcularDiferencia = (num, num2) => {
    return num - num2;
}

for(let i=0; i<dias.length; i++){
    ventas.push(parseInt(prompt(`Ingrese el valor de las ganancias del dia ${dias[i]}`)));
    venta += ventas[i];
}

let j = 0;

for(let j= 0; j<dias.length; j++){
    console.log(`Dia: ${dias[j]} | Ganancias: ${ventas[j]}`);
}

console.log(`Total ventas: ${venta}`);
numeroMayor(ventas, dias);
numeroMenor(ventas, dias);
let diferencia = calcularDiferencia(mayor, menor);

console.log(`Mejor dia: ${mejorDia}: $${mayor} `);
console.log(`Peor dia: ${peorDia}: $${menor} `);
console.log(`Diferencia: $${diferencia}`);