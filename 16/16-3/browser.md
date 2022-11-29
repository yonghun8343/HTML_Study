# 브라우저와 관련된 객체

자바스크립트에서 브라우저와 관련하여 제공해 주는 객체는 다음과 같습니다.

| 종류      | 설명                                                                                           |
| :-------- | :--------------------------------------------------------------------------------------------- |
| window    | 브라우저 창이 열릴 때마다 하나씩 만들어집니다. 브라우저 창 안의 요소 중에서 최상위에 있습니다. |
| document  | 웹 문서마다 하나씩 있으며 \<body\> 태그를 만나면 만들어집니다.                                 |
| navigator | 현재 사용하는 브라우저의 정보가 들어 있습니다.                                                 |
| history   | 현재 창에서 사용자의 빙문 기록을 저장합니다.                                                   |
| location  | 현재 페이지의 URL 정보가 담겨 있습니다.                                                        |
| screen    | 현사 사용하는 화면 정보를 다룹니다.                                                            |

---

## window

### window 객체의 프로퍼티

| 종류           | 설명                                                                                                           |
| :------------- | :------------------------------------------------------------------------------------------------------------- |
| document       | 브라우저 창에 표시된 웹 문서에 접근 할 수 있습니다.                                                            |
| frameElement   | 현재 창이 다른 요소 안에 포함되어 있을 경우 그 요소를 반환하고, 반대로 포함되어 있지 않으면 null을 반환합니다. |
| innerHeight    | 내용 영역의 높이를 나타냅니다.                                                                                 |
| innerWidth     | 내용 영역의 너비를 나타냅니다.                                                                                 |
| localStorage   | 웹 브라우저에서 데이터를 저장하는 로컬 스토리지를 반환합니다.                                                  |
| location       | window 객체의 위치 또는 현재 URL을 나타냅니다.                                                                 |
| name           | 브라우저 창의 이름을 가져오거나 수정합니다.                                                                    |
| outerHeight    | 브라우저 창의 바깥 높이를 나타냅니다.                                                                          |
| outerWidth     | 브라우저 창의 바깥 너비를 나타냅니다.                                                                          |
| pageXOffset    | 스크롤했을 때 수평으로 이동하는 픽셀 수로 scrollX와 같습니다.                                                  |
| pageYOffset    | 스크롤했을 때 수직으로 이동하는 픽셀 수로 scrollY와 같습니다.                                                  |
| parent         | 현재 창이나 서브 프레임의 부모입니다.                                                                          |
| screenX        | 브라우저 창의 왼쪽 테두리가 모니터 왼쪽 테두리에서 떨어져 있는 거리를 나타냅니다.                              |
| screenY        | 브라우저 창의 위쪽 테두리가 모니터 위쪽 테두리에서 떨어져 있는 거리를 나타냅니다.                              |
| scrollX        | 스크롤 했을 때 수평으로 이동하는 픽셀 수를 나타냅니다.                                                         |
| scrollY        | 스크롤 했을 때 수평으로 이동하는 픽셀 수를 나타냅니다.                                                         |
| sessionStorage | 웹 브라우저에서 데이터를 저장하는 세션 스토리지를 반환합니다.                                                  |

### 로컬 스토리지와 세션 스토리지의 차이점은

로컬 스토리지는 내가 브라우저에서 정보를 지우지 않는 한 삭제되지 않습니다. 하지만 세션 스토리지는 브라우저를 껏다 켰을 때 즉시 사라지는 스토리지 입니다.

### window 객체의 메소드

| 종류            | 설명                                                |
| :-------------- | :-------------------------------------------------- |
| alert()         | 알림 창을 표시합니다.                               |
| bulr()          | 현재 창에서 포커스를 제거합니다.                    |
| close()         | 현재 창을 닫습니다.                                 |
| confirm()       | \[확인\], \[취소\] 버튼이 있는 확인창을 표시합니다. |
| focus()         | 현제 창에 포커스를 부여합니다.                      |
| moveBy()        | 현재 창을 지정한 크기만큼 이동합니다.               |
| moveTo()        | 현재 창을 지정한 좌표로 이동합니다.                 |
| open()          | 새로운 창을 엽니다.                                 |
| postMessage()   | 메시지를 다른 창으로 전달합니다.                    |
| print()         | 현재 문서를 인쇄합니다.                             |
| prompt()        | 프롬프트 창에 입력한 텍스트를 반환합니다.           |
| resizeBy()      | 지정한 크기만큼 현재 창의 크기를 조절합니다.        |
| scroll()        | 문서에서 특정 위치로 스크롤 합니다.                 |
| scrollBy()      | 지정한 크기 만큼씩 스크롤 합니다.                   |
| scrollTo()      | 지정한 위치까지 스크롤 합니다.                      |
| sizeToContent() | 내용에 맞게 창의 크기를 맞춥니다.                   |
| stop()          | 로딩을 중지합니다.                                  |

---

## navigator

브라우저와 렌더링 엔진과 관련된 정보들이 있습니다.

주로 어느 환경, 아이피 와 같은 것들을 확인 하기 위해서 사용 됩니다.

---

## history

우리가 페이지를 이동 했던 기록들이 브라우저에 저장이 되고 이를 활용 할 수 있는 객체입니다.

### 프로퍼티

| 종류   | 설명                                                                                    |
| :----- | :-------------------------------------------------------------------------------------- |
| length | 현재 브라우저 창의 history 목록에 있는 항목의 개수, 즉 방문한 사이트 개수가 저장됩니다. |

### 메소드

| 종류      | 설명                                                                                                                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| back()    | history 목록에서 이전 페이지를 현재 화면으로 불러옵니다.                                                                                                                                    |
| forward() | history 목록에서 다음 페이지를 현재 화면으로 불러옵니다.                                                                                                                                    |
| go()      | history 목록에서 현재 페이지를 기준으로 상대적인 위치에 있는 페이지를 현재 화면으로 불러옵니다. 예를들어 history.go(1)은 다음 페이지를 가져오고, history.go(-1)은 이전 페이지를 불러옵니다. |

---

## location

브러우저의 주소와 관련된 프로퍼티와 메소드를 가진 객체입니다.

### 프로퍼티

| 종류     | 설명                                                                                                            |
| :------- | :-------------------------------------------------------------------------------------------------------------- |
| hash     | URL 중에서 #로 시작하는 해시 부분의 정보를 담고 있습니다.                                                       |
| host     | URL의 호스트 이름과 포트 번호를 담고 있습니다.                                                                  |
| hostname | URL의 호스트 이름이 저장됩니다.                                                                                 |
| href     | 전체 URL입니다. 이 값을 변경하면 해당 주소로 이동할 수 있습니다.                                                |
| pathname | URL 경로가 저장됩니다.                                                                                          |
| port     | URL의 포트 번호를 담고 있습니다.                                                                                |
| protocol | URL의 포트 번호를 담고 있습니다.                                                                                |
| password | 도메인 이름 앞에 username과 password를 함께 입력해서 접속하는 사이트의 URL일 경우에 password 정보를 저장합니다. |
| search   | URL 중에서 ?로 시작하는 검색 내용을 저장합니다.                                                                 |
| username | 도메인 이름 앞에 username을 함꼐 입력해서 접속하느 사이트의 URL일 경우에 username 정보를 저장합니다.            |

### 메소드

| 종류       | 설명                                                      |
| :--------- | :-------------------------------------------------------- |
| assign()   | 현재 문서에 새 문서 주소를 할당해서 새 문서를 가져옵니다. |
| reload()   | 현재 문서를 다시 불러옵니다.                              |
| replace()  | 현재 문서의 URL을 지우고 다른 URL의 문서로 교체합니다.    |
| toString() | 현재 문서의 URL을 문자열로 반환합니다.                    |

## screen

사용자의 화면 크기나 정보를 알기 위해 screen 객체를 사용합니다.

### 프로퍼티

| 종류        | 설명                                                                                   |
| :---------- | :------------------------------------------------------------------------------------- |
| availHeight | UI 영역(예를들어 윈도우의 작업 표시줄이나 Mac의 독)을 제외한 영역이 높이를 나타냅니다. |
| availWidth  | UI 영역을 제외한 내용 표시 영역의 너비를 나타냅니다.                                   |
| colorDepth  | 화면에서 픽셀을 렌더링 할 때 사용하는 색상 수를 나타냅니다.                            |
| height      | UI 영역을 포함한 화면의 높이를 나타냅니다.                                             |
| orientation | 화면의 현재 방향을 나타냅니다.                                                         |
| pixelDepth  | 화면에서 픽셀을 렌더링 할 때 사용하는 비트 수를 나타냅니다.                            |
| width       | UI 영역을 포함한 화면의 너비를 나타냅니다.                                             |

### 메소드

| 종류                | 설명                         |
| :------------------ | :--------------------------- |
| lockOrientation()   | 화면 방향을 잠급니다.        |
| unlockOrientation() | 화면 방향 잠금을 해제합니다. |