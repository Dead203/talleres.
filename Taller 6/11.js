// El programa arranca con el menú de precios:
// let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
// El usuario agrega productos y cantidades hasta escribir "fin". Los productos se guardan en un
// objeto items (producto: cantidad). Si pide un producto que ya estaba, la cantidad se suma. Si
// no está en el menú, se rechaza. Al final se muestra el detalle, el subtotal, el domicilio ($3000 si
// el subtotal es menor a $20000; si no, gratis) y el total.

let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
let items = {};


for(let precio in precios){
    console.log(`${precio}: ${precios[precio]}`);
}

const agregarItem = (producto, objeto, cantidad) => {
    if(producto in objeto){
        objeto[producto] += cantidad;
    }else{
        objeto[producto] = cantidad;
    }
}

const calcularSubtotal = (objeto, objeto2) => {
    let suma = 0;
    for(let producto in objeto2){
        if(producto in objeto){
            suma += (objeto[producto] * objeto2[producto]);
        }
    }
    return suma;
}

while(true){
    let producto = prompt("Que producto desea? | (fin para terminar) ");
    producto = producto.toLowerCase();
    if(producto != "fin"){
        if(producto in precios){
            let cantidad = parseInt(prompt("Ingrese la cantidad: "));
            agregarItem(producto, items, cantidad);
        }else{
            console.log(`El producto ${producto} no esta disponible`);
        }
    }else{
        break;
    }
}

console.log(`---------------------------------`);
console.log(`Detalle del pedido`);

for(let item in items){
    console.log(`${item}: ${items[item]}`);
}

let subtotal = calcularSubtotal(precios, items);

console.log(`Subtotal: ${subtotal}`);

let total = 0;

if(subtotal<20000){
    total = subtotal + 3000;
    console.log(`Domicilio: $3000`);
}else{
    total = subtotal;
    console.log(`Domicilio: Gratis`);
}

console.log(`Total: ${total}`);