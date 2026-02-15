// store.js

let lista = [];

const storage = localStorage;

export function getLista() {
  return lista;
}

export function carregar() {
  lista = JSON.parse(storage.getItem("taks")) || [];
}

export function salvar() {
  storage.setItem("taks", JSON.stringify(lista));
}

export function adicionar(tarefa) {
  const id = crypto.randomUUID();
  lista.push({ id, nome: tarefa, concluido: false });
  salvar();
}

export function excluir(id) {
  lista = lista.filter((item) => item.id !== id);
  salvar();
}

export function concluir(id) {
  lista = lista.map((item) =>
    item.id === id ? { ...item, concluido: !item.concluido } : item,
  );
  salvar();
}

export function limparLista() {
  lista = [];
  salvar();
}
