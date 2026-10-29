const contarDivisores = numero => {
    let divisores = 0;
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0) divisores++;
    }
    return divisores;
}

const esPrimo = numero => contarDivisores(numero) == 2;

let n = Number(prompt("Límite:"));
let cantidad = 0;

for(let i = 2; i <= n; i++){
    if(esPrimo(i)){
        console.log(i);
        cantidad++;
    }
}
console.log("Cantidad de primos: " + cantidad);