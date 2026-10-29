const division = (num) =>{
    return num/25;
}

const mayor = (num) =>{
    if(num > mas){
        return mas = num;
    }
}

const menor = (num) =>{
    if(num<menos){
        return menos = num;
    }
}

let puntos = 0;
let promedio = 0;
let mas = 0;
let menos = 1000;

for(let i=1; i<=25; i++){
    puntos = parseInt(prompt(`Ingrese el puntaje de contaminación del auto ${i}`));
    promedio = promedio + puntos;
    console.log(`El auto ${i} tiene un puntaje de: ${puntos}`);
    mayor(puntos);
    menor(puntos);
}
promedio = division(promedio);
console.log(`El mayor puntaje de contaminacion es: ${mas}`);
console.log(`El menor puntaje de contanimacion es: ${menos}`);
console.log(`El promedio de puntos es: ${promedio}`)