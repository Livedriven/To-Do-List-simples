const lista = [];
const inputEntrada = document.getElementById('entrada');
const btn = document.getElementById('btn');
const btnClean = document.getElementById('btnClean');
const ul = document.getElementById('imprimir');
const inputFiltro = document.getElementById('filtro');
const ulFiltro = document.getElementById('imprimirFiltro');

// ---------- Funções ----------

// Adiciona tarefa
function adicionarTarefa(tarefa) {
  lista.push({nome:tarefa, concluido:false});
  renderizar();
}

// Renderiza qualquer lista em qualquer <ul>
function renderizarLista(array, ulDestino) {
  ulDestino.innerHTML = "";

  array.forEach((item, index) => {
    let li = document.createElement('li');
    let button = document.createElement('button');
    let concluido = document.createElement('button');

    li.textContent = item.nome;
    if(item.concluido)li.classList.add('feito');

    button.textContent = "❌";
    button.classList.add("excluir");
    button.dataset.index = index;

    concluido.textContent = "✅";
    concluido.classList.add('concluido');
    concluido.dataset.index = index;

    li.appendChild(concluido);
    li.appendChild(button);
    ulDestino.appendChild(li);

    // evento de excluir
    button.addEventListener("click", () => excluirItem(index));
    concluido.addEventListener('click', () => concluirItem(index));
  });
}

// Renderiza lista principal e a filtrada (se houver filtro ativo)
function renderizar() {
  renderizarLista(lista, ul);

  let termo = inputFiltro.value.trim().toLowerCase();
  if (termo) {
    const filtrados = lista
      .map((item, index) => ({ item, index }))
      .filter(obj => obj.item.nome.toLowerCase().includes(termo));

    ulFiltro.innerHTML = "";
    filtrados.forEach(obj => {
      let li = document.createElement("li");
      let button = document.createElement("button");
      let concluido = document.createElement('button');

      li.textContent = obj.item.nome;
      if(obj.item.concluido)li.classList.add('feito');

      button.textContent = "❌";
      button.classList.add("excluir");
      button.dataset.index = obj.index;

      concluido.textContent = "✅";
      concluido.classList.add('concluido');
      concluido.dataset.index = obj.index;

      li.appendChild(concluido);
      li.appendChild(button);
      ulFiltro.appendChild(li);

      button.addEventListener("click", () => excluirItem(obj.index));
      concluido.addEventListener('click', () => concluirItem(obj.index));
    });
  } else {
    ulFiltro.innerHTML = "";
  }
}

// Excluir item
function excluirItem(index) {
  lista.splice(index, 1);
  renderizar();
}

function concluirItem(index){
  lista[index].concluido = !lista[index].concluido;
  renderizar()
}
// ---------- Eventos ----------

// Adicionar tarefa
btn.addEventListener("click", () => {
  const tarefa = inputEntrada.value.trim();
  if (tarefa) adicionarTarefa(tarefa);
  inputEntrada.value = "";
  inputEntrada.focus();
});

// Limpar lista
btnClean.addEventListener("click", () => {
  lista.length = 0;
  renderizar();
});

// Filtrar em tempo real (UX melhor que botão)
inputFiltro.addEventListener("input", renderizar);
