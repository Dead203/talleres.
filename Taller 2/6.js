const c1 = parseInt(prompt("Ingrese la distancia recorrida (km) en la primera carrera"));

const c2 = parseInt(prompt("Ingrese la distancia recorrida (km) en la segunda carrera"));

const c3 = parseInt(prompt("Ingrese la distancia recorrida (km) en la tercera carrera"));

const prom = (c1 + c2 + c3) / 3

console.log(`el promedio es de: ${prom}`)

if (prom > 12) {
    console.log("Excelente distancia")
} else {
    console.log("Debes mejorar")
}