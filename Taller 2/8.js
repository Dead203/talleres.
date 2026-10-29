const cLlantas = parseInt(prompt("Ingrese la cantidad de llantas compradas"));
const vLlantas = parseInt(prompt("Ingrese el valor de cada llanta"));
const pNormal = cLlantas * vLlantas

console.log(`El valor de la compra normalmente es de: ${pNormal}`)

if (cLlantas <= 10) {
    const nvLlantas = vLlantas - (vLlantas * 0.2);
    const pagoTotal = cLlantas * nvLlantas;
    console.log(`Con descuento aplicado queda en: ${pagoTotal}`);
} else {
    const nvLlantas = vLlantas - (vLlantas * 0.5);
    const pagoTotal = cLlantas * nvLlantas;
    console.log(`Con descuento aplicado queda en: ${pagoTotal}`);;

}