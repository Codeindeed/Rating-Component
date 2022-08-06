const main = document.getElementById("card1");
const card2 = document.getElementById("card2");
const text = document.getElementById("text");
const button = document.getElementById("submit");
const ratings = document.querySelectorAll(".btn__select");
let nums = 0;

function texts(button) {
  nums = button.textContent;
  text.textContent = "";
  text.textContent = `you selected ${nums} out of ${ratings.length}  ${
    nums == 5 ? " 🏆 " : ""
  }`;
}
ratings.forEach((button) => {
button.addEventListener("click", () => {
    texts(button);
  });
});
function thankyou() {
  if (nums === 0) return;
  main.classList.add("displays");
  card2.classList.remove("displays");
  if (main.classList.contains("displays")) {
    setTimeout(reload, 5000);
  }
}
function reload() {
  window.location.reload();
}
button.addEventListener("click", thankyou);
