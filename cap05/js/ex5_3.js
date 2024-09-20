

// let number

// do{
//     number = Number(prompt("Digite um número: ")); // Lê o número de entrada
//     if(number == 0 || isNaN(number)){       // se 0 numero for 0 ou é inválido
//         alert("Digite um número válido");
//     }
    
// // Enquanto essa condição for verdadeira, o código dentro do "do" será executado.
// } while (number == 0 || isNaN(number)) 
    
// // Código abaixo faz parte do bloco principal após o loop
//     let pares = `Pares entre 1 e ${number}: `

//     for(let i = 2; i <= number; i = i + 2){
//     pares = pares + i + ","
// }

// alert(pares);

// ------------------------------------------------------------------------------------------//

// O programa realiza a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o  triplo. 
// A leitura continua até que o usuário informe o 0 (ou algum valor invlálido). 
// iNICIALMENTE, UMA MENSAGEM ALERTANDO SOBRE A EXECUÇÃO DO PROGRAMA É EXECUTADA.

alert("Digite 0 para sair")

do{
    // Lê o número de entrada
   const number = Number(prompt("Digite um número: "))
   // Condição que verifica se o número é válido 
   if(number == 0 || isNaN(number)){
    // Solicita confirmação do usuário
    const sair = confirm("Confirma Saída?") 

    if(sair){
        break // sai da repetição
    }else{
        continue // Volta ao início do laço
    }
   }

   if(number % 2 == 0){
     alert(`O dobro de ${number} é: ${number*2}`)
   }else{
     alert(`O triplo de ${number} é: ${number*3}`)
   }
} while(true)
    alert("Bye, bye...")