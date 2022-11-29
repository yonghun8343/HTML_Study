// 콘솔에서 작업 시 확인이 가능함.

window;
window.document; // body안에 값을 확인 할 수 있습니다.
window.frameElement;
window.innerHeight; // 현재 보고 있는 내용의 높이를 알려줍니다.
window.innerWidth; // 현재 보고 있는 내용의 가로를 알려줍니다.(스크롤 바의 가로 픽셀이 포함된 크기 입니다.)
localStorage; // 브라우저에서 가지고 있는 저장소
window.outerHeight; // 사용자 화면 전체의 높이
window.outerWidth; // 사용자 화면 전체의 가로

// 채워넣기

// window에 있는 메소드들
window.alert("가나다라");

let w = window.open("", "", "width=200px, height=200px");
w.moveBy(50, 50);

// location.href 에서 github 계정만 수집 하는 방법

let location2 = {
  href: "https://github.com/yonghun8343/HTML_Study/blob/main/16/16-3/browser.md",
};

location2.href.split("/")[3];
