// Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.

let reserva = {nombre:"", actividad:"Rafting río Fonce", adultos:0, seguro:true, total:0};

const costos = (objeto) => {
    let costo = 0
    if(objeto.seguro === true){
        if(objeto.menores>0){
            costo = (objeto.adultos * 70000) + (objeto.menores * 50000) + ((objeto.adultos + objeto.menores) * 8000);
        }else{
            costo = (objeto.adultos * 70000) + (objeto.adultos * 8000);
        }
    }else{
        if(objeto.menores>0){
            costo = (objeto.adultos * 70000) + (objeto.menores * 50000);
        }else{
            costo = (objeto.adultos * 70000);
        }
    }
    return costo
}

const imprimirReserva = (objeto) => {
    console.log(`---Reserva---`);
    console.log(`Cliente: ${objeto.nombre}`);
    console.log(`Actividad: ${objeto.actividad}`);
    console.log(`Adultos: ${objeto.adultos}`);
    if(objeto.menores>0){
        console.log(`Menores: ${objeto.menores}`);
    }
    if(objeto.seguro == true){
        console.log(`Seguro: Incluido`);
    }else{
        console.log(`Seguro: No incluido`);
    }
    console.log(`Total: ${objeto.total}`);
}

let nombre = prompt("Cliente: ");
reserva.nombre = nombre;
let cantAdultos = parseInt(prompt("Cuantos adultos?"));
reserva.adultos = cantAdultos;
let vanNiños = prompt("Van menores? (S/N)");
if(vanNiños.toLowerCase() == "si" || vanNiños.toLowerCase() == "s"){
    let cantNiños = parseInt(prompt("Cuantos menores?"));
    reserva.menores = cantNiños;
}
let seguroInput = prompt("Incluir seguro? (S/N)");
if(seguroInput.toLowerCase() == "si" || seguroInput.toLowerCase() == "s"){
    reserva.seguro = true;
}else{
    delete reserva.seguro ;
}

let total = costos(reserva);
reserva.total = total;

imprimirReserva(reserva);