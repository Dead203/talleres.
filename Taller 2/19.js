const aNac = parseInt(prompt("Introduzca su año de nacimiento: "));
const aAct = parseInt(prompt("Introduzca el año actual: "));

if (aNac < 2000){
    const edad = aNac - aAct;
    const diasVividos = edad * 365;
    const horasVividas = diasVividos * 24;
    console.log(`usted ha vivido ${diasVividos} dias y ${horasVividas} horas`);
}else{
    console.log("El año de nacimiento no alcanza")
}