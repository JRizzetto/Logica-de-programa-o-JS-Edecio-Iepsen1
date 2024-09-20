
/*

Elaborar um programa para simular um paquímetro, o qual leia o valor de moédas depositadas em um terminal de estacionamento rotativo.
Se o valor for inferior ao tempo mínimo, exibir a mensagem: "Valor insuficiente".
O programa deve informar o tempo de permanência do veículo no local e o troco (se existir).

Tabela de valores:

Valor R$       Tempo min
1,00               30
1,75               60
3                  120

*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const valorDeposito = Number(frm.inValor.value);


    // CONDIÇÃO TERNÁRIA 

    if(valorDeposito < 1){
        alert("Valor mínimo insuficiente")
        return
    }
    
    valorDeposito < 1.75 ? resp1.innerHTML = "Tempo: 30 min" : 
    valorDeposito < 3 ? resp1.innerHTML = "Tempo: 60 min":
    resp1.innerHTML = "Tempo: 120 min";

    let troco30 = valorDeposito - 1;
    let troco60 = valorDeposito - 1.75;
    let troco120 = valorDeposito - 3;

    valorDeposito < 1.75 ? resp2.innerHTML = `Seu troco é R$ ${troco30.toFixed(2)}` : 
    valorDeposito < 3 ? resp2.innerHTML = `Seu troco é R$ ${troco60.toFixed(2)}` : 
    resp2.innerHTML = `Seu troco é R$ ${troco120.toFixed(2)}`;

})    

// --------------------------------------------------------------

    //IF, ELSE IF, ELSE

/*
    if (valorDeposito < 1){
        alert("Valor insuficiente");
        return
    }

    if (valorDeposito < 1.75){
        resp1.innerHTML = "Tempo: 30 min"
    }else if(valorDeposito < 3){
        resp1.innerHTML = "Tempo: 60 min"
    }else{
        resp1.innerHTML = "Tempo: 120 min"
    }

    if (valorDeposito < 1.75){
        let troco30 = (valorDeposito - 1)
        resp2.innerHTML = `Seu troco é R$ ${troco30.toFixed(2)}`
    }else if(valorDeposito < 3){
        let troco60 = (valorDeposito - 1.75)
        resp2.innerHTML = `Seu troco é R$ ${troco60.toFixed(2)}`
    }else{
        let troco120 = valorDeposito - 3;
        resp2.innerHTML = `Seu troco é R$ ${troco120.toFixed(2)}`
    }
*/