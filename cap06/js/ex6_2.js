// Observe o exemplo a seguir, contendo um vetor com a idade de crianças, que ilustra o funcionamento desses métodos. 

// const idades = [5, 6, 8, 3, 6, 9];

// console.log(idades.indexOf(6)); // retorna 1 (posição do array)
// console.log(idades.lastIndexOf(6)); //  retorna 4 (posição do array de trás para frente)
// console.log(idades.indexOf(7)) // retorna -1 (não existe no array)
// console.log(idades.includes(3)) // retorna true (existe no array)


/*

O programa utiliza a função matemática Math.random() discutida na seção 2.8, para gerar um número aleatório entre 1 e 100 que deve ser descoberto pelo usuário.
Para evitar que um jogador aposte no número 2x (e perca uma chance), faz-se o uso do método includes(). O código HTML desse jogo exibe um campo de entrada e três linhas para a exibição de mensagens: o número de erros e o vetor erros, o número de cnahces ainda disponível para o jogador e as dicas para auxiliar na descoberta do número. 

*/

const frm = document.querySelector("form");
const respErros = document.querySelector(".erros");
const respChances = document.querySelector(".chances");
const respDica = document.querySelector(".dica");

// Vetor de escobo global com os números já apostados
const erros = []; 
// Numero aleatório entre 1 e 100. 
const sorteado = Math.floor(Math.random()*100 + 1);
// Constante com o número máximo de chances
const CHANCES = 6;

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const numero = Number(frm.inNumber.value);

    if(numero == sorteado){
        respDica.innerHTML = `Parabéns! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){ // Se o número já existir no vetor erros
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        }else{
            erros.push(numero) // Adiciona o número no vetor 
            const numErros = erros.length; // Obtem o tamanho do vetor
            const numChances = CHANCES - numErros // Calcula o número de chances
            // Exibe número de erros, conteúdo do vetor e número de chances 
            respErros.innerHTML = `Erros: ${numErros} (${erros.join(", ")})`
            respChances.innerHTML = `Chances: ${numChances}`;

            if(numChances == 0){
                alert("Suas chances acabaram");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe"
                respDica.innerHTML = `Game Over!! Número sorteado: ${sorteado}`
            }else{
                // Usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerHTML = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumber.value = "";
    frm.inNumber.focus();
    
    frm.btNovo.addEventListener("click", ()=>{
        location.reload()
    })
})


