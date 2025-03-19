let tarefaId = 1;
const tarefaCaixa = document.getElementById("tarefa-caixa")
let tarefaContent = document.getElementById("nova-tarefa").value

function addTarefa(){
    document.getElementById("option-caixa").style.display = "none"
    document.getElementById("nova-tarefa-caixa").style.display = "block"
}

function confirmTarefa(){
    var novaTarefa = document.createElement("div")
    tarefaCaixa.appendChild(novaTarefa)
    novaTarefa.setAttribute("class", "tarefa")

    tarefaId++
    novaTarefa.setAttribute("id", `tarefa-${tarefaId}`)

    var novaTarefaP = document.createElement("p")
    tarefaContent = document.getElementById("nova-tarefa").value
    novaTarefaP.innerHTML = tarefaContent
    novaTarefa.appendChild(novaTarefaP)

    document.getElementById("option-caixa").style.display = "block"
    document.getElementById("nova-tarefa-caixa").style.display = "none"
    document.getElementById("nova-tarefa").value = ``
}

function cancelTarefa(){
    document.getElementById("option-caixa").style.display = "block"
    document.getElementById("nova-tarefa-caixa").style.display = "none"
    document.getElementById("nova-tarefa").value = ``
}