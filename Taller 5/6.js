let invitados = ["ana", "carlos", "luisa", "pedro", "sofia"];
let nombre = "";
let ingresar = false;
let entrar = 0;
let noEntrar = 0;

const aceptados = (nombre, lista) => {
    for(let j=0; j<lista.length; j++){
        if(nombre == lista[j]){
            return true; 
        }
    }
    return false;
}

while(true){
    nombre = prompt(`Ingrese el nombre del invitado`);
    if(nombre != "fin" && nombre != "Fin" && nombre != "FIN"){
        ingresar = aceptados(nombre.toLowerCase(), invitados);
        if(ingresar == true){
            console.log(`${nombre} puede ingresar`);
            entrar += 1;
        }else{
            console.log(`${nombre} no puede ingresar`);
            noEntrar += 1;
        }
    }else{
        break;
    }
}

console.log(`Ingresaron: ${entrar}`);
console.log(`No pudieron ingresar: ${noEntrar}`);