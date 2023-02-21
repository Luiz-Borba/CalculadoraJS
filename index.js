const input = document.getElementById("input");
const keys = document.querySelectorAll(".caracters");
const clear = document.getElementById("clear");
const calculeitionResult = document.getElementById("resutCalculation");
const displayCalculation = document.getElementById("result");
const color = document.getElementById("color");
const bodyBg = document.getElementById("mode");

const caracters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "*",
  "-",
  "+",
  ".",
  "=",
  "%",
];
document.querySelectorAll(".caracters").forEach(function (event) {
  event.addEventListener("click", function () {
    const valor = event.value;
    input.value += valor;
  });
});

clear.addEventListener("click", function () {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (caracters.includes(ev.key)) input.value += ev.key;

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculat();
  }
  if (ev.key === "Escape") {
    input.value = "";
    displayCalculation.value=""
    input.focus();
  }
});
displayCalculation.addEventListener("click", function () {
  calculat();
});
clear.addEventListener("click", function () {
  input.value = "";
  displayCalculation.value=""
});
function calculat() {
  const result = eval(input.value);
  calculeitionResult.value = result;
  input.value = "";
  return;
}
color.addEventListener("click", function () {
  color.classList.toggle("dark");
  color.classList.toggle("ligth");

  bodyBg.classList.toggle("darkBg");
  bodyBg.classList.toggle("ligthBg");
});
