/*

O programa faz a leitura de contas que devem ser pagas por um usuário.
As coontas são exibidas e no final da listagem o número de contas (contador)
e a soma dos valores (acumulador) são destacados.

*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// String com a resposta a ser exibida;
let resposta = ""; 
// Inicia contador...
let numContas = 0;
// Inicia Acumulador (variáveis globais)
let valTotal = 0;

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    // Adiciona valores ao contador e acumulador 
    numContas++; // Ou "valTotal += valor"
    valTotal = valTotal + valor;
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    resp1.innerHTML = `${resposta}---------------------------------------`;
    resp2.innerHTML = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;

    // limpa campos do form
    frm.inDescricao.value = "";
    frm.inValor.value = "";
    // Posiciona no campo inDescricao do form. 
    frm.inDescricao.focus();
})

