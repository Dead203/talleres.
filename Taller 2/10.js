const sBasico = parseInt(prompt("Ingrese el salario básico: "));

let axAlimentacion;
let axTransporte;
let sBase;


if (sBasico < 300000) {
    axAlimentacion = sBasico * 0.01;
    axTransporte = 45000;
} else {
    axAlimentacion = 0;
    axTransporte = 25000;
}
sBase = sBasico + axAlimentacion + axTransporte;
const aSalud = sBase * 0.015;
const aPension = sBase * 0.281;
const aFiscales = sBase * 0.55;

const sNeto = sBase - (aSalud + aPension + aFiscales);

const dCatastrofe = sNeto * 0.005;

console.log(`Auxilio de alimentación: ${axAlimentacion}`);
console.log(`Auxilio de transporte: ${axTransporte}`);
console.log(`Deduccion por salud: ${aSalud}`);
console.log(`Deduccion por pension: ${aPension}`);
console.log(`Deduccion por aporter fiscales: ${aFiscales}`);
console.log(`Deduccion por catastrofe: ${dCatastrofe}`);
console.log(`Salario final: ${sNeto - dCatastrofe}`);