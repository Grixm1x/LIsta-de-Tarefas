function botaoParaTarefa() {
  let listaTarefas = document.getElementById("listaTarefas");
  let inputText = document.getElementById("inputText");
  let mensagem = "Tarefa adicionada com sucesso!";
  let novaTarefa; 

  if (inputText && inputText.value.trim() !== "") {
    let valueText = inputText.value;

    document.getElementById("mensagem").textContent = mensagem;

    novaTarefa = document.createElement("li");
    novaTarefa.textContent = valueText;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.marginLeft = "10px";
    botaoExcluir.style.backgroundColor = "red";
    botaoExcluir.style.color = "white";
    botaoExcluir.style.border = "none";
    botaoExcluir.style.borderRadius = "5px";
    botaoExcluir.style.marginLeft= "80%";

    
    botaoExcluir.onclick = function () {
      listaTarefas.removeChild(novaTarefa);
    };

    novaTarefa.appendChild(botaoExcluir);

    listaTarefas.appendChild(novaTarefa);

    inputText.value = "";
  } else {
    alert("Não foi possível adicionar uma tarefa vazia.");
  }
}
