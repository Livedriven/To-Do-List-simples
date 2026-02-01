# 📝 To-Do List com Persistência de Dados (LocalStorage)

Aplicação de **gerenciamento de tarefas** desenvolvida com **HTML, CSS e JavaScript vanilla**, com foco em **arquitetura limpa**, **boas práticas de manipulação do DOM** e **persistência de estado no navegador por meio do LocalStorage**.

O projeto vai além de uma implementação básica ao oferecer **criação, exclusão, conclusão e filtragem dinâmica de tarefas em tempo real**, preservando o estado da aplicação mesmo após recarregamentos ou encerramento da sessão.

---

## 🌐 Demonstração

**GitHub Pages:**  
https://livedriven.github.io/To-Do-List-simples/

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como exercício prático para consolidar fundamentos do **JavaScript moderno**, simulando um cenário real de aplicação front-end orientada a estado e persistência de dados.

Os principais objetivos incluem:

- Gerenciar o **estado da aplicação** utilizando arrays de objetos  
- Implementar **persistência de dados no navegador com LocalStorage**  
- Estruturar código com foco em **legibilidade, modularidade e manutenibilidade**  
- Aplicar **renderização dinâmica do DOM sem uso de frameworks**  
- Desenvolver **raciocínio lógico e arquitetura de aplicações front-end**

---

## 🚀 Funcionalidades

- ➕ Criação de novas tarefas  
- ✅ Alternância de status (concluída / pendente)  
- ❌ Remoção individual de tarefas  
- 🧹 Limpeza completa da lista  
- 🔍 Filtragem em tempo real por texto  
- 💾 Salvamento automático no **LocalStorage**  
- 🔄 Restauração automática do estado ao recarregar a página  

---

## 🧠 Conceitos e Técnicas Aplicadas

### JavaScript

- Manipulação do DOM (`getElementById`, `createElement`, `appendChild`)  
- Gerenciamento de eventos (`click`, `keyup`, `load`)  
- Estruturação de dados com **Array de Objetos**  
- Atualização imutável de estado (`map`, `filter`, spread operator)  
- Geração de identificadores únicos com `crypto.randomUUID()`  
- Persistência de dados via `localStorage`  
- Serialização e desserialização com `JSON.stringify` e `JSON.parse`  
- Função orquestradora para **sincronização entre estado e interface**

### CSS

- Reset de estilos para padronização cross-browser  
- Uso de **CSS Variables** para consistência visual  
- Layout responsivo com **Flexbox**  
- Feedback visual para estados de tarefas  
- Responsividade básica com **Media Queries**

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e acessível  
- **CSS3** — Estilização, variáveis e responsividade  
- **JavaScript (ES6+)** — Lógica de negócio, estado e persistência  

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

🔍 Persistência de Dados
A aplicação utiliza o LocalStorage como mecanismo de armazenamento local para preservar o estado da lista de tarefas:

As tarefas são mantidas em um array de objetos

Cada modificação (criação, remoção ou alteração de status) atualiza o estado global

O estado é serializado em formato JSON e armazenado no LocalStorage

No carregamento da página, os dados são recuperados, desserializados e renderizados automaticamente

Esse fluxo garante continuidade da experiência do usuário, mesmo após recarregar ou fechar o navegador.

---

## ▶️ Como Executar o Projeto
Clone o repositório:

  - git clone https://github.com/Livedriven/To-Do-List-simples.git
Acesse o diretório do projeto

  - Abra o arquivo index.html em seu navegador

Ou utilize a versão hospedada via GitHub Pages.

---

## 📌 Possíveis Evoluções

  - Edição inline de tarefas
  - Filtros por status (concluídas / pendentes)
  - Contador dinâmico de tarefas
  - Persistência independente para preferências de filtro
  - Melhorias de acessibilidade (ARIA e navegação por teclado)
  - Animações e transições para feedback de ações

---

## 🧑‍💻 Autor
Desenvolvido por Richard Henrique

Projeto criado com foco em aprendizado contínuo, domínio de JavaScript vanilla e construção de uma base sólida para aplicações front-end escaláveis e de maior complexidade.

---

## 📜 Licença
Projeto de uso livre para fins educacionais e estudo.
Sinta-se à vontade para clonar, modificar e evoluir 🚀
