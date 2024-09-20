
/*

Uma famácia necessita de um programa que leia o total de uma compra. 
Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. 
Considere as sequintes considções: 
A - Cada parcela deve ser de, no mínimo, R$ 20.00;
B - O número máximo de parcelas permitidas é 6.

*/

const prompt = require("prompt-sync")();

// Solicitado ao usuário o valor da compra
const totalCompra = Number(prompt("Qual o valor total da compra em R$? "));
let constParcela = Math.floor(totalCompra / 20);

// Condição ternária (if, if else, e else), caso o constParcela seja 0 (valor menor que 20) a parcela será de no mínimo 1, assim também é a lógica da constParcela > 6 ? 6.
const parcela = constParcela == 0 ? 1 : constParcela > 6 ? 6 : constParcela;

console.log(`O valor total é ${parcela}x de ${totalCompra / parcela}`);






