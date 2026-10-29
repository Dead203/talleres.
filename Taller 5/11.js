// Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron.

let numeros = [];
let sinRepetidos  = [];
let numero = 0;
let eliminados = 0;
let existeLista = false;

const aceptados = (numero, lista) => {
    for(let j=0; j<lista.length; j++){
        if(numero == lista[j]){
            return true; 
        }
    }
    return false;
}

for(let i=0; i<10; i++){
    numero = parseInt(prompt(`Ingrese el numero ${i+1}: `));
    numeros.push(numero);
    existeLista = aceptados(numero, sinRepetidos)
    if(existeLista === false){
        sinRepetidos.push(numero);
    }
}

eliminados = numeros.length - sinRepetidos.length;

console.log(`Lista original ${numeros}`);
console.log(`Sin repetidos: ${sinRepetidos}`);
console.log(`Eliminados: ${eliminados}`);
