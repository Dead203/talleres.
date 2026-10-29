const obreros = parseInt(prompt("Ingrese el numero de obreros para calcular su nómina: "));

let horas;
let pago;
let total = 0;
const nomina = (num) =>{
    if(num<=40){
        return num * 12000;
    }else{
        return ((num - 40)*15000)+(40*12000);
    }
}

for (let i=1; i<=obreros; i++){
    horas = parseInt(prompt(`Ingrese el numero de horas trabajadas ${i}`));
    pago = nomina(horas);
    console.log(`El obrero ${i} tiene una nomina de: ${pago}`);
    total = total + pago;
}
console.log(`La nomina total es de: ${total}`);