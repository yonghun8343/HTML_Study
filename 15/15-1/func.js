// function addNumber(a, b) {
//   console.log(`함수로 전달 받은 a의 값은 ${a}입니다.`);
//   console.log(`함수로 전달 받은 b의 값은 ${b}입니다.`);
//   var sum = a + b;
//   console.log(`계산된 결과값은 ${sum}입니다.`);
//   console.log("--------------------------");
//   alert(sum);
// }

// addNumber(3, 4);
// addNumber(1, 2);
// addNumber(100, 256);

// var a = function (a, b) {
//   return a + b;
// };

// alert(a(3, 4));

// (function () {
//   alert(7);
// })();

// (function () {
//   alert(7)
// })();

var a = () => {
  alert(8);
};

function a() {
  alert(8);
}

a();
