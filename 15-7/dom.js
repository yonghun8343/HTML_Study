const btn = document.querySelector("#btn");
btn.onclick = changeColor;

function changeColor() {
  document.querySelector("p").style.color = "red";
}
