let mercado = [];
const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos: "));
for(let i=0; i<cantidadProductos; i++){
    mercado.push(prompt(`Producto ${i+1}:`));
}
for(let j=0; j<mercado.length; j++){
    console.log(`${j+1}: ${mercado[j]}`);
}

console.log(`Total productos: ${mercado.length}`);