// const frm = document.querySelector("form");
// const resp1 = document.querySelector("h3");


// frm.addEventListener("submit", (evt)=>{
//     const nome = frm.inNome.value;
//     const altura = Number(frm.inAltura.value);
//     const masculino = frm.inMasculino.checked;
    
//     let peso;

//     if(masculino){
//        peso = 22*(altura*altura);
//     }else {
//         peso = 21*(altura*altura);
//     }
    
//     resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`;

//     evt.preventDefault();
// })

// frm.addEventListener("reset", ()=>{
//     resp1.innerText = "";
// })


const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (evt)=>{
    const nome = frm.inNome.value;
    const altura = Number(frm.inAltura.value);
    const masculino = frm.inMasculino.checked;
    
    let peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2);
    
    resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`;

    evt.preventDefault();
})

frm.addEventListener("reset", ()=>{
    resp1.innerText = "";
})