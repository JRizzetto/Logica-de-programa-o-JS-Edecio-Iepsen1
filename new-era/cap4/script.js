// Elaborar um programa que leia um número. 
// Informe se ele é par ou ímpar, Faça com if...else... tradicional, após, tente criar com operador ternário.

const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const textP = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formImpout = Number(form.inputValue.value);
    if(formImpout % 2 === 0) {
        console.log("O número é par")
    }else {
        console.log("O número é Impar")
    }
    form.inputValue.value = "";

    let resultTernario = formImpout % 2 === 0 ? "Par" : "Impar";
    console.log(resultTernario);
})

