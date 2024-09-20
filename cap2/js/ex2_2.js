const frm = document.querySelector("form");
const respH2 = document.querySelector("h2");
const respH3 = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    const titulo = frm.filme.value; 
    respH2.innerHTML = titulo;

    const duracao = Number(frm.minutos.value);
    const converter = (Math.floor(duracao / 60));
    const resto = (duracao % 60);

    respH3.innerText = `${converter}hora(s) e ${resto} minutos`;
    evt.preventDefault();
})
