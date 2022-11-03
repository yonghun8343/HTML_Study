# 조건문

## if문과 if-else 문 알아보기

```
기본형
if(조건) {
    조건 결괏값이 true일 때 실행할 명령
}

if(조건) {
    조건 결괏값이 true일 때 실행할 명령
} else {
    조건 결괏값이 false일 때 실행할 명령
}
```

---

## 조건 연산자로 조건 체크하기

```
기본형
(조건) ? true일 때 실행할 명령 : false일 때 실행할 명령
```

---

## 논리 연산자로 조건 체크하기

### OR 연산자

| op 1  | op 2  | op1 ₩ | ₩   | op2 |
| :---- | :---- | ----- | --- | --- |
| false | false | false |
| false | true  | true  |
| true  | false | true  |
| true  | true  | true  |

---

### AND 연산자

| op 1  | op 2  | op1 && op2 |
| :---- | :---- | ---------- |
| false | false | false      |
| false | true  | false      |
| true  | false | false      |
| true  | true  | true       |

---

### NOT 연산자

| op    | !op   |
| :---- | :---- |
| false | true  |
| true  | false |

---

## switch 문

```
기본형
switch(조건)
{
    case 값1: 명령1
     break
    case 값2: 명령2
     break
    ...
    default: 명령n
}
```
