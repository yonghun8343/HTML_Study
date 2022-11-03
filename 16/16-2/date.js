const now = new Date();
const yesterday = new Date("2022-11-02");
const yesterday12 = new Date("2022-11-02T12:00:00");

// 현재 년도의 전체를 보여줍니다
now.getFullYear(); // 2022

// 1900 기준으로 현재 년도와의 차이를 계산해줍니다.
// Deprecate가 되어 현재 사용하지 않습니다.
// now.getYear();

// getMonth는 1월이 0으로 나옵니다. 그러므로 현재 월을 알고 싶으면 +1을 해 주어야합니다.
const temp = new Date("2022-01-01");
temp.getMonth(); // 0

// "일"을 알고싶을 때는 Date
temp.getDate();

// 요일을 알고싶다.
// 0 -> 일
// 1 -> 월
// 2 -> 화
// 3 -> 수
// 4 -> 목
// 5 -> 금
// 6 -> 토
temp.getDay();

temp.getTime();

// 쿠폰 발행일 -> 11월 4일 까지
// 현재 날짜 -> 11월 3일

// 쿠폰발행일 = getMonth() getDate()
// 현재날짜 = getMonth() getDate()

// 계산이 가능은 함.

const coupon = new Date("2022-11-02T00:00:00");
const limit = coupon.getTime();

const now1 = new Date();
const now2 = now1.getTime();

if (limit - now2 > 0) {
  console.log("쿠폰이 사용 가능합니다.");
} else {
  console.log("쿠폰이 만료 되었습니다.");
}

// 몇시 인지를 알고싶을때
// 0~23를 기준으로 나옵니다.
const now3 = new Date();
now3.getHours();
now3.getMinutes();
now3.getSeconds();
now3.getMilliseconds();

// 시간 정보를 가지고 오는 메소드
// -------

// 시간 정보를 설정하는 메소드

const now_4 = new Date("2022-11-03");
// 이거를 대신해서 지금 시간이나 아무 시간을 기준으로 시간을 새롭게 설정하는 메소드

const now4 = new Date();
now4.setFullYear(2023);
now4.setMonth(1);
now4.setDate(30);
now4.setTime(1680274636596); // 밀리초 기준으로 시간 설정
now4.setHours(17);
now4.setMinutes(30);
now4.setSeconds(00);
now4.setMilliseconds(500);

// 오늘로 부터 입력받은 몇일이 지난 날의 날짜를 계산해 주세요

const date = new Date();
const value = prompt("일을 입력 해 주세요");
date.setDate(value);
alert(date.toLocaleString());
