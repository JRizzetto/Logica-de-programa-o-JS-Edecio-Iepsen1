/*

A copa do mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (segunda guerra mundial). 
Construir um programa que repita a leitura de números (anos) até ser digitado 0. 
Informe para cada ano se ele é ou nâo ano de Copa do Mundo. 

*/

// Faz a conexão entre o terminal e o node. 
const prompt = require("prompt-sync")(); 


console.log("Programa anos de copa do mundo, digite 0 para sair:");
console.log("------------------------------------------------");

// Mantem o código rodando até que a condição "zero" seja verdadeira
do{
    // Ano de entrada
    const ano = Number(prompt("Digite um ano: "))
    // Se for digitado 0 ele para de rodar o do
    if(ano == 0){
        break
    // Se o ano digitado for 1942 ou 1946, da aresposta. 
    }else if(ano == 1942 || ano == 1946){
        console.log("Esse ano não teve copa devido a guerra")
    // Se o ano for maior que 1930 e o ano dividido por 4 restar 2, é a condição de ano de copa. 
    }else if(ano >= 1930 && ano % 4 == 2){
        console.log("É ano de copa do mundo!")
    // Se não, o restante não é ano de copa.
    }else{
        console.log("NÃO é ano de copa!")
    }
// Mantem a condição enquanto o "do" for verdadeiro. 
} while(true);
