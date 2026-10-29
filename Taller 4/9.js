let hombres = 0;
let mujeres = 0;
let genero = "";
let promH = 0;
let promM = 0;
let promTotal = 0;
let EdadTotal = 0;
let EdadH = 0;
let EdadM = 0;
let edad = 0;

const n = parseInt(prompt("Ingrese la cantidad de estudiantes: "));

const categorizacion = (caracter) =>{
    if (caracter == "H" || caracter == "h" || caracter == "hombre" || caracter == "Hombre" || caracter == "HOMBRE"){
        return hombres += 1;
    }else if(caracter == "M" || caracter == "m" || caracter == "mujer" || caracter == "Mujer" || caracter == "MUJER"){
        return mujeres += 1;
    }
}

const clasificacion = (num) =>{
    if(genero == "H" || genero == "h" || genero == "hombre" || genero == "Hombre" || genero == "HOMBRE"){
        EdadH = EdadH + num
    }else if(genero == "M" || genero == "m" || genero == "mujer" || genero == "Mujer" || genero == "MUJER"){
        EdadM =  EdadM + num
    }
}

const division = (num1, num2) =>{
    if(hombres != 0){
        return num1/num2
    }
}

const division1 = (num3, num4) =>{
    if(mujeres != 0){
        return num3/num4
    }
}    

const division3 = (num5, num6) =>{
        return num5/num6
}



for(let i=1; i<=n; i++){
    genero = prompt(`Ingrese el genero del estudiante ${i} (H/M): `);
    categorizacion(genero);
    edad = parseInt(prompt(`Ingrese la edad del estudiante ${i}: `));
    clasificacion(edad);
    EdadTotal = EdadTotal + edad;
}

promH = division(EdadH, hombres);
promM = division1(EdadM, mujeres);
promTotal = division3(EdadTotal, n);

if(hombres != 0){
    console.log(`El promedio de la edad de los ${hombres} hombres es: ${promH}`);
}else{
    console.log(`El grupo esta conformado totalmente por ${mujeres} mujeres`);
}

if(mujeres != 0){
    console.log(`El promedio de la edad de las ${mujeres} mujeres es: ${promM}`);
}else{
    console.log(`El grupo esta conformado totalmente por ${hombres} hombres`);
}

console.log(`El promedio de edades es: ${promTotal}`);