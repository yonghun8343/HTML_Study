# 플렉스 박스

**_여기 설명에서 주축은 "가로"로 표기하며, 교차축은 "세로"로 표현합니다._**

## 플렉스 박스 항목을 배치하는 속성

| 종류            | 설명                                                   |
| :-------------- | :----------------------------------------------------- |
| justify-content | 가로 방향의 정렬 방법입니다.                           |
| align-items     | 세로 방향의 정렬 방법입니다.                           |
| align-self      | 세로 방향에 있는 개별 항목의 정렬 방법입니다.          |
| align-content   | 세로 방향에서 여러 줄로 표시된 항목의 정렬 방법입니다. |

---

## 플렉스 컨테이너를 지정하는 display 속성

| 종류        | 설명                                                       |
| :---------- | :--------------------------------------------------------- |
| flex        | 컨테이너 안의 플렉스 항목을 블록 레벨 요소로 배치합니다.   |
| inline-flex | 컨테이너 안의 플렉스 항목을 인라인 레벨 요소로 배치합니다. |

---

## 플렉스 방향을 지정하는 flex-direction 속성

| 종류           | 설명                                                        |
| :------------- | :---------------------------------------------------------- |
| row            | 가로 방향으로 왼쪽에서 오른쪽으로 배치합니다. 기본값입니다. |
| row-reverse    | 가로 방향으로 반대로 오른쪽에서 왼쪽으로 배치합니다.        |
| column         | 세로 방향으로 지정하고 위쪽에서 아래쪽으로 배치합니다.      |
| column-reverse | 세로 방향으로 지정하고 아래쪽에서 위쪽으로 배치합니다.      |

---

## 플렉스 항목의 줄을 바꾸는 flex-wrap 속성

| 종류         | 설명                                                        |
| :----------- | :---------------------------------------------------------- |
| nowrap       | 플렉스 항목을 한 줄에 표시합니다. 기본값입니다.             |
| wrap         | 플렉스 항목을 여러 줄에 표시합니다.                         |
| wrap-reverse | 플렉스 항목을 여러 줄에 표시하되, 시작점과 끝점이 바뀝니다. |

---

## 배치 방향과 줄 바꿈을 한꺼번에 지정하는 flex-flow 속성

```
예시
#exam {
  /*flex-flow: <flex-direction> <flex-wrap>*/
  flex-flow: row, wrap;
}
```

## 가로 정렬 방법을 지정하는 justify-content 속성

| 종류          | 설명                                                                                                        |
| :------------ | :---------------------------------------------------------------------------------------------------------- |
| flex-start    | 가로의 시작점에 맞춰 배치합니다.                                                                            |
| flex-end      | 가로의 끝점에 맞춰 배치합니다.                                                                              |
| center        | 가로의 중앙에 맞춰 배칳바니다.                                                                              |
| space-between | 첫 번째 항목과 끝 항목을 가로의 시작점과 끝점에 배치한 후 나머지 항목은 그 사이에 같은 간격으로 배치합니다. |
| space-around  | 모든 항목을 가로에 같은 간격으로 배치합니다.                                                                |

---

## 세로 정렬 방법을 지정하는 align-items 속성

| 종류       | 설명                                            |
| :--------- | :---------------------------------------------- |
| flex-start | 세로의 시작점에 맞춰 배치합니다.                |
| flex-end   | 세로의 끝점에 맞춰 배치합니다.                  |
| center     | 세로의 중앙에 맞춰 배칳바니다.                  |
| baseline   | 세로의 문자 기준선에 맞춰 배치합니다.           |
| stretch    | 플렉스 항목을 늘려 세로에 가득 차게 배치합니다. |

---

## 여러 줄일 때 교차축 정렬 방법을 지정하는 align-content 속성

| 종류          | 설명                                                                                                        |
| :------------ | :---------------------------------------------------------------------------------------------------------- |
| flex-start    | 세로의 시작점에 맞춰 배치합니다.                                                                            |
| flex-end      | 세로의 끝점에 맞춰 배치합니다.                                                                              |
| center        | 세로의 중앙에 맞춰 배칳바니다.                                                                              |
| space-between | 첫 번째 항목과 끝 항목을 세로의 시작점과 끝점에 배치한 후 나머지 항목은 그 사이에 같은 간격으로 배치합니다. |
| space-around  | 모든 항목을 세로에 같은 간격으로 배치합니다.                                                                |
| stretch       | 플렉스 항목을 늘려 세로에 가득 차게 배치합니다.                                                             |

---
