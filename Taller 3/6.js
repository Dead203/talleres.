//Unas fábricas han sido sometidas a un programa de control de contaminación para lo cual
//se efectúa una revisión de los puntos IMECA generados por la fábrica. El programa de control
//de contaminación consiste en medir los puntos IMECA que emite la fábrica en cinco días de
//una semana y si el promedio es superior a los 170 puntos entonces tendrá la sanción de
//parar su producción por una semana y una multa del 50% de las ganancias diarias cuando
//no se detiene la producción. Si el promedio obtenido de puntos IMECA es de 170 o menor
//entonces no tendrá ni sanción ni multa. Los dueños de las fábricas desean saber cuánto
//dinero perderá después de ser sometido a la revisión.

const n = parseInt(prompt("Ingrese el numero de fabricas a revisar: "));
let imeca = 0;
let promedio = 0;
let multa = 0;
let ganDiarias = 0;
let pago = 0;

for(let i = 1; i<=n; i++){
    for(let j = 1; j<=5; j++){
        imeca = parseInt(prompt(`Ingrese el numero de puntos obtenidos el dia ${j}: `));
        ganDiarias = parseFloat(prompt(`Ingrese las ganancias del dia ${j}: `));
        imeca += imeca;
        multa = ganDiarias * 0.5;
        pago = pago + multa;
    }
    promedio = imeca / 5;
    if(promedio > 170){
        console.log(`La fabrica ${i} supera el promedio y tendra una multa de $${pago} ademas debera parar su produccion por una semana`);
    }else{
        console.log(`La fabrica ${i} no tiene inconvenientes`);
    }
}
