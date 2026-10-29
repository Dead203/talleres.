// En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
// dependerá del número de computadoras que compre. Si las computadoras son menos de
// cinco se les dará un 10% de descuento sobre el total de la compra; si el número de
// computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
// descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora
// es de $11,000

let pago = 0;
let descuento = 0;
let canPc = 0;
const canPer = parseInt(prompt("Ingrese la cantidad de personas que compraran computadoras: "));


for(let i = 1; i <= canPer; i++){
    console.log(`Persona ${i}`);
    canPc = parseInt(prompt("Ingrese la cantidad de computadoras: "));
    if(canPc < 5){
        descuento = 11000 - (11000 * 0.1);
        pago = canPc * descuento;
    }else if(canPc >= 5 && canPc < 10){
        descuento = 11000 - (11000 * 0.2);
        pago = canPc * descuento;
    }else if(canPc >= 10){
        descuento  = 11000 - (11000 * 0.4);
        pago = canPc * descuento;
    }
    console.log(`La persona ${i} debe pagar un total de: $${pago}`);
}
