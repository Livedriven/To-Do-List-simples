let lista = [];

const storange = localStorage;

const inputEntrada = document.getElementById('entrada');

const btn = document.getElementById('btn');
const btnClean = document.getElementById('btnClean');

const ul = document.getElementById('imprimir');
const inputFiltro = document.getElementById('filtro');
const ulFiltro = document.getElementById('imprimirFiltro');

// ---------- Funções ----------

function save (){
    storange.setItem('taks', JSON.stringify(lista));
}

// Adiciona tarefa
function adicionarTarefa(tarefa) {
  const id = crypto.randomUUID();
  lista = [...lista, {id, nome: tarefa, concluido: false}];
  save();
  renderizarLista(lista,ul);
}

// Renderiza qualquer lista em qualquer <ul>
function renderizarLista(array,ul) {
  ul.innerHTML = "";

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
    ul.appendChild(li);

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

// renderiza a lista guarda no localStorange
function carregarDoStorage() {
    const dados = JSON.parse(storange.getItem('taks')) || [];
    lista = dados;
    renderizarLista(lista, ul);
}

// função orquestradora

function atualizarUI() {
  renderizarLista(lista, ul);
  renderizarFiltro();
}

// Excluir item
function excluirItem(id) {
  lista = lista.filter(item => item.id !== id);
  save();
  atualizarUI()
}

function concluirItem(id){
  lista = lista.map(item => item.id === id ? {...item, concluido: !item.concluido} : item);
  save();
  atualizarUI()
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
  lista = [];
  save()
  renderizarLista(lista, ul);
});

// Filtrar em tempo real (UX melhor)
inputFiltro.addEventListener("keyup", () => {
  renderizarFiltro();
});

window.onload = carregarDoStorage;
