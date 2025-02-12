// Nosso programa deve controlar a lista de pacientes de um consultório odontológico, como se fosse um painel
// em exposição em uma tv do consultório.

const form = document.querySelector("form");
const textAtendimento = document.getElementById("textAtendimento");
const textResp = document.getElementById("textResp");

const arrayInput = []

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputName = form.pacienteInput.value;
    arrayInput.push(inputName);
    let lista = "";

    for(let i = 0; i < arrayInput.length; i++) {
        lista += `${i + 1}. ${arrayInput[i]} \n`
    }

    textResp.innerHTML = lista;
    form.pacienteInput.value = "";
})


form.btUrgencia.addEventListener("click", () => {
    let inputName = form.pacienteInput.value;
    arrayInput.unshift(inputName);
    let lista = "";

    arrayInput.forEach((nome, index) => {
        lista += `${index + 1}. ${nome}\n`
    })

    textResp.innerHTML = lista;
    form.pacienteInput.value = "";
})

form.btAtender.addEventListener("click", () => {
    let inputName = form.pacienteInput.value;
    let arraySplice = arrayInput.splice(0, 1)
    let lista = "";

    arrayInput.forEach((nome, index) => {
        lista += `${index + 1}. ${nome}`
    })

    textAtendimento.innerHTML = `Em atendimento: ${arraySplice}`
    textResp.innerHTML = lista;
    form.pacienteInput.value = "";
})
