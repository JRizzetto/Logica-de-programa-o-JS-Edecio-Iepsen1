const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault(); // Não deixa a página carregar e perder os dados;

    // Cria uma constante para guardar o valor do input; 
    const numeroInput = Number(frm.inNumero.value);

    const raizQuadrada = Math.sqrt(numeroInput);
    
    // const resto = numeroInput % raizQuadrada;

    // if(resto == 0){
    //     resp.innerHTML = `A raiz quadrada é: ${raizQuadrada}`
    // }else{
    //     resp.innerHTML = `Não há raiz exata para ${numeroInput}`
    // }

    if(Number.isInteger(raizQuadrada)){
        resp.innerHTML = `A raiz quadrada é: ${raizQuadrada}`
    }else{
        resp.innerHTML = `Não há raiz exata para ${numeroInput}`
    }

})