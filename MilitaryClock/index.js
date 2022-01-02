"use strict";

const insertBtn = document.querySelector("#insertBtn");
const prograssBar = document.querySelector(".prograssBar");

insertBtn.addEventListener("click", function () {
  const 년입력 = document.querySelector("#Year").value;
  const 월입력 = document.querySelector("#Month").value;
  const 일입력 = document.querySelector("#day").value;
  const 날짜입력 = document.querySelector("#insertDate").value;

  const 육군setDate = AddDays(날짜입력, 545);
  const setDateYear = 육군setDate.getFullYear();
  const setDateMonth = 육군setDate.getMonth();
  const setDateDay = 육군setDate.getDate();
  const now = new Date();
  const distance = 육군setDate.getTime() - now.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const P = document.createElement("p");
  const pText =
    document.createTextNode(`${setDateYear}년 ${setDateMonth}월 ${setDateDay}일까지
      ${day}일
      ${hours < 10 ? `0${hours}` : hours}시간
      ${minutes < 10 ? `0${minutes}` : minutes}분
      ${seconds < 10 ? `0${seconds}` : seconds}초 남았습니다.`);
  P.appendChild(pText);
  prograssBar.appendChild(P);
});

function AddDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
