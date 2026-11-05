// Usa concat() para combinar los dos arrays en uno solo. Luego usa reduce() para obtener la suma
// total del array combinado.

const a = [3, 7, 2];
const b = [10, 5];

let ambos = a.concat(b);
console.log(ambos);

console.log(`Suma: ` + ambos.reduce((numero, acumulable) => acumulable + numero, 0));

// Pregunta de análisis: ¿concat() modificó a o b?
// No, concat no modifico ninguno de los dos arrays