// Cria um caminho para acessar o documento HTML daquele elemento. 
const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    // Guarda o valor solicitado pelo cliente dentro de uma constante 
    const valorSolicitado = Number(frm.inSaque.value);

    // Guarda o resultado da função dentro de uma variável, no caso, usamos a divisão e o reto para cada nota. Também, o Math.floor para arredondar o valor para baixo.  
    let notaCem = Math.floor((frm.inSaque.value / 100));
    let notaCinquenta = Math.floor((frm.inSaque.value % 100)/50);
    let notaDez = Math.floor(((frm.inSaque.value%100)%50)/10);
    
    // Cria uma resposta para os elementos do HTML
    if(notaCem>0){
        resp1.innerHTML = `Notas de R$ 100,00: ${notaCem}`;
    }

    if(notaCinquenta>0){
        resp2.innerHTML = `Notas de R$ 50,00: ${notaCinquenta}`;
    }
    
    if(notaDez>0){
        resp3.innerHTML = `Notas de R$ 10,00: ${notaDez}`;
    }
    
    
    // cria uma condição para notas que não existem no caixa. 
    let restoDez = frm.inSaque.value % 10;

    // Condição para informar ao cliente que não existe aquele valor disponível 
    if (restoDez != 0){
        resp1.innerHTML = "Não há notas disponíveis para esse valor"
        resp2.innerHTML = ""
        resp3.innerHTML = ""
    }

    if(frm.inSaque.value % 10 !=0){
        alert("Valor inválido para as notas disponível (10, 50, 100)");
        frm.inSaque.focus(); // O cursor será colocado automaticamente no campo de entrada onde o usuário deve inserir um novo valor
        return; // Encerra a função e o evento submit. 
       }

})

