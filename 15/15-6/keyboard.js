function checkAlpa() {
  console.log(document.querySelector("#idBox").innerHTML);
}

function a() {
  alert("1");
}

window.addEventListener("unload", function () {
  this.alert("1");
});

// (function () {
//   alert(1);
// })();
