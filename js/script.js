let popap = document.querySelector(".popAp");
let close = document.querySelector(".popAp__close");
let button = document.querySelector(".zayavka__ref");

button.addEventListener("click", function (event) {
  event.preventDefault();
  popap.style.display = "block";
});

close.addEventListener("click", function () {
  popap.style.display = "none";
});

let portfolioDop = document.querySelector(".portfolio__section-dop");
let portfolio = document.querySelector(".button");
portfolio.addEventListener("click", (event) => {
  event.preventDefault();
  portfolioDop.style.display = "grid";
});
