const BandaIn1 = parseInt(prompt("Ingrese el ancho de banda actual para el equipo 1 en Mbps: "));
const BandaIn2 = parseInt(prompt("Ingrese el ancho de banda actual para el equipo 2 en Mbps: "));

const nbanda1 = BandaIn1 * 2.3;
const nbanda2 = BandaIn2 * 2.3;

if (nbanda1 > 0){
    console.log(`El ancho de banda anterior del equipo 1 es: ${BandaIn1} Mbps, su ancho de banda actual es: ${nbanda1} Mbps`);
}else{
    console.log("El equipo 1 no tiene ancho de banda");
}

if (nbanda2 > 0){
    console.log(`El ancho de banda anterior del equipo 2 es: ${BandaIn2} Mbps, su ancho de banda actual es: ${nbanda2} Mbps`);
}else{
    console.log("El equipo 2 no tiene ancho de banda");
}