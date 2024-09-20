/*

Ler um número no input e apresentar a tatuada desse número. 

*/

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const numero = Number(frm.inNumero.value);

    let resposta = "";

    for(let i = 0; i <= 10; i++){
     
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`

    }
    resp.innerHTML = resposta;
})