let dolares = 0;
let pesos = 0;
let perAtendidas = 0;
let total = 0;

const conversion = (num) =>{
    return num*3550
}


while(true){
    dolares = parseInt(prompt("Ingresa la cantidad de dolares"))
    if(dolares != 0){
        pesos = conversion(dolares)
        perAtendidas++;
        total = total + pesos;
        console.log(`El valor de ${dolares} dolares en pesos es de: ${pesos}`);
    }else{
        console.log(`Personas totales atendidas: ${perAtendidas}`);
        console.log(`La suma total de pesos es: ${total}`);
        console.log(`Hasta luego`);
        break;
    }
}