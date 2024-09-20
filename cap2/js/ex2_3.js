const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit", (evt)=>{
    const modelo = frm.type.value;
    const preco = Number(frm.price.value);
    const entrada = preco/2;
    const parcela = entrada/12;

    resp1.innerText = `Promoção: ${modelo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;

    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    evt.preventDefault();
})
