# 📝 To‑Do List com Persistência de Dados (LocalStorage)

Aplicação de **lista de tarefas** desenvolvida com **HTML, CSS e JavaScript puro**, com foco em **arquitetura simples**, **boas práticas de manipulação do DOM** e **persistência de dados no navegador via LocalStorage**.

O projeto vai além do básico: permite **criar, remover, concluir e filtrar tarefas em tempo real**, mantendo o estado salvo mesmo após recarregar a página.

---
## Link do Projeto no Pages: **https://livedriven.github.io/To-Do-List-simples/**
---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como exercício prático para consolidar conceitos fundamentais do **JavaScript moderno**, simulando um problema real do dia a dia.

Principais objetivos:

* Trabalhar com **estado da aplicação** usando arrays de objetos
* Entender e aplicar **persistência de dados com LocalStorage**
* Melhorar organização e legibilidade do código
* Praticar **renderização dinâmica do DOM** sem frameworks
* Evoluir pensamento lógico e estrutural como desenvolvedor front‑end

---

## 🚀 Funcionalidades

* ➕ Adicionar novas tarefas
* ✅ Marcar tarefas como concluídas (toggle)
* ❌ Excluir tarefas individualmente
* 🧹 Limpar toda a lista
* 🔍 Filtrar tarefas em tempo real
* 💾 Persistência automática usando **LocalStorage**
* 🔄 Recuperação automática das tarefas ao recarregar a página

---

## 🧠 Conceitos e Técnicas Aplicadas

### JavaScript

* Manipulação do DOM (`getElementById`, `createElement`, `appendChild`)
* Eventos (`click`, `keyup`, `load`)
* Estrutura de dados com **Array de Objetos**
* Atualização imutável do estado (`map`, `filter`, spread operator)
* Identificadores únicos com `crypto.randomUUID()`
* Persistência com `localStorage`
* Serialização e desserialização com `JSON.stringify` e `JSON.parse`
* Função orquestradora para sincronizar UI e estado

### CSS

* Reset de estilos para consistência
* Uso de **CSS Variables** para padronização de cores
* Layout flexível com **Flexbox**
* Feedback visual para tarefas concluídas
* Responsividade básica com **Media Query**

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estrutura semântica
* **CSS3** — Estilização, variáveis e responsividade
* **JavaScript (ES6+)** — Lógica, estado e persistência

---

## 📂 Estrutura do Projeto

<pre>
  📁 to-do-list
  ├── index.html
  ├── script.js
  ├── css
  │   ├── style.css
  │   ├── reset.css
  │   └── variable.css
</pre>

---

## 🔍 Como Funciona a Persistência

A aplicação utiliza o **LocalStorage** para manter os dados salvos no navegador:

* As tarefas são armazenadas em um array de objetos
* Cada alteração (adicionar, excluir ou concluir) atualiza o array
* O array é convertido para JSON e salvo no LocalStorage
* Ao carregar a página, os dados são recuperados e renderizados automaticamente

Isso garante que nenhuma tarefa seja perdida ao recarregar ou fechar o navegador.

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Livedriven/To-Do-List-simples.git
   ```
2. Acesse a pasta do projeto
3. Abra o arquivo `index.html` no navegador

Ou visualize diretamente via **GitHub Pages**, se disponível.

---

## 📌 Possíveis Melhorias Futuras

* Edição do texto das tarefas
* Filtro por status (concluídas / pendentes)
* Contador de tarefas
* Persistência separada para filtros
* Melhorias de acessibilidade (ARIA)
* Animações suaves para ações do usuário

---

## 🧑‍💻 Autor

Desenvolvido por **Richard Henrique**

Projeto criado com foco em **aprendizado contínuo**, prática de **JavaScript puro** e construção de base sólida para aplicações front‑end mais complexas.

---

## 📜 Licença

Projeto livre para fins de estudo e aprendizado.
Sinta‑se à vontade para clonar, modificar e evoluir 🚀
