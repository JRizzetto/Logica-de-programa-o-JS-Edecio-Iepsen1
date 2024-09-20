/*

Recerber um número e informar se ele é ou não número primo.
Número primo é aquele que só existem dois divisores, 1 e ele mesmo. 
Faremos o uso de uma variável contadora. 

*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

        const valor = Number(frm.inNumber.value);
        // Declara e inicializa o contador 
        let contador = 0;

        // Percorre todos os possíveis divisores de "valor"
        for(let i = 1; i <= valor; i++){
            if(valor % i == 0){
                contador++;
            }
        }
    // Se o contador obteve duas respostas do laço (1 e o próprio número), podemos usar a condição:          
    if(contador == 2){
        resp.innerHTML = `${valor} É primo`
    }else{
        resp.innerHTML = `${valor} Não é primo` 
    }


    // Declara e inicializa a variável tipo flag
    let temDivisor = 0;

    // Percorre possíveis divisores do "valor"
    for(let i = 2; i <= valor / 2; i++){
        // Se tem um divisor:
        if(valor % i == 0){
            temDivisor = 1;
            break;
        }
    }

    // Se "valor" > 1 e não possui divisor
    if(valor > 1 && !temDivisor){
        resp.innerText = `${valor} É primo`
    }else{
        resp.innerText = `${valor} Não é primo`
    }
})