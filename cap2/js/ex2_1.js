
// cria referência ao form e ao elemtno h3 (onde será exibido a respota)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado. 
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value; // Obtem o nome digitado no form
    resp.innerText = `Olá ${nome}` // Obtem a resposta do programa
    e.preventDefault() // Evita envio do form
    console.log(frm);
})

// ----------------------------------------------------

const x=10/2*Math.sqrt(9) -4;
console.log(x);