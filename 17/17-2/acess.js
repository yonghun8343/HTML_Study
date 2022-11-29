let id1 = document.getElementById("id1");
console.log(id1);

// id를 class로 잘못가지고 왔을때는 null
let id2 = document.getElementById("class1");
console.log(id2);

const class1 = document.getElementsByClassName("class1");
console.log(class1);

const tag1 = document.getElementsByTagName("p");
console.log(tag1);

const selector1 = document.querySelector("#id1");
console.log(`selector1의 정보는 아래와 같습니다.`);
console.log(selector1);

const selector2 = document.querySelector(".class1");
console.log(`selector2의 정보는 아래와 같습니다.`);
console.log(selector2);

const selector3 = document.querySelector("p");
console.log(`selector3의 정보는 아래와 같습니다.`);
console.log(selector3);

const selectorAll1 = document.querySelectorAll("#id1");
console.log(`selectorAll1의 정보는 아래와 같습니다.`);
console.log(selectorAll1);

const selectorAll2 = document.querySelectorAll(".class1");
console.log(`selectorAll2의 정보는 아래와 같습니다.`);
console.log(selectorAll2);

const selectorAll3 = document.querySelectorAll("p");
console.log(`selectorAll3의 정보는 아래와 같습니다.`);
console.log(selectorAll3);

// const id1 = document.getElementById("id1")
// id1.innerText = "id1이 바뀌었습니다.";
// document.getElementById("id1").innerText = "id1이 바뀌었습니다.";

document.getElementById("a1");
// document.getElementById("a1").getAttribute("href");
// document.getElementById("a1").setAttribute("href", "https://naver.com");
// document.getElementById("a1").innerText = "네이버로 이동하기";

// const ids1 = document.querySelector("#id1");
// ids1.onclick = alertId1;
// ids1.ondbclick = alertId1;
// const ids2 = document.querySelector("#id2");
// ids2.onclick = alertId1;

// 버튼이 많아서 함수로 한번에 처리를 하고 싶은 경우가 생길 수 있어요
function alertId1(event) {
  // console.log(event.target.id);
  event.target.innerText = `${event.target.id}는 이미 클릭 되었습니다.`;
  // alert("id1입니다.");
}

const ids1 = document.getElementById("id1");
ids1.addEventListener("click", alertId1);
ids1.addEventListener("dblclick", function () {
  alert("123");
});
ids1.addEventListener("dblclick", function () {
  document.getElementById("id1").style.background = "orange";
});

// document.getElementById("id1").style.background = "orange";

document.getElementById("text1").addEventListener("keypress", (event) => {
  alert("타이핑 되었습니다.");
});
