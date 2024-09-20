const frm = document.querySelector("form");
const resp1 = document.querySelector(".valorPagar");

frm.addEventListener("submit", (evt)=>{
    const precoBuffet = Number(frm.inPreco.value);
    const gramasConsumo = Number(frm.inConsumo.value);

    const total = precoBuffet*(gramasConsumo*0.001);

    resp1.innerHTML = `Valor a pagar R$: ${total.toFixed(2)}`;
    

    evt.preventDefault();
})