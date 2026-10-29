const cubo = (num1) =>{
    return num1 * num1 * num1
}

const cuarta = (num1) =>{
    return num1/4
}

let num;
let rta;
let rta2;
let suma=0;

for(let i = 1; i<=10; i++){
    num = parseInt(prompt(`Ingrese el numero ${i}`));
    rta = cubo(num)
    rta2 = cuarta(num)
    console.log(`Numero: ${num} | Cubo: ${rta} | Cuarta: ${rta2}`);
    suma = suma + rta;
}

console.log(`La suma de los cubos es: ${suma}`);