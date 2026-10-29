const pRaton = parseFloat(prompt("Ingrese el peso del raton en gramos: "));
const pQueso = parseFloat(prompt("Ingrese el peso del queso en gramos: "));

const pNRaton = pRaton + (pRaton * 0.011);
const pNQueso = pQueso - (pQueso * 0.4);

if ((pNRaton * 0.2) < pNQueso) {
    console.log(`El nuevo peso del raton es: ${pNRaton} g`);
    console.log(`El peso final del queso es: ${pNQueso} g`);
}else{
    console.log(`El raton se comio el queso`);
}