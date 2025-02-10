/*
Vamos construir um exemplo para explorar alguns dos recursos destacados até esse ponto do capítulo. 
Nosso programa é para a "Revenda Herbie", que vai armazenar em um vetor de objetos o modelo e o preço de carros disponíveis em uma revenda.
map(), filter(), reduce() são utilizados no exemplo. 
*/

// Obeter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = []; // Declara o vetor global

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const modelo = frm.inModelo.value; 
    const preco = Number(frm.inPreco.value);

    carros.push({ modelo, preco})
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    frm.inModelo.focus();

    
})
