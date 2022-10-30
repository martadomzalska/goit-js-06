let input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));


input.addEventListener("input", (event) => {
  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (input.value.length === 0) {
    input.classList.remove("valid", "invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
