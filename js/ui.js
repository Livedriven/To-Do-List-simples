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
      "pt-2",
      "pb-2",
      "flex",
      "flex-col",
      "items-center",
      "border",
      "bg-teal-200",
      "dark:bg-indigo-400",
      "border-borda",
      "text-texto-base",
      "rounded-xl",
    );
    div.classList.add("flex", "flex-row", "justify-between", "gap-2");

    span.textContent = item.nome;

    if (item.concluido) {
      li.classList.remove("bg-teal-200");
      li.classList.remove("dark:bg-indigo-400")
      li.classList.add("bg-sucesso");
      span.classList.add("text-gray-200", "line-through")
    }

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
