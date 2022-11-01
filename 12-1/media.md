# 반응형 웹 알아보기

## 뷰 포트

> 기본형 -> `<meta name="viewport" content="속성1=값1, 속성2=값2, ...."`

viewport 명사 / (컴퓨터의) 보임창[정보 제시창]

흔히 컴퓨터의 창으로 많이 표현이 되었지만 현재 모바일에서 보는 창 까지를 모두 포함한 개념으로 이해하면 좋다.

| 종류              | 설명                                                                       | 사용 가능한 값 | 기본 값 |
| :---------------- | :------------------------------------------------------------------------- | -------------- | ------- |
| normal            | 애니메이션을 from에서 to로 진행합니다. 기본값입니다.                       |
| reverse           | 애니메이션을 toi에서 from으로 진행합니다, 원래 반향과는 반대로 진행합니다. |
| alternate         | "형용사 / 번갈아 생기는[나오는]"</span>                                    |
| alternate         | 홀수 번째에는 normal로 짝수 번째에는 reverse로 진행합니다.                 |
| alternate-reverse | 홀수 번째에는 reverse로 짝수 번째에는 normal로 진행합니다.                 |

### 애니메이션의 반복 횟수를 지정하는 animation-iteratioin-count

> 기본형 -> `animation-iteratioin-count : <숫자> | infinite`

### 미디어 쿼리의 기본형

기본형 -> `@media [only
not] 미디어 유형 [ and 조건
]

@media screen and (max-width: 736px)
body, input, textarea, select
