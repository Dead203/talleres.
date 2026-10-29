const kiInicial = parseInt(prompt("Introduzca el ki inicial de Goku: "));

const kiFinal = kiInicial + (kiInicial * 3);

const aumKi = kiInicial * 3;

if(kiFinal > 5000){
    console.log(`El ki inicial de Goku es de: ${kiInicial}`);
    console.log(`Su aumento fue de: ${aumKi}`);
}else{
    console.log("El ki final de goku no supero los 5000");
}