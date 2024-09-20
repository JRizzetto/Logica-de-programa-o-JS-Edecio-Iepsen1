/*

Digamos que o numero de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. 
Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. 
O número inicial de chinchilas deve ser maior ou igual a 2 (casal).

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    let inputChinchila = frm.inChinchilas.value;
    let inputAno = frm.inAnos.value;

        for(let i = 1; i <= inputAno; i++){
            resp.innerHTML += `${i}º Ano: ${inputChinchila} Chinchilas<br>`;
        inputChinchila = inputChinchila * 3;
    }
})