let mercado = [];
const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos: "));
for(let i=0; i<cantidadProductos; i++){
    mercado.push(prompt(`Producto ${i+1}:`));
}
mercado.forEach((producto, i) => {
    console.log(`${i+1}: ${producto}`)
})
// no se puede parar el forEach a mitad, ya que recorre siempre toda la lista sin parar

console.log(`Total productos: ${mercado.length}`);