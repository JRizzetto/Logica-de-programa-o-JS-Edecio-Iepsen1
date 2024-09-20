/*

O programa deve ler um número que corresponde a quantidade de símbolos que devem ser preenchidos (em cheque ou em boleto bancário por exemplo). 
O preenchimento deve intercalar os caracteres "*" e "_".

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
  
    const inEntrada = Number(frm.inNumber.value);
    let resposta = "";

    for(let i = 0; i <= inEntrada; i++){
        if(i % 2 == 0){
            resposta += "*"
        }else{
            resposta += "_"
        }
    }
    
    resp.innerHTML = resposta;
})



