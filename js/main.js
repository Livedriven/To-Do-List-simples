// main.js

import * as store from "./store.js";
import { renderizarLista, filtrar} from "./ui.js";

const inputEntrada = document.getElementById("entrada");
const btn = document.getElementById("btn");
const btnClean = document.getElementById("btnClean");

const ul = document.getElementById("imprimir");
const inputFiltro = document.getElementById("filtro");
const ulFiltro = document.getElementById("imprimirFiltro");

function atualizarUI() {
  const lista = store.getLista();
  renderizarLista(lista, ul, handleExcluir, handleConcluir);

  const termo = inputFiltro.value.trim();
  if (termo) {
    const filtrados = filtrar(lista, termo);
    renderizarLista(filtrados, ulFiltro, handleExcluir, handleConcluir);
  } else {
    ulFiltro.innerHTML = "";
  }
}

function handleExcluir(id) {
  store.excluir(id);
  atualizarUI();
}

function handleConcluir(id) {
  store.concluir(id);
  atualizarUI();
}

btn.addEventListener("click", () => {
  const tarefa = inputEntrada.value.trim();
  if (tarefa) {
    store.adicionar(tarefa);
    atualizarUI();
  }
  inputEntrada.value = "";
  inputEntrada.focus();
});

btnClean.addEventListener("click", () => {
  store.limparLista();
  store.salvar();
  atualizarUI();
});

inputFiltro.addEventListener("keyup", atualizarUI);

window.onload = () => {
  store.carregar();
  atualizarUI();
};
