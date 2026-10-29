const temA = parseFloat(prompt("Ingrese la temperatura de ayer"));

const temM = temA * 0.23;

const temT = temA * 0.17;

const temAc = temA + temT;

console.log(`la disminucion en la mañana fue de: ${temM} grados`);

console.log(`El aumento en la tarde fue de: ${temT} grados`);

console.log(`la temperatura actual es de: ${temAc} grados`);