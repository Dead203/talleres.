const vPasaje = parseInt(prompt(`Ingrese el valor del pasaje`));
const cPersonas = parseInt(prompt(`Ingrese la cantidad de personas`));

const pTotal = vPasaje * cPersonas;

console.log(`El valor a pagar es de ${pTotal}`)
if (cPersonas > 20) {
    console.warn("Sobre cupo")
} else {
    console.log("Disfrute del viaje")
}
