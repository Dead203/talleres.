// Primero usa some() para verificar si hay al menos una persona menor de 18 años. Luego usa sort()
// para ordenar de menor a mayor edad y find() para obtener la persona mayor de edad (18 o más) más
// joven.

const personas = [
{ nombre: "Sara", edad: 31 },
{ nombre: "Luis", edad: 17 },
{ nombre: "Ana", edad: 25 },
{ nombre: "Pedro", edad: 15 },
];

const verificarMenorEdad = (objeto) => {
    return objeto.some((nombre, edad) => edad<18);
}

console.log(`Menor de edad: ${verificarMenorEdad(personas)}`);
personas.sort((a, b) => a.edad - b.edad);

personas.forEach((persona) => {
    console.log(`${persona.nombre} (${persona.edad})`);
});

const buscarMayorMasJoven = (objeto) => {
    return objeto.find((persona) => persona.edad>18);
}

console.log(buscarMayorMasJoven(personas));

// Si no ordenas antes, ¿a quién devuelve find()? ¿Por qué el orden cambia el resultado?
// Find devuelve {nombre: "sara", edad: 31}, el orden cambia el resultado porque find devuelve al primer campo que cumple con los parametros definidos