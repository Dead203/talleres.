let baja = 5.0;
let nota = 0;
let prom = 0;
let validas = 0;
let aprobados = 0;
let estudiante = 1;
let suma = 0;

const menor = (num) =>{
    if(num<baja){
        return baja = num;
    }
}

const division = (num1, num2) =>{
    return num1/num2;
}

const suma1 = (num3) => {
    if(num3 >= 0 && num3 <= 5){
        suma = suma + num3;
    }
}

const validar = (num4) =>{
    if(num4>=3.5){
        return aprobados++;
    }
}

while(true){
    nota = parseFloat(prompt(`Ingrese la nota del estudiante (ingrese -1 para salir): `));
    if(nota>5 || nota<-1){
        console.log("Nota invalida");
    }else if(nota >= 0 && nota <=5){
        suma1(nota)
        validas++;
        menor(nota)
        validar(nota)
    }else if (nota == -1){
        prom = division(suma, validas)
        console.log(`Notas validas: ${validas}`);
        console.log(`Promedio de notas: ${prom}`);
        console.log(`Nota mas baja: ${baja}`);
        console.log(`Estudiantes aprobados: ${aprobados}`);
        break;
    }
}