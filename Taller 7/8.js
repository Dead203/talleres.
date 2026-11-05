// Usa reduce() para encontrar el número mayor. Luego usa every() para comprobar si todos los
// números son mayores a 0. Prueba con los dos arrays.

const a = [4, 9, 2, 7];
const b = [4, -1, 2];

let numeroA = a.reduce((numero, n) => {
    if(numero>n){
        n=numero
    }
    return n
}, a[0]);
let mayoresA = a.every(numero => numero>0);
let numeroB = b.reduce((numero, n) => {
    if(numero>n){
        n=numero
    }
    return n
}, b[0]);
let mayoresB = b.every(numero => numero>0);

console.log(`Numero mayor a: ${numeroA} | Numeros mayores a 0: ${mayoresA}`)
console.log(`Numero mayor a: ${numeroB} | Numeros mayores a 0: ${mayoresB}`)
// ¿Qué valor inicial usaste en reduce() y por qué?
// Se usa el primer elemento del array porque asi tomamos siempre como mayor el primer elemento, y asi, si mas adelante
// hay un numero mayor, se toma el valor de este