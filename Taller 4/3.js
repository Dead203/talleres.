const farenheit = (grados) => {
    return (grados * 9/5) + 32
}

const kelvin = (grados) =>{
    return grados + 273.15
}

const promedio = (suma) =>{
    return suma/dia
}

const dia = parseInt(prompt("Ingrese los días a registrar: "));
let registro;
let suma1 = 0;
let grados1 = 0;
let grados2 = 0;
let promedio1 = 0;

for(let i=1; i<=dia; i++){
    registro = parseFloat(prompt(`Ingrese los Grados C° del dia ${i}`));
    suma1= suma1 + registro;
    grados1 = farenheit(registro);
    grados2 = kelvin(registro);
    console.log(`Día ${i}: ${registro}C° = ${grados2}K = ${grados1}F`)
}

promedio1=promedio(suma1)
console.log(`El promedio de C° es: ${promedio1}`);