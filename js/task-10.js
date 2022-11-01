function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

function createBoxes() {
  let amount = input.value;
  if (input.value > 50) {
    alert("Proszę podać liczbę nie większą niż 50");
    input.value = "";
    return
  }
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
