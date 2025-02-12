// A copa do mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (segunda guerra mundial). COnstruir um programa que repita a leitura de números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de copa do mundo. 
const prompt = require("prompt-sync")();
console.log("Programa anos da copa do mundo, digite 0 para sair");
console.log("-------------------------------------------------")

do {
    const ano = Number(prompt("Ano: "));
    if(ano == 0) {
        break
    }else if (ano === 1942 || ano === 1946) {
        console.log(`Não houve copa no ano de ${ano}`)
    }else if(ano >=1930 && ano % 4 == 2) {
        console.log(`Sim! O ano de ${ano} foi ano de copa`)
    }else {
        console.log(`Não! ${ano} não foi ano de copa`)
    }
}while(true);