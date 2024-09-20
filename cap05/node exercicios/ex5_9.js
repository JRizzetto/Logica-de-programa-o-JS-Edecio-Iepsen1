/*

Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. 
Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha, conforme exmplo.   

*/

const prompt = require("prompt-sync")(); 

const produto = prompt("Digite o nome do produto: ");
const numEtiquetas = Number(prompt("Digite a quantidade de etiquetas: "));

console.log(`Produto = ${produto}`)
console.log(`Números de etiqueta = ${numEtiquetas}`)

for(let i = 1; i <= numEtiquetas/2; i++){
    console.log(`${produto.padEnd(15)} ${produto.padEnd(15)}`);
}

if(numEtiquetas % 2 == 1){
    console.log(produto);
}
