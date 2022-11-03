let number = new Array();
let number4 = new Array(4);

let client = ["김", "이", "최", "박"];
for (let i = 0; i < client.length; i++) {
  console.log(i);
}

let a = ["a", "b"];
let b = ["c", "d"];

a.concat(b);

const underNumber = (number) => {
  return number < 40;
};
const arr1 = [1, 2, 3, 40];

arr1.every(underNumber);

const word = ["a", "ab", "abc", "abcd"];
word.filter((alpa) => {
  return alpa.length === 4;
});

let client1 = ["김", "이", "최", "박"];
client1.forEach((name, index) => {
  console.log(name);
  console.log(index);
  client1[index] = "김";
});

let client2 = ["사과", "바나나", "딸기", "메론"];
let count = client2.indexOf("사과");
if (count < 0) {
  alert("원하시는 결과값이 없습니다.");
} else {
  alert(`원하는 결과값은 배열의 ${count}번째에 있습니다.`);
}

let client3 = ["사과", "바나나", "딸기", "메론"];
client3.join(); // ,로 합쳐짐
client3.join(""); // 공백 없이 합치기
client3.join("/"); // 글자 사이에 /넣어서 합치기
client3.join(","); // 글자 사이에 ,를 넣어서 합치기.

let client4 = ["사과", "바나나", "딸기", "메론"];
client4.push("망고");

// unshift를 모를 때 코딩
let client5 = ["망고"];
client5 = client5.concat(client4);

// unshift를 알 때
client4.shift("망고");

// push는 배열의 뒤에 추가할 때 사용
// unshift는 배열의 앞에 추가할 때 사용

client6.pop();
console.log(client6);

client6.shift();

// pop 배열의 제일 끝 요소를 가지고 올때(삭제됨)
// shift 배열의 첫 요소를 가지고 올때(삭제됨)

//
let client6 = ["사과", "바나나", "딸기", "메론"];
// 기본형 array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

client6.splice(1, 0, "망고");
client6.splice(2, 0, "포도", "감자");
client6.splice(2, 2);
client6.splice(2, 2, "포도", "감자");
// 배열에 시작 지점으로부터 추가하거나 삭제가 가능함. 추가와 삭제 둘다 가능한 함수

// 기본형 arr.slice([begin[, end]])
client6.slice(3);
client6.slice();
client6.slice(1, 3);

// reverse는 배열 내의 요소를 거꾸로 정렬 할 때 사용 됩니다.
client7.reverse();
// sort는 내가 원하는 방식대로 정렬 하고 싶을 때 사용 됩니다.
// 기본형 arr.sort([compareFunction])
let client7 = ["a", "c", "b", "d", "z"];
client7.sort();
// 역순 정렬 방법
// reverse 안에 아래의 코드처럼 구현 되어있다.
client.sort((a, b) => {
  if (a > b) {
    return -1;
  }
});

// toString
