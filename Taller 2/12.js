const pInicial = parseFloat(prompt("Ingrese el peso inicial del vehiculo en Toneladas: "));

const reduccion = pInicial * 0.15;
const pFinal = pInicial - reduccion;

const kg = pFinal * 1000;
const g = kg * 1000;
console.log(`El peso del vehiculo despues de la reparacion es: ${pFinal} Toneladas, equivalente a ${kg}kg y ${g}g`);

if (reduccion > 3.5) {
    console.log("El vehiculo quedó liviano");
} else {
    console.log("El vehiculo esta bien")
}