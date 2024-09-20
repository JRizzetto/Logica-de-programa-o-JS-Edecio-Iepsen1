/*

Elaborar um programa que leia  um número e verifica se ele é ou não perfeito. 
Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número).
O programa deve exibir os divisores do número e a soma deles.


Um número perfeito é um número natural que é igual à soma de todos os seus divisores, exceto ele próprio. 
Por exemplo, 6 é um número perfeito porque 1 + 2 + 3 = 6, sendo 1, 2 e 3 os divisores de 6.
Exemplos
6 -> 1 + 2 + 3 = 6
28 -> 1 + 2 + 4 + 7 + 14 = 28
496 -> 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496
8128
*/



const frm = document.querySelector("form");
const resp1 = document.querySelector(".resp1");
const resp2 = document.querySelector(".resp2");


frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    let valDivisor = "";
    let valTotal = 0;
    let input = Number(frm.inNumber.value);

    for(let i = 0; i < input; i++){
        if(input % i == 0){
            valTotal = valTotal + i;
            valDivisor += `${i}, `;
        }
    }

    valDivisor = valDivisor.slice(0, -2);

    if(valTotal == input){
        resp1.innerHTML = `Divisores de ${input}: ${valDivisor} (Soma= ${input})`
        resp2.innerHTML = `${input} É um número Perfeito`
    }else{
        resp2.innerHTML = `${input} Não é um número Perfeito`
    }

    frm.inNumber.value = "";
})

