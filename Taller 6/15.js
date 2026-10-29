// Parte A. Con este objeto de códigos de aeropuerto:
// let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
// Construir un objeto invertido (código: ciudad). El usuario escribe códigos hasta "fin" y el
// programa dice a qué ciudad corresponden.

// Parte B. Ahora invierte este objeto de zonas de reparto, donde un valor se repite:
// let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
// Si lo inviertes como en la parte A, se pierde un barrio. Escribe otra función que agrupe: cada
// zona debe guardar un array con todos sus barrios.

// Parte A
function invertir(objeto) {
    let resultado = {};
    Object.entries(objeto).forEach(([clave, valor]) => {
        resultado[valor] = clave;
  });
  return resultado;
}

let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
let ciudadesPorCodigo = invertir(codigos);

let codigoBusqueda = prompt("Código:").toUpperCase();
while (codigoBusqueda !== "FIN") {
    if (codigoBusqueda in ciudadesPorCodigo) {
    console.log(codigoBusqueda + ": " + ciudadesPorCodigo[codigoBusqueda]);
  } else {
      console.log("No hay ciudad con el código " + codigoBusqueda);
    }
    codigoBusqueda = prompt("Código:").toUpperCase();
}

// Parte B
function invertirAgrupando(objeto) {
  let resultado = {};
  Object.entries(objeto).forEach(([clave, valor]) => {
    if (valor in resultado) {
        resultado[valor].push(clave);
    } else {
      resultado[valor] = [clave];
    }
});
return resultado;
}

const unirConComas = (lista) => {
    return lista.reduce((texto, elemento, indice) => {
        if (indice === 0) {
            return elemento;
        }

        return texto + ", " + elemento;
    }, "");
};

let zonas = { centro: "A", laplaya: "B", pabloVI: "A" };
let barriosPorZona = invertirAgrupando(zonas);

console.log("Zonas agrupadas:");
Object.entries(barriosPorZona).forEach(([zona, barrios]) => {
    console.log(zona + ": " + unirConComas(barrios));
});