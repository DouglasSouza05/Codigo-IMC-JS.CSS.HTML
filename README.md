# Código sistema de IMC usando JavaScript, CSS e HTML juntamente com Framework Svelte.

Projeto foi alterado para constituir a aplicação da Framework Svelte. Para poder ver o projeto, seguir os seguintes passos:

- Clonar o Projeto.
- Abrir um novo terminal.

- Entrar na pasta "IMC" usando o seguinte comando:

```
cd .. imc
```

- Instalar as dependências do Projeto:

```
npm i
```

- E por fim, utilizar o comando para rodar o Projeto:

```
npm run dev
```

- O projeto irá retornar um link localhost no terminal, utilizar esse link no navegador para acessar o Projeto.

## Projeto Calculadora de IMC - HTML, CSS e JavaScript

Este é um projeto simples de uma Calculadora de Índice de Massa Corporal (IMC) que utiliza HTML, CSS e JavaScript para calcular o IMC com base no peso e altura fornecidos pelo usuário. O projeto inclui os seguintes componentes:

**HTML (index.html):**

Define a estrutura do documento HTML.
Inclui campos para inserir o nome, peso e altura do usuário.
Possui um botão para calcular o IMC.
Exibe o resultado do cálculo do IMC, sua classificação e uma tabela de classificação do IMC.

**CSS (global.css):**

Define o estilo visual da página, incluindo formatação de cores, tamanhos, margens e alinhamentos.
Responsivo para diferentes tamanhos de tela usando unidades de medida relativas (vw, vh).
Utiliza a fonte "Poppins" do Google Fonts para um design agradável.

**JavaScript (Calculator.svelte):**

Define a lógica de cálculo do IMC.
Manipula os eventos do formulário para capturar os valores de peso e altura.
Calcula o IMC com base nos valores inseridos.
Classifica o IMC e exibe o resultado na página.
Gera a tabela de classificação do IMC dinamicamente.
Adiciona classes de estilo com base na classificação do IMC.

O projeto é interativo e fornece feedback imediato sobre o IMC do usuário, juntamente com a classificação correspondente. A tabela de classificação do IMC é criada dinamicamente com base nos dados fornecidos.
