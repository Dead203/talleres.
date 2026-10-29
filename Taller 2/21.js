const liPres = 457;
const liTotal = parseInt(prompt("Introduzca el total de libros que tiene la biblioteca:"));

if (liTotal >= liPres){
    const lidisp = liTotal - liPres;
    if (lidisp > 0){
        console.log(`La biblioteca tiene ${lidisp} libros disponibles`);
    }else{
        console.log("la biblioteca no tiene libros disponibles");
    }
}else{
    console.warn("Error: el total de libros es menor que los libros prestados");
}