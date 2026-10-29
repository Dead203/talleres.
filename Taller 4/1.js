const multiplicar = (multiplicador, multiplicando)=>{
    return multiplicador * multiplicando;
}

const num = parseInt(prompt("Ingrese el numero: "));

for(let i = 1; i<=10; i++){
    const rta = multiplicar(num, i)
    console.log(`${num} * ${i} = ${rta}`);
}
