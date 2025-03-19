let tarefaId = 0;
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

    var novaTarefaButtonDiv = document.createElement("div")
    novaTarefaButtonDiv.setAttribute("class", "rem-div")
    novaTarefa.appendChild(novaTarefaButtonDiv)

    var novaTarefaButton = document.createElement("button")
    novaTarefaButton.innerHTML = `<span id="sign">–</span>`
    novaTarefaButton.setAttribute("class", "rem")
    novaTarefaButton.setAttribute("onclick", "removeTarefa()")
    novaTarefaButtonDiv.appendChild(novaTarefaButton)

    document.getElementById("option-caixa").style.display = "block"
    document.getElementById("nova-tarefa-caixa").style.display = "none"
    document.getElementById("nova-tarefa").value = ``
}

function cancelTarefa(){
    document.getElementById("option-caixa").style.display = "block"
    document.getElementById("nova-tarefa-caixa").style.display = "none"
    document.getElementById("nova-tarefa").value = ``
}

function removeTarefa(){ //n entendi literalmente nada só copiei do stackoverflow 👍
    let els = document.getElementsByClassName("rem");
    for (let i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('div.tarefa').remove();
        });
    }
} 