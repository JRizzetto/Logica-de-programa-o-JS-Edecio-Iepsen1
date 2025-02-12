// Elaborar um programa que leia um número e verifique se ele é ou náo é perfeito. 
// Um número dito perfeito é aquele que é igual à soma dos seus divisorres inteiros (exceto o próprio número).
// O programa deve exibir os divisores do número e a soma deles. 

const form = document.getElementById("form");
const textResp = document.getElementById("textResp");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputNumber = Number(form.numeroPerfeito.value);

    let resto = 0;
    let acumulador = "";

    for(let i = 1; i < inputNumber; i++) {
        if(inputNumber % i === 0) {
            resto += i;
            acumulador += `${i}, `;
        }
    }

    if(resto === inputNumber) {
        textResp.innerText = `Divisores de ${inputNumber}: ${acumulador} (soma: ${resto}) \n ${inputNumber} é um número perfeito`
    }else {
        textResp.innerText = `${inputNumber} NÃO é um número primo`
    }

    console.log(resto);
    console.log(acumulador);
})
