# Código sistema de IMC usando JavaScript, CSS e HTML juntamente com Framework Svelte.

Projeto foi alterado para constituir a aplicação da Framework Svelte. Para poder ver o projeto, seguir os seguintes passos:

- Clonar o Projeto.
- Abrir um Novo Terminal.

- Instalar as dependências do Projeto:

```
npm i
```

- E por fim, utilizar o comando para rodar o Projeto:

```
npm run dev
```

- O Projeto irá retornar um link localhost no Terminal, utilizar esse link no navegador para acessar o Projeto.

## Projeto Calculadora de IMC - HTML, CSS e JavaScript

Este é um projeto simples de uma Calculadora de Índice de Massa Corporal (IMC) que utiliza HTML, CSS e JavaScript para calcular o IMC com base no Peso e Altura fornecidos pelo Usuário. O projeto inclui os seguintes componentes:

**HTML (index.html):**

Define a Estrutura do Documento HTML.
Inclui campos para inserir o Nome, Peso e Altura do Usuário.
Possui um botão para calcular o IMC.
Exibe o resultado do cálculo do IMC, sua Classificação e uma Tabela de Classificação do IMC.

**CSS (global.css):**

Define o Estilo Visual da Página, incluindo Formatação de Cores, Tamanhos, Margens e Alinhamentos.
Utiliza a Fonte "Poppins" do Google Fonts para um Design agradável.

**JavaScript (Calculator.svelte):**

Define a lógica de cálculo do IMC.
Manipula os eventos do Formulário para capturar os valores de Peso e Altura.
Calcula o IMC com base nos valores inseridos.
Classifica o IMC e exibe o resultado na Página.
Gera a tabela de Classificação do IMC dinamicamente.
Adiciona Classes de Estilo com base na Classificação do IMC.

O Projeto é interativo e fornece feedback imediato sobre o IMC do Usuário, juntamente com a Classificação correspondente. A tabela de Classificação do IMC é criada dinamicamente com base nos Dados fornecidos.
