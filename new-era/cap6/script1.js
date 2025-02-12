// Nosso programa deve controlar a lista de pacientes de um consultório odontológico, como se fosse um painel
// em exposição em uma tv do consultório.

const form = document.querySelector("form");
const textErros = document.getElementById("textErros");
const textChances = document.getElementById("textChances");
const textDicas = document.getElementById("textDicas");

const randomNumber = parseInt(Math.random()*100);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputNumber = Number(form.inNumero.value);

    if(!inputNumber) {
        alert("Input vazio não é válido!");
    }

    if(inputNumber === randomNumber) {
        textDicas.innerHTML = `PARABÉNS! Você acertou, o número sorteado é ${randomNumber}`
        form.btSubmit.disabled = true;
        form.btNovo.disabled = false;
    }    
})

console.log(randomNumber)