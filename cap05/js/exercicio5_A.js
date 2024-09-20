/*

Elabora um programa que leia o nome de uma fruta e um número. 
O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. 
Utilize o "*" para separar os nomes. 

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    resp.innerHTML = "";

    let inputfruta = frm.inNome.value;
    let inputNumero = frm.inNumber.value;

    for(let i = 1; i < inputNumero; i++){
        resp.innerHTML += inputfruta + " * ";
    }
    
    resp.innerHTML += inputfruta;

    frm.inNome.value = "";
    frm.inNumber.value = "";
})

