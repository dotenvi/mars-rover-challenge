# Mars Rover Challenge

## 1. Descrição

Este repositório contém uma solução para o desafio de programação **Mars Rover**. O projeto foi desenvolvido como um teste técnico, com o objetivo principal de não apenas resolver o problema, mas de demonstrar a aplicação de boas práticas de desenvolvimento e conceitos básicos como OOP.

O foco foi criar um código limpo, legível, robusto, resiliente e altamente testável, seguindo princípios de prática.

---

## 2. Conceitos de Arquitetura e Tecnologias

A arquitetura desta solução foi construída sobre os seguintes pilares:

- **Node.js:** Ambiente de execução principal.
- **Jest:** Framework utilizado para a suíte de testes unitários e de integração.
- **Arquitetura em Camadas (DDD):** O código é estritamente separado em camadas de **Domínio**, **Aplicação** e **Infraestrutura**.
- **Princípios SOLID:**
  - **SRP (Princípio da Responsabilidade Única):** Cada classe tem um único e bem definido propósito.
  - **OCP (Princípio Aberto/Fechado):** O sistema é extensível sem a necessidade de modificar o código existente (ex: adicionar novos parsers ou direções).
  - **LSP (Princípio da Substituição de Liskov):** As diferentes implementações de `Direction` são perfeitamente substituíveis.
  - **DI (Inversão de Dependência):** As dependências são injetadas, permitindo baixo acoplamento e altíssima testabilidade.
- **Padrão de Projeto Strategy:** Utilizado para encapsular a lógica de cada direção (Norte, Sul, Leste, Oeste).
- **TDD (Test-Driven Development):** A metodologia foi seguida para garantir a qualidade e a robustez da lógica de negócio.

---

## 3. Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18.x ou superior recomendada)
- **npm** (geralmente instalado junto com o Node.js)

### Passos

**1. Clone o repositório:**

```sh
git clone [https://github.com/dotenvi/mars-rover-challenge.git]
cd mars-rover-challenge
```

**2. Instale as dependências de desenvolvimento:**

```sh
npm install
```

**3. Execute a Simulação Principal:**
Este comando irá executar a aplicação, lendo os dados do arquivo `input.txt` na raiz do projeto e exibindo o resultado no console.

```sh
npm start
```

**4. Execute a Suíte de Testes:**
Este comando irá rodar todos os testes unitários e de integração do projeto usando o Jest.

```sh
npm test
```

---

## 4. Estrutura do Projeto

A estrutura de pastas foi organizada para refletir a separação de responsabilidades da arquitetura:

- **/src**: Contém todo o código-fonte da aplicação.
  - **/core**: A lógica de negócio pura e as regras do problema. Totalmente independente.
  - **/app**: O orquestrador (caso de uso) que coordena a lógica de domínio.
  - **/infra**: O código que interage com o "mundo exterior" (ex: leitura de arquivos).
  - **index.js**: O ponto de entrada da aplicação, responsável por montar e injetar as dependências (Composition Root).
- **/tests**: Contém a suíte de testes, espelhando a estrutura da pasta `src`.
- **input.txt**: Arquivo de entrada com os dados da simulação.
