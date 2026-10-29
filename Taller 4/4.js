const ganancias = (inversion1) =>{
    return inversion1 * 0.02;
}

const ganancias2 = (suma1) =>{
    return suma1 + total;
}

let inversion = parseFloat(prompt("Ingrese el capital a invertir: "));
let tiempo = parseInt(prompt("Ingrese el tiempo a invertir en meses: "));
let ganancias1 = 0;
let total = 0;

for(let i=1; i<=tiempo; i++){
    ganancias1=ganancias(inversion);
    inversion = inversion + ganancias1;
    total = ganancias2(ganancias1);
    console.log(`Mes ${i}: $${inversion}`);
}

console.log(`Ganancias: $${total}`);