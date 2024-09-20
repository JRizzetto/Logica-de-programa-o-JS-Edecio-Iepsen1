/*

Elabore um programa que leia um número - que deve ser uma centena. 
Caso o número não seja uma centena, exiba a mensagem.
Se for, calcule e exiba a centena investida. 

*/


const prompt = require("prompt-sync")();

const numInput = Number((prompt("Digite um número de 100 a 999: ")));

if (numInput < 100 || numInput > 999){
    console.log("Erro... Digite uma centena")
    return
}

let num1 = Math.floor(numInput / 100);
let num2 = Math.floor((numInput % 100)/10);
let num3 = Math.floor((numInput % 100)%10);

console.log(num1)
console.log(num2)
console.log(num3)
