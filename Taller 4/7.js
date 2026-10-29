const descuento= (num1) =>{
    if(num1>10){
        return clientes++;
    }
}

const descuento1 = (num, num2) =>{
    if(num>10){
        return (num * num2) - ((num*num2)*0.15);
    }else{
        return num*num2
    }
}

const precio = parseFloat(prompt("Ingrese el precio de la naranja"));

let kilos = 0;
let pago = 0;
let total = 0;
let clientes = 0;

for(let i=1; i<=15; i++){
    kilos = parseFloat(prompt(`Ingrese el numero de kilos comprados por el cliente ${i}`));
    pago = descuento1(kilos, precio);
    total = total + pago;
    console.log(`El cliente ${i} paga un total de: $${pago}`);
    descuento(kilos)
}

console.log(`Total ganado: $${total}`);
console.log(`Clientes con descuento: ${clientes}`);