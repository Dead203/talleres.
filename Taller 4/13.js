let suma = 0;
let peso = 0;
let bascula = 0;
let kilos = "";
let promedio = 0;

const suma1 = (num) => {
    return suma += num;
}

const division = (num1) =>{
    return num1/10;
}

for(let i=1; i<=5; i++){
    peso = parseFloat(prompt("Ingrese el peso inicial: "));
    suma = 0;
    for(let j=1; j<=10; j++){
        bascula = parseFloat(prompt(`Peso bascula ${j}: `));
        suma1(bascula)
    }
    promedio = division(suma);
    if(promedio<peso){
        console.log(`Bajo: ${peso-promedio} kg el obrero ${i}`);
    }else if(promedio>peso){
        console.log(`Subio: ${promedio-peso} kg del obrero ${i}`);
    }else if(promedio === peso){
        console.log(`Se mantuvo en: ${peso} kg del obrero ${i}`);
    }
}