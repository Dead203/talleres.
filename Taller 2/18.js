const PASIVO = parseInt(prompt("Introduzca la deuda actual"));
const PATRIMONIO  = parseInt(prompt("Introduzca el patrimonio actual"));

const ACTIVO = (PASIVO * -1) + PATRIMONIO;


switch (true) {
    case (ACTIVO > 0):
        console.log("El balance de su ganancia es de: " + ACTIVO);
        break;
    case (ACTIVO == 0):
        console.log("Su cuenta actualmente se encuentra en ceros");
        break;
    case (ACTIVO < 0):
        const ACTIVO1 = ACTIVO * -1;
        console.log("La perdida es de: " + ACTIVO1);
        break;
}
