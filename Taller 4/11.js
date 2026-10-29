let random = 0;
let num = 0;
let intento = 1;
let rta = "";
const numero = (num) => {
    return num = Math.floor(Math.random() * 100) + 1;
}

const igual = (respuesta) =>{
    if(respuesta == random){
        return console.log(`Ganaste | intentos : ${intento}`);
    }
}

random = numero(random)

while(true){
    if(intento<=7){
        num = parseInt(prompt(`Intento numero ${intento}`));
        if(num<random){
            console.log(`El numero es mayor`);
        }else if(num>random){
            console.log(`El numero es menor`);
        }else{
            rta = igual(num)
            break;
        }
        intento++;
    }else{
        console.log(`Se te acabaron los intentos`);
        break;
    }
}