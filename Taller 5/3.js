let cantidadNumeros = 0;

let numeros = [];

while(true){
    cantidadNumeros = parseInt(prompt(`Ingrese la cantidad de numeros`));
    if(cantidadNumeros >= 1){
        break;
    }
}

for(let i = 0; i<cantidadNumeros; i++){
    numeros.push(parseInt(prompt(`Ingrese el numero ${i+1}: `)));
}
console.log(`El primero: ${numeros[0]}`);

if((cantidadNumeros % 2) === 0){
    console.log(`Los del medio:  ${numeros[(numeros.length/2)-1]} y ${numeros[numeros.length/2]}`);
}else{
    console.log(`El medio: ${numeros[(numeros.length-1)/2]}`);
}

console.log(`El ultimo ${numeros[numeros.length-1]}`);