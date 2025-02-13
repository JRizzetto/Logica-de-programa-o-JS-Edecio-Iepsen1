
const form = document.querySelector("form");
const textErros = document.getElementById("textErros");
const textChances = document.getElementById("textChances");
const textDicas = document.getElementById("textDicas");

let randomNumber = parseInt(Math.random()*100);
let wrongNumber = [];
let wrongCount = 0;
let chanceCount = 6;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputNumber = Number(form.inNumero.value);

    if(!inputNumber) {
        alert("Input vazio não é válido!");
    }

    if(wrongNumber.includes(inputNumber)) {
        alert("Você já chutou esse número!")
        return;
    }

    if(inputNumber === randomNumber) {
        textDicas.innerHTML = `PARABÉNS! Você acertou, o número sorteado é ${randomNumber}`
        form.btSubmit.disabled = true;
        form.btNovo.disabled = false;
    }    

    if(inputNumber != randomNumber) {
        wrongNumber.push(inputNumber);
        wrongCount++
        chanceCount--
        textErros.innerHTML = `Erros: ${wrongCount}`;
        textChances.innerHTML = `Chances: ${chanceCount}`;
        if(wrongCount === 6) {
            alert(`Suas chances acabaram, o número é ${randomNumber}. Tente novamente!`)
            form.btSubmit.disabled = true;
            form.btNovo.disabled = false;
        }
    }

    console.log(wrongNumber)
    form.inNumero.value = "";
})

console.log(randomNumber)

form.btNovo.addEventListener("click", () => {
    randomNumber = parseInt(Math.random()*100);
    textDicas.innerHTML = "É um número de 1 a 100";
    textErros.innerHTML = `Erros: 0`;
    textChances.innerHTML = `Chances: 6`;
    wrongNumber = [];
    form.btSubmit.disabled = false;
    form.btNovo.disabled = true;
    console.log(randomNumber);
    console.log(wrongNumber)
})

