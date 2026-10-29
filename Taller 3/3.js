const n = parseInt(prompt("Ingrese la cantidad de personas"));
let numPulsaciones = 0;
for(let i = 1; i<=n; i++){
    let edad = parseInt(prompt("Ingrese la edad de la persona: "));
    const sexo = prompt("Ingrese el genero de la persona M/F: ");
    if(sexo == "M" || sexo == "m"){
        numPulsaciones = (220 - edad)/10;
    }else if(sexo == "F" || sexo == "f"){
        numPulsaciones = (220 - edad)/10;
    }
    console.log(`La persona ${i} debe tener ${numPulsaciones} pulsaciones por cada 10 segundos`);
}

