// Elaborar um programa para uma loja que leia um valor de uma conta e o número de vezes que um cliente deseja esse valor (em boletos ou carne).
// para facilitar o TransformStreamDefaultController, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na últimas parcela.
// Informe como resposta o valor de cada parcela, considerando essa situação.

const prompt = require("prompt-sync")();
const valorConta = Number(prompt("Qual o valor da conta: "));
const numeroParcelas = Number(prompt("Número de parcelas: "));

console.log(`Valor da conta: ${valorConta}`);
console.log(`Número de parcelas: ${numeroParcelas}`);

let resultparcela = Math.floor(valorConta / numeroParcelas);
let ultimaParcela = valorConta - (resultparcela * numeroParcelas);

for(let i = 1; i < numeroParcelas; i++) {
    console.log(`${i} parcela: R$ ${resultparcela}`)
}

console.log(`${numeroParcelas} parcela: R$ ${(resultparcela + ultimaParcela).toFixed(2)}`);