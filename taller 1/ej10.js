const tem = parseFloat(prompt("Ingrese la temperatura"));

const temM =  tem - (tem*0.05)

const temA = temM + (temM*0.4)

console.log(`La temperatura actual es de ${temA} grados`)