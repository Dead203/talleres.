//70 personas se encuentran con un problema de comprar un automóvil o un terreno, los
//cuales cuestan exactamente lo mismo. Sabe que mientras el automóvil se devalúa, con el
//terreno sucede lo contrario. Esta persona comprara el automóvil si al cabo de tres años la
//devaluación de este no es mayor que la mitad del incremento del valor del terreno. Ayúdale
//a estas personas a determinar si deben o no comprar el automóvil.

let devaluacion = 0;
let incremento = 0;

for(let i = 1; i<=5; i++){
        devaluacion = parseFloat(prompt(`Ingrese la devaluacion del auto por año: `));
        incremento = parseFloat(prompt(`Ingrese el incremento del terreno por año: `));
        devaluacion = devaluacion * 3;
        incremento = incremento * 3;
    if ( devaluacion <= (incremento / 2)){
        console.log(`La persona ${i} debe comprar el auto`);
    }else{
        console.log(`La persona ${i} debe comprar el terreno`);
    }
}