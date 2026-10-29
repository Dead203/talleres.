const cliente = () => {
    let total = 0, precio = Number(prompt("Precio:"));
    while(precio != 0){
    total += precio;
    precio = Number(prompt("Precio:"));
    }
    return total;
}
const otro = () => prompt("¿Otro cliente? S/N") == "S";
let n = 0;
let dia = 0;
let mayor = 0;
let num = 0;
let seguir = true;
while(seguir){
    n++;
    let total = cliente();
    dia += total;
    while(total > mayor){
    mayor = total;
    num = n;
    }
    seguir = otro();
}
console.log("Clientes: " + n);
console.log("Total: " + dia);
console.log("Mayor compra: cliente " + num + " con " + mayor);