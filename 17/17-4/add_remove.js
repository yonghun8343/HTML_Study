{
  /* <div class="wrapper">
  <span>1번 글입니다.</span>
</div>; */
}

const div0 = document.createElement("div");
div0.className = "wrapper";

const span0 = document.createElement("span");
span0.innerText = "1번 글입니다.";
span0.style.color = "orange";
span0.style.background = "black";

div0.appendChild(span0);

const container = document.getElementById("container");
container.appendChild(div0);

container.addEventListener("click", () => {
  const wrapper = document.getElementsByClassName("wrapper")[0];
  container.removeChild(wrapper);
});
