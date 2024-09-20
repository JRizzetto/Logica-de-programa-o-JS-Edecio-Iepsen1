const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    
    const valorInput = Number(frm.inNumero.value);
    evt.preventDefault();

    // let resposta = `Entre ${valorInput} e 1: `;

    // for(let i = valorInput; i > 1; i--){
    //     resposta = resposta + i + ",";
    // }

    // resp.innerHTML = resposta + "1. "

    let resposta = `Entre ${valorInput} e 1: ${valorInput}`
    
    for(let i = valorInput - 1; i > 0; i--){
        resposta = resposta + ", " + i;
    }

    resp.innerHTML = resposta;
})