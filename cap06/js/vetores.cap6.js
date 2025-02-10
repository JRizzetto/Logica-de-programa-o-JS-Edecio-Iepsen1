// const cidades = ["Pelotas"]; // Declara e define conteúdo inicial do vetor. 
// console.log(cidades); // = [ 'Pelotas' ]

// cidades.push("São Lourenço") // Adiciona cidade no final do vetor.
// console.log(cidades); // = [ 'Pelotas', 'São Lourenço' ]

// cidades.unshift("Porto Alegre") // Adiciona ao início e desloca as demais.
// console.log(cidades); // = [ 'Porto Alegre', 'Pelotas', 'São Lourenço' ]

// const ultima = cidades.pop() // remove a última cidade do vetor.
// console.log(cidades) // = [ 'Porto Alegre', 'Pelotas' ]

// const primeira = cidades.shift(); // Remove a primeira e "sobe" as demais. 
// console.log(cidades); // = [ 'Pelotas' ]

// const letras = ["A", "B", "C", "D"] // Declara e define conteúdo inicial no vetor 
// console.log(letras); // [ 'A', 'B', 'C', 'D' ]

// const letras2 = letras.slice(-2) // Obtém 2 últimas letras
// console.log(letras2); // [ 'C', 'D' ]

// const letras3 = letras.slice(0, -1) // Obtém o início até o final , exceto a última
// console.log(letras3); // [ 'A', 'B', 'C' ]

// const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]
// for (let i = 0; i < cidades.length; i++){
//     console.log(cidades[i]);
// }

// console.log("_".repeat(40));
// console.log(cidades.toString());
// console.log(cidades.join(" - "));

// ---------------------------------------------------------------------

// const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]

// for(const cidade of cidades){
//     console.log(cidade); // Pelotas, São Lourenço, Porto Alegre
// }

// // ---------------------------------------------------------------------

// cidades.forEach((cidade, i)=>{
//     console.log(`${i+1}ª Cidade: ${cidade}`)
// // 1ª Cidade: Pelotas
// // 2ª Cidade: São Lourenço
// // 3ª Cidade: Porto Alegre
// })

// // ---------------------------------------------------------------------

// const numeros = [5, 10, 15, 20];
// let soma = 0;
// numeros.forEach(num => soma += num);
// console.log(`Soma dos números: ${soma}`) // Soma dos números: 50

// ------------------------------------------------------------------------

// const carros = [];
// carros.push({modelo: "Sandero", preco: 46500})
// carros.push({modelo: "Palio", preco: 37800})
// for(const carro of carros){
//     console.log(`${carro.modelo} - R$: ${carro.preco}`)
// }

// // ------------------------------------------------------ //

// const carros1 = [];
// const modelo = "Fiesta"
// const preco = 46800;
// carros1.push({modelo, preco})

// for(const carro of carros1){
//     console.log(carros1);
// }

// Desestruturação com Rest 
// const pacientes = ["Ana", "Carlos", "João", "Sofia"];
// const [atender, proximo, ...outros] = pacientes

// console.log(atender); // Ana
// console.log(proximo); // Carlos
// console.log(outros); // [ 'João', 'Sofia' ]


// // Operador Spread 
// const carro = {mode: "Corsa", preco: 59500}
// const carro2 = {...carro, ano: 2020}
// console.log(carro2)
// // { mode: 'Corsa', preco: 59500, ano: 2020 }


// let pacientes = ["João", "Sofia"]
// pacientes = ["Ana", ...pacientes]
// console.log(pacientes) // [ 'Ana', 'João', 'Sofia' ]
// pacientes = [...pacientes, "Maria"]
// console.log(pacientes) // [ 'Ana', 'João', 'Sofia', 'Maria' ]

// const texto = "Aprendendo JavaScript";

// const parteTexto = texto.slice(2, 5); // "Aprendendo"
// console.log(parteTexto);

// // O script a seguir apresenta as idades que possuem valor maior ou igual a 18 e armazena no vetor. 
// const idades = [12, 20, 15, 17, 14, 22, 25]
// for(const idade of idades){
//     if(idade >= 18){
//         console.log(idade); // 20 22 25
//     }
// }

// Para apresentar uma mensagem caso não tenha idade >18, não podemos usar o else pois o for se repete por várias vezes. 
// Podemos utlizar um variável de controle (flag ou sinalizador) que recebe um valor inicial antes da repetição.

// const idades = [12, 16, 15, 17, 14]
// let maiores = false;
// for(const idade of idades){
//     if(idade >= 18){
//         console.log(idade)
//         maiores = true
//     }
// }
// if(!maiores){
//     console.log("Não há idade maiores que 18 na lista")
// }

// Método map()
// const numeros = [10, 13, 20, 8, 15]; // Vetor inicial 
// const dobros = numeros.map(num => num*2); // Cada número é obtido e multiplicado por 2, criando um novo array.
// console.log(dobros.join(", ")); // 20, 26, 40, 16, 30

// const amigos = [{nome: "Ana", idade: 20}, 
//                 {nome: "Bruno", idade: 17},    
//                 {nome: "Cátia", idade: 25}]

// const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

// for(const amigo of amigos2){
//     console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`)
// } 

// Ana - Nasceu em: 2002
// Bruno - Nasceu em: 2005
// Cátia - Nasceu em: 1997

// const numeros = [10, 13, 20, 8, 15]; // Vetor inicial 
// const pares = numeros.filter(num => num % 2 == 0) // condição para o filtro 
// console.log(pares.join(", ")) // 10, 20, 8

// const amigos = [{nome: "Ana", idade: 20},
//                 {nome: "Bruno", idade: 17},
//                 {nome: "Cátia", idade: 25},]

// const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("8"))

// for(const amigo of amigos){
//     console.log(`${amigo.nome} - Idade: ${amigo.idade}`)
// }

// if(amigos2.length){
//     console.log("Não há amigos com essas condições...")
// }

// const numeros = [10, 13, 20, 8, 15];
// const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// console.log(`Soma: ${soma}`) // Soma: 66

// const numeros = [10, 13, 20, 8, 15];
// let acumulador = 0;
// for(const num of numeros){
//     acumulador = acumulador + num
// }
// const soma = acumulador;
// console.log(soma); // 66

// let acumulador = numeros [0];
// for (let i = 1; i < numeros.length; i++){
//     acumulador = acumulador + números [i];
// }
// const soma = acumulador;


// const amigos = [{nome: "Ana", idade: 20},
//                 {nome: "Bruno", idade: 17},
//                 {nome: "Cátia", idade: 25}]

// const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0)
// const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "")

// console.log(`Soma: ${soma}`)
// console.log(`Todos: ${todos}`)

/* - 6 - Vetores 
Para declarar um vetor em JavaScrip, devemos utilizar as seguintes formas:

const produtos = []
const produtos = new array()

A primeira forma é mais comum, também podemos declarar com um conteúdo inicial:

const produtos = ["Arroz", "Feijão", "Iogurte", ]; 
console.log(produtos);
// [ 'Arroz', 'Feijão', 'Iogurte' ]

//Podemos alterar um produto da lista com uma nova atribuição:
produtos[2] = "Danone"
console.log(produtos);
// [ 'Arroz', 'Feijão', 'Danone' ]

// - 6.1 
// Depois de realizarmos a declaração do vetor, podemos incluir e excluir itens. 
const cidades = ["Pelotas"];
console.log(cidades);

// push() - Adiciona um elemento ao final do vetor;
cidades.push("São Lourenço");
console.log(cidades);
// [ 'Pelotas', 'São Lourenço' ]

// unshift() - Adiciona um elemento ao início do vetor e desloca os elementos existentes uma posição abaixo.
cidades.unshift("Porto Alegre");
console.log(cidades);
// [ 'Porto Alegre', 'Pelotas', 'São Lourenço' ]

// pop() - Remove o último elemento do vetor.
cidades.pop();
console.log(cidades);
// [ 'Porto Alegre', 'Pelotas' ]

// shift() - Remove o primeiro elemento do vetor e desloca os elementos existentes uma posição acima.
cidades.shift();
console.log(cidades);
// [ 'Pelotas' ]

// Método splice (na ideia de emendar )e slice (na ideia de fatia);
// slice() não modifica o conteúdo do vetor original, enquanto splice() modifica.
const letras = ["A", "B", "C", "D"]
console.log(letras);
// [ 'A', 'B', 'C', 'D' ]

// sclie - Obtem as duas últimas letras
const letras2 = letras.slice(-2);
console.log(letras2);
// [ 'C', 'D' ]

// sclie - Obtém do início até o final, exceto a última. 
const letras3 = letras.slice(0, -1);
console.log(letras3);
// [ 'A', 'B', 'C' ]

// Remove a partir da posição 2, 1 elemento. 
const retira = letras.splice(2, 1)
console.log(retira); // [ 'C' ]
console.log(letras); // [ 'A', 'B', 'D' ]


// 6.2 - 
const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]
for(let i = 0; i < cidades.length; i++){
    console.log(i); // 0 1 2 
}

// Repete 40 vezes o valor de underline 
console.log("_".repeat(40)); 

// Uma vírgula é inserida sobre os elementos
console.log(cidades.toString());

// Separa as respostas com -
console.log(cidades.join(" - "));


// 6.3 - 
// Para percorrer os elementos de um vetor, podemos usar tbm loop for..of e do método forEach(). São equivalentes ao for tradicional, porém, com uma síntaxe mais exuta.

// Loop for..of
const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]
for(const cidade of cidades){
    console.log(cidade)
}
// Pelotas
// São Lourenço
// Porto Alegre

// Método foeWach() é mais amplo e pode chamar uma função para manipular cada elemento do vetor. 
const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"];
cidades.forEach((cidade, i) =>{
    console.log(`${i+1}ª Cidade: ${cidade}`)
})

// 1ª Cidade: Pelotas
// 2ª Cidade: São Lourenço
// 3ª Cidade: Porto Alegre

// Algumas operações ficam mais simples com forEach(), como a soma dos elementos do vetor. 
// Cada elemento do vetor é recebido como "num" e então o acumulador "soma" é incrementado. 
const numeros = [5, 10, 15, 20];
let soma = 0;
numeros.forEach(num => soma = num + soma);
console.log(`Soma dos números: ${soma}`);



// 6.4 - 

// indexOf() = A busca ocorre a partir do início do vetor ex, de 1 até 100, retorna a primeira ocorrencia. 
// lastIndex() = A busca ocorre do final para o início ex, de 100 até 1, retorna a primeira ocorrencia.
//  includes() = Retorna verdadeiro ou falso, de acordo com a existência ou não no conteúdo do vetor. 

const idades = [5, 6, 8, 3, 6, 9]
console.log(idades.indexOf(6))
// Retorna: 1 // Posição 1 do aray 
console.log(idades.indexOf(7))
// Retorna: -1 // Não existe no array

console.log(idades.lastIndexOf(6))
// Retorna: 4 // Posição 4 do aray 

console.log(idades.includes(3))
// Retorna: true // Existe dentro do vetor

// 6.8 - 

// Map, filter e Reduce - São métodos que permitem que operações sobre vetores sejam realizadas de um modo mais eficiente. 
// map() - Na mesma ideia de for..of e forEach(), ele percorre cada elemento do vetor e cria um novo vetor. 
const numeros = [10, 13, 20, 8, 15]; 
// Cada número é multiplicado por 2 e criado um novo array. 
const dobro = numeros.map(num => num * 2);
console.log(dobro.join(", "));
// Resp: 20, 26, 40, 16, 30

// Podemos fazer isso com arrays de objeto. 
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

for(const amigo of amigos2){
    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`)
}
// Ana - Nasceu em: 2002
// Bruno - Nasceu em: 2005
// Cátia - Nasceu em: 1997

// O método filter() também cria um novo array, agora cada elemento do vetor de origem é submetido a uma condição, que, se verdadeira, adiciona um elemento ao novo array. 
const numeros = [10, 13, 20, 8, 15];
const pares = numeros.filter(num => num % 2 == 0);
console.log(pares); // [ 10, 20, 8 ]

// A mesma ideia vale para o vetor de objetos. 
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}] 

const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"))
console.log(amigos2);

for (const amigo of amigos2){
    console.log(`${amigo.nome} - Idade: ${amigo.idade} anos`)
}



// Método reduce(), útil para obter valores cumulativos (ou concatenados) a partir dos dados de um array. 
const numeros = [10, 13, 20, 8, 15];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log(`Soma: ${soma}`)
// Resultado: 66

// O último parâmetro, 0, é o valor inicial da variável acumulador. O método reduce(), deste primeiro exemplo, equivale aos seguintes comandos. 
const numeros = [10, 13, 20, 8, 15];
let acumulador = 0;
for (const num of numeros){
    acumulador = acumulador + num;
}
const soma = acumulador; 
console.log(acumulador);
// Resultado: 66



// Sem o parâmetro final, os comandos reduce() equivalem a: 
const numeros = [10, 13, 20, 8, 15];
let acumulador = numeros[0]
for (let i = 1; i < numeros.length; i++){
    acumulador = acumulador + numeros[i];
}
const soma = acumulador; 
console.log(soma)
// Resultado: 66



const amigos = [{nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Cátia", idade: 25}] 

const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"))

for (const amigo of amigos2){
console.log(`${amigo.nome} - Idade: ${amigo.idade} anos`)
}

*/

