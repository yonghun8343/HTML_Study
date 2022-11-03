# DOM 요소에 접근하고 속성 가져오기

## DOM에 접근하기

CSS에서는 class, id, 태그 등의 스타일을 각각 구별해서 정의해야 합니다.

이 때 class, id, 태그 등을 선택자(selector)라고 합니다.

### id 선택자로 접근하는 getElementById() 메소드

```
기본형
요소명.getElementById("id명")
```

### class 선택자로 접근하는 getElementByClassName() 메소드

```
기본형
요소명.getElementByClassName("class명")
```

### 태그 이름으로 접근하는 getElementByTagName() 메소드

```
기본형
요소명.getElementByTagName("태그명")
```

### 다양한 방법으로 접근하는 querySelector(), querySelectorAll() 메소드

```
기본형
노드.querySelector(선택자)
노드.querySelectorAll(선택자 또는 태그)
```

### 웹 요소의 내용을 수정하는 innerText, innerHTML 프로퍼티

```
기본형
요소명.innerText = 내용
요소명.innerHTML = 내용
```

### 속성을 가져오거나 수정하는 getAttribute(), setAttribute() 메소드

```
기본형
getAttribute("속성명")
setAttribute("속성명", "값")
```
