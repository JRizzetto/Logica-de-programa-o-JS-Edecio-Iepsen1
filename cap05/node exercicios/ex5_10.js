/*

Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar ese valor (em boletos ou carnê). 
Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. 
Informe como resposta o valor de cada parcela, considerando essa situação. 

*/

const prompt = require("prompt-sync")();

const valorConta = Number(prompt("Valor da conta: "));
const numeroParcela = Number(prompt("Quantidade de parcela: "));

if(numeroParcela > 1){
    console.log(`Valor total: R$ ${valorConta.toFixed(2)}`);
    console.log(`Numero de parcelas: R$ ${numeroParcela}`);

    let resultado = Math.floor(valorConta/numeroParcela);
    let resto = valorConta - (Math.floor(valorConta/numeroParcela))*numeroParcela;
    let ultimaParcela = resultado + resto;

    for(let i = 1; i < numeroParcela; i++){
        console.log(`${i}ª parcela: R$ ${(resultado).toFixed(2)} `);
    }

    console.log(`${numeroParcela}ª parcela: R$ ${(ultimaParcela).toFixed(2)} `)
}

