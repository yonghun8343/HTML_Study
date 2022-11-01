# 그리드 레이아웃

**_여기 설명에서 가로 방향은 "컬럼"로 표기하며, 세로 방향은 "줄"로 표현합니다._**

## 그리드 컨테이너를 지정하는 display 속성

| 종류        | 설명                                                |
| :---------- | :-------------------------------------------------- |
| grid        | 컨테이너 안의 항목을 블록 레벨 요소로 배치합니다.   |
| inline-grid | 컨테이너 안의 항목을 인라인 레벨 요소로 배치합니다. |

---

## 칼럼과 줄을 지정하는 grid-template-columns, grid-template-rows 속성

```
#wrapper {
  display: grid; /* 그리드 컨테이너 지정 */
  grid-template-columns: 200px 200px 200px; /* 너비가 200px인 칼럼 3개 */
  grid-template-rows: 100px; /* 줄 높이 100px */
}
```

---

## 상대적인 크기를 지정하는 fr 단위

```
컬럼 3개를 배치 한다면
grid-template-columns: 1fr 1fr 1fr; /* 1:1:1 비율로 배치 */
grid-template-columns: 2fr 1fr 2fr; /* 2:1:2 비율로 배치 */
```

---

## 값이 반복될 때 줄여서 표현할 수 있는 repeat() 함수

```
같은 값을 반복적으로 사용 할 경우 아래와 같이 함수를 이용 할 수 있습니다.
grid-template-columns: 1fr 1fr 1fr; /* 1:1:1 비율로 배치 */
grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 배치 */
```

---

## 최솟값과 최댓값을 지정하는 minmax() 함수

```
minmax() 함수를 사용하면 줄 높이르 록정하지 않고 최솟값과 최댓값을 사용해서 유연하게 지정할 수 있습니다.
grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 배치 */
grid-template-row: minmax(100px, auto); /* 줄 높이는 최소 100px */
```

---

## 자동으로 칼럼 개수를 조절하는 auto-fill, auto-fit 값

```
grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 배치 */
grid-template-columns: repeat(auto-fit, 200px); /* 너비가 200px인 칼럼을 화면 너비에 가득 배치합니다. */
```

---

## 그리드 항목의 간격을 지정하는 gird-column-grap, grid-row-gap, grid-gap 속성

| 종류            | 설명                                         |
| :-------------- | :------------------------------------------- |
| grid-column-gap | 칼럼과 칼럼 사이의 간격을 지정합니다.        |
| grid-row-gap    | 줄과 줄 사이의 간격을 지정합니다.            |
| grid-gap        | 칼럼과 줄 사이의 간격을 한꺼번에 지정합니다. |

---

## 그리드 라인을 이용해 배치하기

| 종류              | 설명                                                              | 예시                 |
| :---------------- | :---------------------------------------------------------------- | :------------------- |
| grid-column-start | 칼럼 시작의 라인 번호를 지정합니다.                               | grid-column-start: 1 |
| grid-column-end   | 칼럼 마지막 라인의 번호를 지정합니다.                             | grid-column-end: 1   |
| grid-column       | 칼럼 시작 번호와 칼럼 끝 번호 사이에 슬래시(/)를 넣어 사용합니다. | grid-column: 1/4     |
| grid-row-start    | 줄 시작의 라인 번호를 지정합니다.                                 | grid-row-start: 2    |
| grid-row-end      | 줄 마지막의 라인 번호입니다.                                      | grid-row-end: 4      |
| grid-row          | 줄 시작 번호와 줄 끝 번호 사이에 슬래시(/)를 넣어 사용합니다.     | grid-row: 2/4        |

---

## 탬플릿 영역을 만들어 배치하기

```
#wrapper {
  grid-template-areas:
   "box1 box1 box1" (한 줄에 들어갈 템플릿 영역을 큰따옴표(" ")로 묶습니다.)
   "box2 box3 box3"
   "box2 . box4" (빈 영역은 마침표(.)를 넣습니다.)
}
```
