//En un supermercado se hace una promoción, mediante la cual los clientes obtienen un
//descuento dependiendo de un número que se escoge al azar. Si el numero escogido es
//menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74
//el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el
//número escogido sea diferente de 0.

let compra = 0;
let descuento = 0;
let num = -1;

while(num != 0){
    
    compra = parseInt(prompt("Ingrese el total de la compra: "));
    num = parseInt(prompt("Ingrese un numero al azar (0 para salir):"));
    if(num < 74){
        descuento = compra * 0.15;
    }else{
        descuento = compra * 0.2;
    }
    console.log(`El descuento del cliente es: ${descuento}`);
}