const peso = parseInt(prompt("Ingrese el peso en kg: "));
const dism1 = peso - (peso * 0.1);
const dism2 = dism1 - (dism1 * 0.185);
const aum = dism2 + (dism2 * 0.03);

console.log(`Despues de la primera sesion tu peso es de: ${dism1} kg, bajaste ${peso * 0.1} kg`);
console.log(`Despues de la segunda sesion tu peso es de: ${dism2} kg, bajaste ${dism1 * 0.185} kg`);
console.log(`tu peso actual es: ${aum} kg, aumentaste ${dism2 * 0.3} kg`);

if (aum > 78) {
    console.warn("Sobre peso")
} else {
    console.log("Excelente fisico bro")
}
