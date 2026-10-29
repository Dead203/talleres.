const vHora = parseInt(prompt("Ingrese el valor por horas trabajadas: "));
const horas = parseInt(prompt("Ingrese el numero de horas trabajadas: "));

const salario = vHora * horas;

if (salario < 400000) {
    const rp = salario * 0.03;
    const rs = salario * 0.05;
    const sNeto = salario - rp - rs;
    console.log(`El salario neto del empleado es de ${sNeto}`);
}
else if (salario > 800000) {
    const rp = salario * 0.04;
    const rs = salario * 0.07;
    const sNeto = salario - rp - rs;
    console.log(`El salario neto del empleado es: ${sNeto}`);
} else {
    const rp = salario * 0.09;
    const rs = salario * 0.07;
    const sNeto = salario - rp - rs;
    console.log(`El salario del empleado es de: ${sNeto}`);
}