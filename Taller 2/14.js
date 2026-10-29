const nota = parseInt(prompt("Ingrese la nota del estudiante"));

if (nota == 5){
    console.log("EXCELENTE");
}
else if (nota == 4){
    console.log("BIEN");
}
else if (nota == 3){
    console.log("ACEPTABLE");
}
else if (nota == 2){
    console.log("INSUFICIENTE");
}else {
    console.log("DEFICIENTE");
}