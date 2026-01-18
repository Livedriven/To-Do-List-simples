let lista = [];
const inputEntrada = document.getElementById('entrada');
const btn = document.getElementById('btn');
const btnClean = document.getElementById('btnClean');
const ul = document.getElementById('imprimir');
const inputFiltro = document.getElementById('filtro');
const ulFiltro = document.getElementById('imprimirFiltro');

// ---------- Funções ----------

// Adiciona tarefa
function adicionarTarefa(tarefa) {
  const id = crypto.randomUUID();
  lista = [...lista, {id, nome: tarefa, concluido: false}];
  renderizarLista(lista, ul);
}

// Renderiza qualquer lista em qualquer <ul>
function renderizarLista(array, ulDestino) {
  ulDestino.innerHTML = "";

  array.forEach((item) => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let excluir = document.createElement('button');
    let concluido = document.createElement('button');

    li.textContent = item.nome;
    if(item.concluido)li.classList.add('feito');

    excluir.textContent = "❌";
    excluir.classList.add("excluir");

    concluido.textContent = "✅";
    concluido.classList.add('concluido');
    
    li.appendChild(div);
    div.appendChild(concluido);
    div.appendChild(excluir);
    ulDestino.appendChild(li);

    // evento de excluir
    excluir.addEventListener("click", () => excluirItem(item.id));
    concluido.addEventListener('click', () => concluirItem(item.id));
  });
}

// Renderiza lista principal e a filtrada (se houver filtro ativo)
function renderizarFiltro() {
  let termo = inputFiltro.value.trim().toLowerCase();
  if (termo) {
    const filtrados = lista.filter(item => item.nome.toLowerCase().includes(termo));

    ulFiltro.innerHTML = "";
    renderizarLista(filtrados, ulFiltro);
  } else {
    ulFiltro.innerHTML = "";
  }
}

// Excluir item
function excluirItem(id) {
  lista = lista.filter(item => item.id !== id);
  renderizarLista(lista, ul);
  renderizarFiltro();
}

function concluirItem(id){
  const task = lista.find(item => item.id === id);
  if(!task) return;
  task.concluido = !task.concluido;
  renderizarLista(lista,ul);
  renderizarFiltro();
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
  renderizarLista(lista, ul);
});

// Filtrar em tempo real (UX melhor que botão)
inputFiltro.addEventListener("keyup", () => {
  renderizarFiltro();
});
