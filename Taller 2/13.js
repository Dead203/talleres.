const tem = parseFloat(prompt("Ingrese la temperatura en °C: "));

if (tem < 23) {
    console.log("Hace frio");
}
else if (tem >= 23 && tem <= 30) {
    console.log("Es un buen dia");
} else {
    console.log("Hace calor");
}