//Una compañía de seguros está abriendo un departamento de finanzas y estableció un
//programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa
//la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es
//mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora desea determinar
//cuál será la cuota que debe pagar cada cliente.

const n = parseInt(prompt("Ingrese la cantidad de clientes: "));
let monto = 0;
let cuota = 0;

for(let i =1; i<= n; i++){
    monto = parseInt(prompt(`Ingrese el  monto de la fianza del cliente ${i}: `));
    if(monto < 50000){
        cuota = monto * 0.03;
    }else{
        cuota = monto * 0.02;
    }
    console.log(`El cliente ${i} debe pagar una cuota de: $${cuota}`);
}