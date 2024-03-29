# 함수 표현식

적당한 예를 들어 뱀도 모양에 따라서 킹코브라, 방울뱀, 살모사 등 이름이 다양합니다.

이처럼 함수도 코딩한 모양에 따라서 여러가지 이름으로 불리게 됩니다.

## 익명 함수

익명함수는 이름이 없는 함수를 익명 함수라 부릅니다.

주로 변수에 함수를 할당 할 때 사용합니다.

예시는 아래와 같습니다.

```
function(a,b) {
    return a+b
}
```

## 즉시 실행 함수

자바스크립트에서 함수를 즉시 실행 시키고 싶을 때가 있습니다.
예를들어서 문자로 이벤트 링크를 보낼 때 해당 링크로 들어온 사람을 즉시 판별 하기 위해 확인하는 등으로 사용이 됩니다.

예시는 아래와 같습니다.

```
(function() {
    명령
})();

또는

(function(매개변수) {
    명령
})(인수)
```

## 화살표 함수

개발자의 귀차니즘으로 만들어진 모양입니다.
화살표 함수를 사용 했을 때는 알아서 return을 적용 해 주기 때문에

예시는 아래와 같습니다.

```
let a = () => {
    return 명령
}
호출은 다음과 같습니다. a()
```
