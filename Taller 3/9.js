// En un almacén se ha establecido una promoción de las llantas marca “Ponchadas”, dicha
// promoción consiste en lo siguiente: Si se compran menos de cinco llantas el precio es de
// $300 cada una, de $250 si se compran de cinco a 10 y de $200 si se compran mas de 10.
// Obtener la cantidad de dinero que N personas tienen que pagar por cada una de las llantas
// que compra y la que tiene que pagar por el total de la compra.

let precio = 0;
let pago = 0;
let canLlantas = 0;
const n = parseInt(prompt("Ingrese la cantidad de personas: "));
for(let i = 1; i <= n; i++){
    canLlantas = parseInt(prompt("Ingrese la cantidad de llantas que desea comprar: "));
    if(canLlantas < 5){
        precio = 300;
        pago = canLlantas * precio;
    }else if(canLlantas >= 5 && canLlantas <= 10){
        precio = 250;
        pago = canLlantas * precio;
    }else if(canLlantas > 10){
        precio = 200;
        pago = canLlantas * precio;
    }
    console.log(`La persona ${i} debe pagar un total de: $${pago}`);
}