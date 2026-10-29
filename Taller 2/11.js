const pFruta = parseFloat(prompt("Ingrese el peso de la fruta en kg: "));



if (pFruta > 5) {
    const pGramos = pFruta * 1000;
    console.log(`El peso de la fruta en gramos es: ${pGramos}`);
} else {
    const pLibras = pFruta * 2;
    const pOnzas = pLibras * 16;
    console.log(`El peso de la fruta en onzas es: ${pOnzas}`);
} 