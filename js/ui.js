// ui.js

export function renderizarLista(array, ul, onExcluir, onConcluir) {
  ul.innerHTML = "";

  array.forEach((item) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const excluir = document.createElement("button");
    const concluido = document.createElement("button");
    const span = document.createElement("span");

    li.classList.add(
      "p-2.5",
      "flex",
      "flex-col",
      "items-center",
      "border",
      "border-borda",
      "text-texto-base",
      "rounded-xl",
    );
    div.classList.add("flex", "flex-row","justify-between", "gap-6");

    span.textContent = item.nome;
    if (item.concluido) li.classList.add("bg-sucesso");

    excluir.textContent = "❌";
    excluir.classList.add("excluir");

    concluido.textContent = "✅";
    concluido.classList.add("concluido");

    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(concluido);
    div.appendChild(excluir);
    ul.appendChild(li);

    excluir.addEventListener("click", () => onExcluir(item.id));
    concluido.addEventListener("click", () => onConcluir(item.id));
  });
}

export function filtrar(lista, termo) {
  return lista.filter((item) =>
    item.nome.toLowerCase().includes(termo.toLowerCase()),
  );
}
