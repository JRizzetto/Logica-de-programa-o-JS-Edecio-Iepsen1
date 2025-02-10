/*

Nosso programa deve controlara lista de atendimento dos pacientes de um consultório odontologico - 
como se fosse um painel em exposição em uma tv do consultório.

*/

const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [] // declara vetor global

frm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const nome = frm.inPaciente.value;  // Obtem o nome do paciente
    pacientes.push(nome) // Adiciona o nome no final do vetor

    let lista = "";

    // for "tradicional" - Inicia em zero(0), enquanto menor que o tamanho do array
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }
    respLista.innerHTML = lista; // Exibe a lista de pacientes na página
    frm.inPaciente.value = ""; // Limpa o conteúdo do campo do formulário
    frm.inPaciente.focus(); // Posiciona o cursor no campo
})

    // Adiciona um "ouvinte" para o evento click no btUrgencia que está no form.
    frm.btUrgencia.addEventListener("click", ()=>{
        // Verifica se as validações do form estão ok (no caso, paciente is required)
        if(!frm.checkValidity()){
            alert("Informe o nome do paciente a ser atendido em caráter de urgência")
            frm.inPaciente.focus() // Posiciona o cursor no campo paciente
            return // Retorna ao form
        }

        const nome = frm.inPaciente.value; // Obtem o nome do paciente 
        pacientes.unshift(nome); // Adiciona o paciente ao início do vetor 
        let lista = ""; // String para concatenar pacientes

        // forEach aplicado sobre o array pacientes
        pacientes.forEach((paciente, i) => (
            lista += `${i + 1}. ${paciente}\n`
        ))

        respLista.innerHTML = lista;
        frm.inPaciente.value = "";
        frm.inPaciente.focus();
    })

    frm.btAtender.addEventListener("click", ()=>{
        // Se o tamanho do vetor = 0;
        if(pacientes.length == 0){
            alert("Não há pacientes na lista de espera")
            frm.inPaciente.focus();
            return;
        }

        const atender = pacientes.shift(); // Remove do início da fila (e obtem o nome)
        respNome.innerHTML = atender; // Exibe o nome do paciente em atendimento
        let lista = "";

        pacientes.forEach((paciente, i) => (
            lista += `${i + 1}. ${paciente}\n`
        ))

        respLista.innerHTML = lista; // Exibe a lista de pacientes na página
        
    })

