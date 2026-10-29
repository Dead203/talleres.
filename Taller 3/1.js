//Calcular el total que 10 personas deben pagar en un almacén de llantas, si el precio de cada
//llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.

let total1 = 0;
let valorCompra = 0;


for(let i=1; i<=10; i++){
    let llantas = parseInt(prompt(`Ingrese la cantidad de llantas que compro el cliente ${i}`));
    if(llantas < 5){
        valorCompra = llantas * 800;
    }else{
        valorCompra = llantas * 700;
    }
    total1 = total1 + valorCompra;
    console.log(`El cliente ${i} debe pagar un total de: $${valorCompra}`);
}

console.log(`El total que pagaron las 10 personas es: ${total1}`);