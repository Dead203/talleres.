// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
// Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
// rotar 7 en una fila de 5 es lo mismo que rotar 2.

const cantidadNombres = parseInt(prompt(`Ingrese la cantidad de personas`));
let nombres = [];
let rotadaK = [];
let k = 0;
let rotarK = 0;

const rotar = (nombres, k) => {
    k = k % nombres.length;
    for(let j=0; j<nombres.length; j++){
        rotarK = (j + k) % nombres.length;
        rotadaK[rotarK] = nombres[j];
    }
    return rotadaK;
}

for(let i=0; i<cantidadNombres; i++){
    nombres.push(prompt(`Ingrese el nombre ${i+1}: `));
}

k = parseInt(prompt(`Cuantos turnos desea rotar?`));
rotar(nombres, k);

console.log(`Lista original: ${nombres}`);
console.log(`Lista rotada: ${rotadaK}`);
console.log(`Rotaciones: ${k}`);