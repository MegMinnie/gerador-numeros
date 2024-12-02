const num = document.querySelector(".num");
const limpar = document.querySelector(".limpar");
const paragrafo = document.querySelector("p");
const container = document.querySelector(".bar");

num.addEventListener("click", function () {
  const valoresAleatorios = [];
  for (let i = 0; i < 5; i++) {
    const valorAleatorio = Math.floor(Math.random() * 100 + 1);
    valoresAleatorios.push(valorAleatorio);
  }

  container.innerHTML = "";

  valoresAleatorios.forEach((valor) => {
    container.innerHTML += `
      <div class="bar">
        <span class="foo">${valor}</span>
      </div>`;
  });
});
