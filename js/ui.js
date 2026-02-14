// ui.js

export function renderizarLista(array, ul, onExcluir, onConcluir) {
  ul.innerHTML = "";

  array.forEach(item => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const excluir = document.createElement("button");
    const concluido = document.createElement("button");

    li.textContent = item.nome;
    if (item.concluido) li.classList.add("feito");

    excluir.textContent = "❌";
    excluir.classList.add("excluir");

    concluido.textContent = "✅";
    concluido.classList.add("concluido");

    li.appendChild(div);
    div.appendChild(concluido);
    div.appendChild(excluir);
    ul.appendChild(li);

    excluir.addEventListener("click", () => onExcluir(item.id));
    concluido.addEventListener("click", () => onConcluir(item.id));
  });
}

export function filtrar(lista, termo) {
  return lista.filter(item =>
    item.nome.toLowerCase().includes(termo.toLowerCase())
  );
}
