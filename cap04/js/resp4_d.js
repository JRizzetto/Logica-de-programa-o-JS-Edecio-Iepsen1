/*

Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois lados. 
Caso possma formar um triãngulo, exiba também qual o tipo de triângulo.

Equilátero: 3 lados iguais.
Isósceles: 2 lados iguais 
Escaleno: 3 lados diferentes. 

*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const ladoA = Number(frm.inNumberA.value);
    const ladoB = Number(frm.inNumberB.value);
    const ladoC = Number(frm.inNumberC.value);

    let equilatero = (resp1.innerHTML = "Os lados podem formar um triângulo", resp2.innerHTML = "Tipo: Equilátero");
    let isosceles = (resp1.innerHTML = "Os lados podem formar um triângulo", resp2.innerHTML = "Tipo: Isósceles");
    let escaleno = (resp1.innerHTML = "Os lados podem formar um triângulo", resp2.innerHTML = "Tipo: Escaleno");
        
    if((ladoA > (ladoB + ladoC)) || (ladoB > (ladoA + ladoC)) || (ladoC > (ladoB + ladoA))){
        resp1.innerHTML = "NÃO FORMA TRIÂNGULO"
        resp2.innerHTML = ""
        return;
    }
    (ladoA == ladoB && ladoB == ladoC) ? equilatero : 
    ((ladoA == ladoB && ladoB != ladoC) || (ladoA == ladoC && ladoC != ladoB) || (ladoC == ladoB && ladoB != ladoA)) ? isosceles: 
    escaleno;    

})



/*    
    if((ladoA > (ladoB + ladoC)) || (ladoB > (ladoA + ladoC)) || (ladoC > (ladoB + ladoA))){
        resp1.innerHTML = "NÃO FORMA TRIÂNGULO"
        resp2.innerHTML = ""
        return;
    }

    if(ladoA == ladoB && ladoB == ladoC){
        resp1.innerHTML = "Os lados pode formar um triângulo"
        resp2.innerHTML = "Tipo: Equilátero"
    }else if((ladoA == ladoB && ladoB != ladoC) || (ladoC == ladoB && ladoB != ladoA) || (ladoA == ladoC && ladoC != ladoC)){
        resp1.innerHTML = "Os lados pode formar um triângulo"
        resp2.innerHTML = "Tipo: Isósceles"
    }else{
        resp1.innerHTML = "Os lados pode formar um triângulo"
        resp2.innerHTML = "Tipo: Escaleno"      
    }

*/    