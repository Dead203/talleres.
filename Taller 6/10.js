// Parte A. Copia este código y, antes de ejecutarlo, escribe en un comentario lo que crees que
// imprime la última línea y por qué. Después ejecútalo. Si te equivocaste, explica en otro
// comentario qué fue lo que no viste. Equivocarse aquí no resta: dejarlo sin explicar sí.
// let pedido = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00
// pm" } };
// let copia1 = pedido;
// copia1.total = 45000;
// let copia2 = { cliente: pedido.cliente, total: pedido.total, entrega: pedido.entrega
// };
// copia2.cliente = "Luis";
// copia2.entrega.barrio = "La Playa";
// console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);
// Parte B. Escribe una función que haga una copia completa del pedido, de modo que cambiar el
// barrio de la copia no afecte el original. Pruébala.

let pedido = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00pm" } };
let copia1 = pedido;
copia1.total = 45000;
let copia2 = { cliente: pedido.cliente, total: pedido.total, entrega: pedido.entrega};
copia2.cliente = "Luis";
copia2.entrega.barrio = "La Playa";
console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);

// el codigo imprime al final: 30000, Ana y Centro

//Correcion: Al mirar a detalle el codigo, me he dado cuenta que, dentro del objeto llamado copia2, las claves estan ligadas directamente a las
// claves del objeto pedido, lo que significa que, al modificar la copia2, obligatoriamente se modifica el objeto pedido, igualmente cambiando
// el valor de alguna clave en el objeto copia1

let pedido1 = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00pm" } };

const crearCopia = (objeto) => {
    let copia = {};
    copia.cliente = objeto.cliente;
    copia.total = objeto.total;
    copia.entrega = {};
    copia.entrega.barrio = objeto.entrega.barrio;
    copia.entrega.hora = objeto.entrega.hora;
    return copia;
}

let copia3 = crearCopia(pedido1)

let barrio = prompt("Ingrese un nuevo barrio: ");
copia3.entrega.barrio = barrio;

console.log(`Cliente: ${copia3.cliente}`);
console.log(`Total: ${copia3.total}`);
for(let clave in copia3.entrega){
    console.log(`${clave}: ${copia3.entrega[clave]}`)
}

console.log(`Cliente: ${pedido1.cliente}`);
console.log(`Total: ${pedido1.total}`);
for(let clave in pedido1.entrega){
    console.log(`${clave}: ${pedido1.entrega[clave]}`)
}