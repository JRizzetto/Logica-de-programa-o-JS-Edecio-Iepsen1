// Digamos que o númnero de chinchilas de uma fazendo triplica a cada ano, após o primeiro ano. 
// Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a no o número médio previsto de chinchilas da fazenda.
// O número inicial de chinchilas deve ser maior ou igual a 2 (um casal).

const form = document.querySelector("form");
const textResp = document.getElementById("textResp");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inicialChichilas = Number(form.numberChinchilas.value);
    let anoTotal = Number(form.NumberYear.value);
    let chinchilasAcumuladas = inicialChichilas;

    for(let i = 1; i <= anoTotal; i++) {
        textResp.innerText += `${i} ano: ${chinchilasAcumuladas} Chinchilas. \n`
        chinchilasAcumuladas *= 3;
    }
})