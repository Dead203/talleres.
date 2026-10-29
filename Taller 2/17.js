const Nombre = prompt("Ingrese el nombre del jugador: ");
const E1 = parseInt(prompt("Ingrese el numero de goles en el primer encuentro: "));
const E2 = parseInt(prompt("Ingrese en numero de goles en el segundo encuentro: "));
const E3 = parseInt(prompt("Ingrese el numero de goles en el tercer encuentro: "));
const E4 = parseInt(prompt("Ingrese el numero de goles en el cuarto encuentro: "));


const tGoles = E1 + E2 + E3 + E4;

if (tGoles > 20 ){
    const promedio = tGoles / 4;
    console.log(`El promedio de ${Nombre} en goles es: ${promedio}`);
}else {
    console.log(`El juador ${Nombre} debe mejorar en su entrenamiento`);
}