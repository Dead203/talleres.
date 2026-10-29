// El programa arranca con este objeto:
// let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
// ciudad: "San Gil" };
// El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
// se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.

let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa", ciudad: "San Gil" };

const existe = (campo) => {
    if(campo in cliente){
        return true
    }else{
        return false
    }
}

while(true){
    let cambio = prompt("Que dato quieres cambiar: ")
    cambio = cambio.toLowerCase()
    if(cambio != "fin"){
        let existe1 = existe(cambio);
        if(existe1 === true){
            let nuevoValor = prompt("Ingrese el nuevo valor");
            cliente[cambio] = nuevoValor;
            console.log(`Actualizado ${cambio} => ${nuevoValor}`);
        }else{
            console.log(`El campo no existe`);
        }
    }else{
        break;
    }
}

console.log(`Perfil Final`);
console.log(`Nombre: ${cliente.nombre}`);
console.log(`Telefono: ${cliente.telefono}`);
console.log(`Barrio: ${cliente.barrio}`);
console.log(`Ciudad: ${cliente.ciudad}`);