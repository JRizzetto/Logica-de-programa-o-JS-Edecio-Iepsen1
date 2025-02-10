// Elaborar um programa para simular um parquímetro, oqual leia o valor de moedas depositada em um terminal de estacionamento rotativo.
// O programa deve informar o tempo de permanência do veículo no local e o trco (se existir), como no exemplo da figura.
// Se o valor for inferior ao tempo mínimo, exiba a mensgaem "Valor insuficiente".

const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const respTempo = document.getElementById("respTempo");
const respTroco = document.getElementById("respTroco");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputValue = Number(form.inputPermitida.value);

    if(inputValue < 1) {
        alert("Valor insuficiente")
        return
    }else if(inputValue >= 3) {
        respTempo.innerText = "Seu tempo é 120min";
        respTroco.innerText = `Seu troco é ${inputValue - 3}`
    }else if(inputValue >= 1.75) {
        respTempo.innerText = "Seu tempo é 60min";
        respTroco.innerText = `Seu troco é ${inputValue - 1.75}`
    }else if(inputValue >= 1) {
        respTempo.innerText = "Seu tempo é 30min";
        respTroco.innerText = `Seu troco é ${inputValue - 1}`
    }

    form.inputPermitida.value = "";
})

