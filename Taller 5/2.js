const suma = (num) => {
    suma1 += num;
}

const promedio = (num) =>{
    return num/5;
}

let promedio1 = 0;
let notas = [];
let suma1 = 0;

for(let i=0; i<5; i++){
    while(true){
        let nota = parseFloat(prompt(`Ingrese la nota del estudiante: ${i+1}`));
        if(nota>=0 && nota<=5){
            notas.push(nota);
            suma(nota);
            break;
        }else{
            console.log(`Nota invalida, ingrese una nota valida`);
        }
    }
}

promedio1 = promedio(suma1)

console.log(notas);
console.log(`El promedio del curso es: ${promedio1.toFixed(1)}`);
if(promedio1<3){
    console.log(`El curso ha reprobado`);
}else{
    console.log(`El curso ha aprobado`);
}