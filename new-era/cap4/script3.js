// Elaborar um programa que leia três lados e verifique se elesp odem ou não formar um triângulo.
// Para formar um triangulo, um dos lados não podem ser mais do que a soma dos outros dois.  
// Caso possa formar um triângulo exiba:
// Equilátero = 3 lados iguais
// Isósceles = 2 lados iguais
// Escaleno = 3 lados diferentes

const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const respText = document.getElementById("respText");
const tespTipo = document.getElementById("tespTipo");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let ladoA = Number(form.inputA.value);
    let ladoB = Number(form.inputB.value);
    let ladoC = Number(form.inputC.value);

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
        respText.innerText = "Não é possível formar um triângulo"
        return;
    }

    if(ladoA === ladoB && ladoB === ladoC) {
        respText.innerText = "Pode formar um triângulo";
        tespTipo.innerText = "Equilátero";
    }else if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        respText.innerText = "Pode formar um triângulo";
        tespTipo.innerText = "Escaleno";
    }else {
        respText.innerText = "Pode formar um triângulo";
        tespTipo.innerText = "Isósceles";
    }

    form.inputA.value = "";
    form.inputB.value = "";
    form.inputC.value = "";
})


