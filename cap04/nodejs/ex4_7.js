// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

/*
A entrada de um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. 
Peixes extras custam R$ 12,00. 
Elabora um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. 
Informe o valor a pagar
*/

const numPessoas = Number(prompt("Qual o número de pessoas? "));
const numPeixes = Number(prompt("Quantos peixes estão levando? "));

// let entrada = 200;
// let peixe = 12;
// let desconto = numPessoas * 12;

// const valorPessoas = (entrada*numPessoas);
// const valorPeixes = (peixe*numPeixes);

// const valorTotal = (valorPessoas + valorPeixes - desconto).toFixed(2);

// console.log("O valor total a paga é R$: " + valorTotal);

let valorPagar;

if(numPeixes > numPessoas){
    valorPagar = (numPessoas * 20) + (numPeixes * 12-(numPessoas*12));
} else{
    valorPagar = (numPessoas * 20);
}

console.log(`Valor total a pagar é R$ ${valorPagar.toFixed(2)}`);