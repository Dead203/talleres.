const salBa = parseInt(prompt("Ingrese el salario basico del empleado"));

const salNet = salBa - (salBa * 0.25);

if(salNet >= 2000000){
    console.log("El salario del empleado alcanza a cubrir el SMMLV, su salario es de: ");
}else{
    console.log("El salario del empleado no alcanza a cubrir el SMMLV, su salario es de: ");
}

console.log("$" + salNet);