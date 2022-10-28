let value = document.querySelector("#value");
let counterValue = Number(value.innerHTML);

const decreasingBtn = document.querySelector('[data-action="decrement"]');
const increasingBtn = document.querySelector('[data-action="increment"]');

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
 const decrement = () => {
     counterValue -= 1;
     value.textContent = counterValue;
 }
increasingBtn.addEventListener("click", increment);

decreasingBtn.addEventListener("click", decrement);
