/*
Sabendo o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na frança), 
elabora um programa que leia a hora no Brasil e informe a hora na França.
*/

// Cria uma constante para acessar o formulário e a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um ouvinte para o bot~]ao submite
frm.addEventListener("submit", (evt)=>{
    evt.preventDefault(); // Evita reset na página 

// Cria uma constante das horas no brasil e transforma em number    
const horaBrasil = Number(frm.inHoraBrasil.value);
let horaFranca = horaBrasil + 5;

// Condição para o horário não ser maios do que 24 horas.
if(horaFranca > 24){
    horaFranca = horaFranca - 24;
}

resp.innerHTML = `Hora na Fraçna: ${horaFranca.toFixed(2)}h`

})

