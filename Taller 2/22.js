const DinCaja = parseInt(prompt("Introduzca el dinero inicial en caja: "));
const ventasDia = 800000;

let dinTotal = DinCaja + ventasDia;

const pagoProv = dinTotal * 0.1;

dinTotal = dinTotal - pagoProv;
console.log(`El dinero inicial de caja es: $${DinCaja}`);
console.log(`El dinero al final del dia es de: $${dinTotal}`);
console.log(`El pago total a proveedores fue de: $${pagoProv}`)
if (pagoProv > 50000){
    console.log(`El pago a proveedores fue mayor a $50000`);
}else{
    console.log(`El pago a los proveedores no supero los $50000`);
}
