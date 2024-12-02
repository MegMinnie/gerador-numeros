const num = document.querySelector(".num");
const limpar = document.querySelector(".limpar");
const paragrafo = document.querySelector("p");

num.addEventListener("click", function () {
  let valorAleatorio1 = Math.floor(Math.random() * 100);
  let valorAleatorio2 = Math.floor(Math.random() * 100);
  let valorAleatorio3 = Math.floor(Math.random() * 100);
  let valorAleatorio4 = Math.floor(Math.random() * 100);
  let valorAleatorio5 = Math.floor(Math.random() * 100);
  paragrafo.innerHTML = `${valorAleatorio1} - ${valorAleatorio2} - ${valorAleatorio3} - ${valorAleatorio4} - ${valorAleatorio5} `;
});
