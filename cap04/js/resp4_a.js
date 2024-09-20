
/*

Elaborar um programa que leia um número. Informe se ele é par ou impar.
Faça com if...else.... tradicional e, após, tente criar a condição com operador ternário.

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const inInput = Number(frm.inNum.value);
    
    let par = "Esse númeor é PAR!"
    let impar = "Esse número é IMPAR!"
    let condicao = (inInput % 2 == 0)

    resp.innerHTML = condicao ? par : impar;

})

    // if(inInput % 2 == 0){
    //     resulFinal = resp.innerHTML = "Esse númeor é PAR!"
    // }else{
    //     resulFinal = resp.innerHTML = "Esse número é IMPAR!"
    // }