# DOM에서 이벤트 처리하기

## DOM 요소에 함수 직접 연결하기

```javascript
let a = document.querySelector("#a");
a.onclick = function () {
  alert("이미지를 클릭했습니다.");
};
```

---

## 함수 이름 사용해 연결하기

```javascript
let a = document.querySelector("#a");
a.onclick = changePic;

function changePic() {
  a.src = "images/cup-2.png";
}
```

---

## DOM의 event 객체 알아보기

```javascript
let a = document.querySelector("#a");
a.onclick = function (event) {
  alert(
    `이벤트 유형: ${event.type}, 이벤트 발생 위치 : ${event.pageX}, ${event.pageY}`
  );
};
```

---

## event 객체의 주요 프로퍼티와 메소드

### 프로퍼티

| 종류      | 설명                                                                      |
| :-------- | :------------------------------------------------------------------------ |
| altKey    | 이벤트가 발생할 때 Alt를 눌렀는지 여부를 boolean값으로 반환합니다.        |
| button    | 마우스에서 누른 버튼의 키값을 반환합니다.                                 |
| charCode  | keypress 이벤트가 발생할 때 어떤 키를 눌렀는지 유니코드값으로 반환합니다. |
| clientX   | 이벤트가 발생한 가로 위치를 반환합니다.                                   |
| clientY   | 이벤트가 발생한 세로 위치를 반환합니다.                                   |
| ctrlKey   | 이벤트가 발생했을 때 Ctrl를 눌렀는지 여부를 boolean값으로 반환합니다.     |
| pageX     | 현재 문서 기준으로 이벤트가 발생한 가로 위치를 반환합니다.                |
| pageY     | 현재 문서 기준으로 이벤트가 발생한 세로 위치를 반환합니다.                |
| screenX   | 현재 화면 기준으로 이벤트가 발생한 가로 위치를 반환합니다.                |
| screenY   | 현재 화면 기준으로 이벤트가 발생한 세로 위치를 반환합니다.                |
| shiftKey  | 이벤트 발생할 때 Shift를 눌렀는지 여부를 boolean값으로 반환합니다.        |
| target    | 이벤트가 최초로 발생한 대상을 반환합니다.                                 |
| timeStamp | 이벤트가 발생한 시간을 반환합니다.                                        |
| type      | 발생한 이벤트 이름을 반환합니다.                                          |
| which     | 키보드와 관련된 이벤트가 발생할 때 키의 유니코드값을 반환합니다.          |

### 메서드

| 종류             | 설명                                        |
| :--------------- | :------------------------------------------ |
| preventDefault() | 이벤트 취소를 할 수 있는 경우에 취소합니다. |

---

## addEventListener() 메소드 사용하기

```
기본형
요소.addEventListener(이벤트, 함수, 캡처 여부);
```

1. 이벤트: 이벤트 유형을 지정합니다. 단 click과 keypress처럼 on을 붙이지 않고 씁니다.
2. 함수: 이벤트가 발생하면 실행할 명령이나 함수를 지정합니다. 여기에서 함수를 정의할 때는 event 객체를 인수로 받습니다.
3. 캡처 여부: 이벤트를 캡처하는지 여부를 지정하며 기본값은 false입니다. true이면 DOM의 부모 노드에서 자식 노드로 전달되는 것이고 false는 자식 노드에서 부모 노드로 전달 되는 것입니다.

---

## CSS 속성에 접근하기

```
기본형
document.요소명.style.속성명

ex) document.getElementById("desc").style.color = "blue";
```
