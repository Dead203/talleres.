// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
// en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
// "(ninguno)".

let numerosPar = [];
let numerosImpar = [];
let numero = 0;

for(let i=0; i<8; i++){
    numero = parseInt(prompt(`Ingrese el numero ${i+1}`));
    if((numero%2) === 0){
        numerosPar.push(numero);
    }else{
        numerosImpar.push(numero);
    }
}

if(numerosPar.length === 0){
    console.log(`Pares: (ninguno)`);
    console.log(`Impares: ${numerosImpar}`);
}else if(numerosImpar.length === 0){
    console.log(`Pares: ${numerosPar}`);
    console.log(`Impares: (ninguno)`);
}else{
    console.log(`Pares: ${numerosPar}`);
    console.log(`Impares: ${numerosImpar}`);
}