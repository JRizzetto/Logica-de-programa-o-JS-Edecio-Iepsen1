// Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto.
// Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linhas, conforme exemplo de execução do programa, demonstrado a seguir. 

const prompt = require("prompt-sync")();
const nomeProduto = prompt("Nome do produto: ");
const numeroEtiquetas = Number(prompt("Número de etiquetas: "));

console.log(`Produto: ${nomeProduto}`);
console.log(`Número de etiquetas: ${numeroEtiquetas}`)

for(let i = 1; i <= numeroEtiquetas / 2; i++) {
    console.log(`${nomeProduto.padEnd(20)} ${nomeProduto.padEnd(20)}`)
}

if(numeroEtiquetas % 2 != 0) {
    console.log(`${nomeProduto}`)
}