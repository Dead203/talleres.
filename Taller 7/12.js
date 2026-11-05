// Ordena las edades de mayor a menor. Después elimina la edad más joven y agrega una nueva edad
// (19) al final.

const edades = [15, 32, 8, 21, 40];

edades.sort((a, b) => b-a);
console.log(`Ordenado: ${edades.join(", ")}`);
edades.pop();
console.log(edades.join(", "));
edades.push(19);
console.log(edades.join(", "));