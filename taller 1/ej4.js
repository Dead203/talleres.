const a = parseInt(prompt(`Digite el primer numero`));
const b = parseInt(prompt(`Digite el segundo numero`));

const promt1 = ((a+b)**2)*0.8;

const promt2 = ((((a+b)/2)*3)*2)*0.05;

console.log(`El 80% del cuadrado de la suma es: ${promt1}`);
console.log(`El 5% del doble del triple de la mitad de la suma es: ${promt2}`);