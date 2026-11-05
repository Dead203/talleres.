// Usa indexOf() para encontrar el índice de un nombre. Si existe (índice distinto de -1), reemplázalo por
// otro nombre en esa posición. Hazlo primero con fill(valor, indice, indice + 1) y luego con
// splice(). Prueba con un nombre que no exista.

const nombres = ["Ana", "Luis", "Sara", "Pedro"];

let indice = nombres.indexOf("Luis");
// let indice = nombres.indexOf("Juan");
if(indice != -1){
    let nombre = prompt("Ingrese un nuevo nombre");
    // nombres.fill(nombre, indice, (indice+1));
    nombres.splice(indice, indice, nombre);
    nombres.forEach(nombre => {
        console.log(nombre);
    })
}else{
    console.log(`Nombre no encontrado`);
}

// Si no validas el -1, ¿qué haría nombres.splice(-1, 1, "Camila")?
// Cambiaria siempre el ultimo indice por el nombre de Camila