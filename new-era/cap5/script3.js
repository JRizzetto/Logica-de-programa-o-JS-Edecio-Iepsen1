// Elabora um programa que leia o nome de uma fruta e um número.
// O programa deve repetir a exibição do nome da fruta, de acordo com o número informado.
// Utilize o "*" para separar os nomes.

const form = document.querySelector("form");
const textResp = document.getElementById("textResp");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputNumber = Number(form.numberInput.value);

    for(let i = 1; i <= inputNumber; i++) {
        if(i === inputNumber){
            textResp.innerText += ` ${form.textInput.value}`
        }else {
            textResp.innerText += ` ${form.textInput.value} * `
        }
    }    
})