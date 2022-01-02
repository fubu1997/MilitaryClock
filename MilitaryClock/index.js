const 육군Btn = document.querySelector("#육군");
const 해군Btn = document.querySelector("#해군");
const 공군Btn = document.querySelector("#공군");
const 의무경찰Btn = document.querySelector("#의무경찰");
const 해양의무경찰Btn = document.querySelector("#해양의무경찰");
const 의무소방Btn = document.querySelector("#의무소방");
const 사회복무요원Btn = document.querySelector("#사회복무요원");

const insertForm = document.querySelector(".insertForm");
const insertDateText = document.querySelector("#insertDateText");

const 육군복무일 = 545;
const 해군복무일 = 607;
const 공군복무일 = 637;
const 의무경찰복무일 = 545;
const 해양의무경찰복무일 = 607;
const 의무소방복무일 = 607;
const 사회복무요원복무일 = 637;

//1. 육군,해군,공군등 버튼을 누르면 계산탭과 총복무일을 나타낸다.
육군Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertForm.classList.add("1");
  insertDateText.innerHTML = `  육군 총 복무일 : ${육군복무일}일 (1년 6개월)`;
});
해군Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  해군 총 복무일 : ${해군복무일}일 (1년 8개월)`;
});
공군Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  공군 총 복무일 : ${공군복무일}일 (1년 9개월)`;
});
의무경찰Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  의무경찰 총 복무일 : ${의무경찰복무일}일 (1년 6개월)`;
});
해양의무경찰Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  해양의무경찰 총 복무일 : ${해양의무경찰복무일}일 (1년 8개월)`;
});
의무소방Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  의무소방 총 복무일 : ${의무소방복무일}일 (1년 8개월)`;
});
사회복무요원Btn.addEventListener("click", function () {
  insertForm.classList.remove("hidden");
  insertDateText.innerHTML = `  사회복무요원 총 복무일 : ${사회복무요원복무일}일 (1년 9개월)`;
});
//-----------------------------------------------------------------------------------------
//2. 입대일을 입력받아 전역일을 계산한다.
insertBtn.addEventListener("click", function () {
  const insertDate = document.querySelector("#insertDate").value;
  const insertBtn = document.querySelector("#insertBtn");
  let setInsertDate = new Date(insertDate); //입력받은 날짜

  //육군전역일 계산
  let 육군전역년 = setInsertDate.getFullYear() + 1;
  let 육군전역월 = setInsertDate.getMonth() + 7;
  if (육군전역월 > 12) {
    육군전역년 = 육군전역년 + 1;
    육군전역월 = 육군전역월 - 12;
  }
  const 육군전역일 = `${육군전역년}년 ${육군전역월}월 ${setInsertDate.getDate()}일`;
  //해군전역일 계산
  let 해군전역년 = setInsertDate.getFullYear() + 1;
  let 해군전역월 = setInsertDate.getMonth() + 9;
  if (해군전역월 > 12) {
    해군전역년 = 해군전역년 + 1;
    해군전역월 = 해군전역월 - 12;
  }
  const 해군전역일 = `${해군전역년}년 ${해군전역월}월 ${setInsertDate.getDate()}일`;
  //공군전역일 계산
  let 공군전역년 = setInsertDate.getFullYear() + 1;
  let 공군전역월 = setInsertDate.getMonth() + 10;
  if (공군전역월 > 12) {
    공군전역년 = 공군전역년 + 1;
    공군전역월 = 공군전역월 - 12;
  }
  const 공군전역일 = `${공군전역년}년 ${공군전역월}월 ${setInsertDate.getDate()}일`;
  //의무경찰전역일 계산
  let 의무경찰전역년 = setInsertDate.getFullYear() + 1;
  let 의무경찰전역월 = setInsertDate.getMonth() + 7;
  if (의무경찰전역월 > 12) {
    의무경찰전역년 = 의무경찰전역년 + 1;
    의무경찰전역월 = 의무경찰전역월 - 12;
  }
  const 의무경찰전역일 = `${의무경찰전역년}년 ${의무경찰전역월}월 ${setInsertDate.getDate()}일`;
  //해양의무경찰전역일 계산
  let 해양의무경찰전역년 = setInsertDate.getFullYear() + 1;
  let 해양의무경찰전역월 = setInsertDate.getMonth() + 9;
  if (해양의무경찰전역월 > 12) {
    해양의무경찰전역년 = 해양의무경찰전역년 + 1;
    해양의무경찰전역월 = 해양의무경찰전역월 - 12;
  }
  const 해양의무경찰전역일 = `${해양의무경찰전역년}년 ${해양의무경찰전역월}월 ${setInsertDate.getDate()}일`;
  //의무소방전역일 계산
  let 의무소방전역년 = setInsertDate.getFullYear() + 1;
  let 의무소방전역월 = setInsertDate.getMonth() + 9;
  if (의무소방전역월 > 12) {
    의무소방전역년 = 의무소방전역년 + 1;
    의무소방전역월 = 의무소방전역월 - 12;
  }
  const 의무소방전역일 = `${의무소방전역년}년 ${의무소방전역월}월 ${setInsertDate.getDate()}일`;
  //사회복무요원전역일 계산
  let 사회복무요원전역년 = setInsertDate.getFullYear() + 1;
  let 사회복무요원전역월 = setInsertDate.getMonth() + 10;
  if (사회복무요원전역월 > 12) {
    사회복무요원전역년 = 사회복무요원전역년 + 1;
    사회복무요원전역월 = 사회복무요원전역월 - 12;
  }
  const 사회복무요원전역일 = `${사회복무요원전역년}년 ${사회복무요원전역월}월 ${setInsertDate.getDate()}일`;

  //계산하기 누를때 육군탭이면 육군전역일을 보여준다
  const FinalDay = document.querySelector("#FinalDay");
  if ($(".insertForm").hasClass("1") === true) {
    FinalDay.innerHTML = `전역일 : ${육군전역일}`;
  }
});
