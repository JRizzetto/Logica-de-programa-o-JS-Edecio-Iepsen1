// 3.4-A
// let salarioInicial = 2000;
// let tempo = 12; 
// let acrescimo = Math.floor(tempo / 4); 
// for(let i = 1; i <= acrescimo; i++) {
//     let result = (salarioInicial * 1.01 - salarioInicial);
//     salarioInicial += result;
//     console.log(result);
// }
// console.log(salarioInicial.toFixed(2));

// 3.4-B
let pesoRacao = 3; //Kilos 
let consumogato = 400; //Gramas por dia
let pesoRacaoGramas = pesoRacao * 1000;
let consumoFinal = Math.floor(pesoRacaoGramas / consumogato);
let sobreaRacao = pesoRacaoGramas % consumogato;

console.log(`A ração irá durar ${consumoFinal} dias e irá sobrar ${sobreaRacao} gramas`)

