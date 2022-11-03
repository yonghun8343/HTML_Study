# DOM에서 노드 추가, 삭제하기

## 노드 리스트란

상위 부모 요소에서 하위의 목록을 노드 리스트라고 합니다.

## 텍스트 노드를 사용하는 새로운 요소 추가하기

### 요소 노드 만들기 - createElement() 메소드

```
기본형
document.createElement(노드명)

ex(document.creatEleemnt("p"))
```

### 텍스트 노드 만들기 - createTextNode() 메소드

```
기본형
document.createTextNode(텍스트)
```

### 자식 노드 만들기 - appendChild() 메소드

```
기본형
부모노드.appendChild(자식노드)
```

## 속성값이 있는 새로운 요소 추가하기

### 속성 노드 만들기 - createAttribute() 메소드

```
기본형
document.createAttribute(속성명)
```

### 속성 노드 연결하기 - setAttributeNode() 메소드

```
기본형
요소명.setAttributeNode(속성명)
```

## 노드 삭제하기

### parentNode 프로퍼티

```
기본형
노드.parentNode
```

### removeChild 메서드

```
기본형
부모노드.removeChild(자식노드)
```
