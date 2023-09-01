const form = document.getElementById("form");

// Dados da tabela
const tableData = [
  { interval: "Menos de 18,5", text: "Abaixo do Peso" },
  { interval: "18,5 - 24,9", text: "Peso Ideal" },
  { interval: "25 - 29,9", text: "Levemente Acima do Peso" },
  { interval: "30 - 34,9", text: "Obesidade Grau I" },
  { interval: "35 - 39,9", text: "Obesidade Grau II" },
  { interval: "40 ou mais", text: "Obesidade Grau III" },
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (weight === 0 || height === 0) {
    // document.getElementById("result").textContent =
    //   "Por favor, insira valores válidos!";
    console.log("Foi insirido valor 0 em Altura ou Peso!");
    return;
  }

  const imc = (weight / (height * height)).toFixed(2);

  const imcValue = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");
  //   var values = document.querySelector(".imcValue");

  if (imc <= 18.5) {
    description = "Abaixo do Peso.";
    imcValue.classList.remove("normal");
    imcValue.classList.remove("danger");
    imcValue.classList.add("attention");
  } else if (imc <= 24.9) {
    description = "Peso ideal (Parabéns)!";
    imcValue.classList.remove("attention");
    imcValue.classList.remove("danger");
    imcValue.classList.add("normal");
  } else if (imc <= 29.9) {
    description = "Levemente acima do peso.";
    imcValue.classList.remove("normal");
    imcValue.classList.remove("danger");
    imcValue.classList.add("attention");
  } else if (imc <= 34.9) {
    description = "Obesidade grau I.";
    imcValue.classList.remove("normal");
    imcValue.classList.remove("attention");
    imcValue.classList.add("danger");
  } else if (imc <= 39.9) {
    description = "Obesidade grau II (Severa).";
    imcValue.classList.remove("normal");
    imcValue.classList.remove("attention");
    imcValue.classList.add("danger");
  } else {
    description = "Obesidade III (Mórbida). Favor procurar ajuda!!!";
    imcValue.classList.remove("normal");
    imcValue.classList.remove("attention");
    imcValue.classList.add("danger");
  }

  // Criação da tabela
  const tableBody = document.getElementById("table_Body");
  tableBody.innerHTML = ""; // Limpa o conteúdo anterior da tabela

  // Percorrendo o array usando array function
  tableData.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("table_row");

    // row.innerHTML = `
    //   <span>${item.interval}</span>
    //   <span>${item.text}</span>
    // `;

    const intervalSpan = document.createElement("span");
    intervalSpan.textContent = item.interval;

    const textSpan = document.createElement("span");
    textSpan.textContent = item.text;

    row.appendChild(intervalSpan);
    row.appendChild(textSpan);

    tableBody.appendChild(row);
  });

  imcValue.textContent = imc.replace(".", ",");
  document.getElementById("description").textContent = description;

  // Init
  createTable(data);
});
