const edadJ = parseInt(prompt("Digite la edad de Juan"));

const edadM = edadJ * (2/3);

const edadMa = edadM * (4/3);

const edadMj = edadM + edadJ + edadMa;

console.log(`La edad de Juan es: ${edadJ}`);
console.log(`La edad de Miguel es: ${edadM}`);
console.log(`La edad de Margarita es: ${edadMa}`);
console.log(`La edad de la mamá Juan es: ${edadMj}`);