/*

Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a permitida, exiba Sem multa".
Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve".
Se a velocidade for superior a 20% da velocidade permitida, "Multa Grave".

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const velocidadePermitida = Number(frm.inPermitida.value);
    const velocidadeCondutor = Number(frm.inCondutor.value);

    let semMulta = "Dentro da velocidade, sem multa"
    let leve = "Multa Leve"
    let grave = "Multa Grave"

    const multaLeve = velocidadePermitida * 1.2;

    resp.innerHTML = 
    velocidadeCondutor <= velocidadePermitida ? semMulta : 
    velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= multaLeve ? leve :
    grave;


// CONDIÇÃO COM IF
// ----------------------------------------------------------------------------------------------------------------
    
    if(velocidadeCondutor <= velocidadePermitida){
        resp.innerHTML = "SEM MULTA"
    }else if(velocidadeCondutor <= multaLeve){
        resp.innerHTML = "MULTA LEVE"
    }else{
        resp.innerHTML = "MULTA GRAVE"
    }

})

