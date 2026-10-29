const clasificacion  = (numero) =>{
    if((numero + 1) <= 0){
        return negativos += 1;
    }else if((numero + 1) > 1){
        return positivos += 1;
    }else if((numero + 1) == 1){
        return cero += 1
    }
}

let negativos = 0;
let positivos = 0;
let cero = 0;
let num = 0;

for(let i=1; i<=20; i++){
    num = parseInt(prompt("Ingrese un numero: "));
    clasificacion(num)
}

console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Cero: ${cero}`);