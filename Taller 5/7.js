let contadores = [0, 0, 0, 0, 0];
let calificacion = 0;
let mayor = 0;
let estrellas = "*";
let frecuente = 0;

const numeroMayor = (array) => {
    for(let f=0; f<array.length; f++){
        if(array[f]>mayor){
            mayor = array[f];
            frecuente = f+1;
        }
    }
}


for(let i=1; i<=10; i++){
    calificacion = parseInt(prompt(`Ingrese la calificacion (1-5)`));
    switch(calificacion){
        case 1:
            contadores[0] += 1;
            break;

        case 2:
            contadores[1] += 1;
            break;

        case 3:
            contadores[2] += 1;
            break;

        case 4:
            contadores[3] += 1;
            break;

        case 5:
            contadores[4] += 1;
            break;
    }
}

numeroMayor(contadores);
console.log(`Estrellas 1: ${estrellas.repeat (contadores[0])} (${contadores[0]})`);
console.log(`Estrellas 2: ${estrellas.repeat (contadores[1])} (${contadores[1]})`);
console.log(`Estrellas 3: ${estrellas.repeat (contadores[2])} (${contadores[2]})`);
console.log(`Estrellas 4: ${estrellas.repeat (contadores[3])} (${contadores[3]})`);
console.log(`Estrellas 5: ${estrellas.repeat (contadores[4])} (${contadores[4]})`);
console.log(`Mas frecuente: ${frecuente} estrellas`);