// Nosso programa deve controlar a lista de pacientes de um consultório odontológico, como se fosse um painel
// em exposição em uma tv do consultório.

const form = document.querySelector("form");
const btUrgencia = document.getElementById("btUrgencia");
const btAtender = document.getElementById("btAtender");
const textAtendimento = document.getElementById("textAtendimento");
const textResp = document.getElementById("textResp");


const arrayInput = []

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputName = form.pacienteInput.value
    arrayInput.push(inputName);
    form.pacienteInput.value = "";

    console.log(arrayInput)

})



