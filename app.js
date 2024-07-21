const ball = document.querySelector(".ball");
const button = document.querySelector(".throw-button");

button.addEventListener("click", () => {
  ball.classList.remove("throw");
  void ball.offsetWidth;
  ball.classList.add("throw");
});
