let tarefas = [];

document.getElementById("task-form").addEventListener("submit", function (event) {
  event.preventDefault();
  adicionarTarefa();
});

function adicionarTarefa() {
  const input = document.getElementById("task-input");
  const texto = input.value.trim();

  if (texto !== "") {
    tarefas.push({ texto: texto, concluida: false });
    input.value = "";
    mostrarTarefas();
  }
}

function mostrarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");
    item.textContent = tarefa.texto;

    // Botão de Concluir
    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.onclick = () => {
      tarefa.concluida = true;
      mostrarTarefas();
    };

    // Botão de Desmarcar
    const botaoDesmarcar = document.createElement("button");
    botaoDesmarcar.textContent = "Desmarcar";
    botaoDesmarcar.onclick = () => {
      tarefa.concluida = false;
      mostrarTarefas();
    };

    // Aplica estilo se estiver concluída
    if (tarefa.concluida) {
      item.classList.add("concluida");
    }

    // Adiciona os botões
    item.appendChild(botaoConcluir);
    item.appendChild(botaoDesmarcar);
    lista.appendChild(item);
  });
}

function mostrarConcluidas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa) => {
    if (tarefa.concluida) {
      const item = document.createElement("li");
      item.textContent = tarefa.texto;
      lista.appendChild(item);
    }
  });
}
