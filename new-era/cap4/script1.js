// Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
// Se a velocidade for inferior ou ígual a permitida, exiba "sem multa."
// Se a velocidade for de até 20% maior que a permitida, exiba, "multa Leve".
// Se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".

const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const textP = document.getElementById("respText");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let velocidadePermitida = Number(form.inputPermitida.value);
    let velocidadeCondutor = Number(form.inputCondutor.value);

    if(velocidadeCondutor <= velocidadePermitida) {
        textP.innerText = "Sem multa";
    }else if (velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= (velocidadePermitida * 1.2)) {
        textP.innerText = "Multa LEVE";
    }else {
        textP.innerText = "Multa GRAVE";
    }

    form.inputPermitida.value = "";
    form.inputCondutor.value = "";
})