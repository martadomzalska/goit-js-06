function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const text = document.querySelector(".color");

text.textContent = "#ffffff";

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};

btn.addEventListener("click", changeColor);
