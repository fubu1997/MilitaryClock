//각 직별 전역일
const 육군전역일 = [545, "1년 6개월", 1, 6];
const 공군전역일 = [637, "1년 9개월", 1, 9];
const 해군전역일 = [607, "1년 8개월", 1, 8];
const 해병대전역일 = [545, "1년 6개월", 1, 6];
const 의무경찰전역일 = [545, "1년 6개월", 1, 6];
const 해양의무경찰전역일 = [607, "1년 8개월", 1, 8];
const 의무소방전역일 = [607, "1년 8개월", 1, 8];
const 사회복무요원전역일 = [637, "1년 9개월", 1, 9];

//각 버튼을 누르면 입대일 입력칸과 총복무일수를 나타낸다.
const 직별btn = document.querySelector(".직별btn");
const inputContainer = document.querySelector(".inputContainer");
const inputContainerP = document.querySelector(".inputContainer p");

직별btn.addEventListener("click", function (e) {
  if (inputContainer.classList.contains("hidden")) {
    inputContainer.classList.remove("hidden");
    if (e.target.innerText == "육군") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${육군전역일[0]}일 (${육군전역일[1]})`;
    } else if (e.target.innerText == "해군") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${해군전역일[0]}일 (${해군전역일[1]})`;
    } else if (e.target.innerText == "공군") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${공군전역일[0]}일 (${공군전역일[1]})`;
    } else if (e.target.innerText == "해병대") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${해병대전역일[0]}일 (${해병대전역일[1]})`;
    } else if (e.target.innerText == "의무경찰") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${의무경찰전역일[0]}일 (${의무경찰전역일[1]})`;
    } else if (e.target.innerText == "해양의무경찰") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${해양의무경찰전역일[0]}일 (${해양의무경찰전역일[1]})`;
    } else if (e.target.innerText == "의무소방") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${의무소방전역일[0]}일 (${의무소방전역일[1]})`;
    } else if (e.target.innerText == "사회복무요원") {
      inputContainerP.innerHTML = `${e.target.innerText} 총 복무일 : ${사회복무요원전역일[0]}일 (${사회복무요원전역일[1]})`;
    }
  } else {
    inputContainer.classList.add("hidden");
  }

  //입대일을 입력하면 입대일입력값을 저장하고 계산하기를 누루면
  //입대일 + 00총 복무일수를 더해서 출력한다.
  const 입대일 = document.querySelector(".inputBox");
  const 계산하기 = document.querySelector(".calBtn");
  계산하기.addEventListener("click", function (event) {
    event.preventDefault();
    today = new Date();
    todayYear = today.getFullYear();
    todayMonth = today.getMonth() + 1;
    todayDay = today.getDate();
    today1 = new Date(todayYear, todayMonth, todayDay);
    data = new Date(입대일.value);
    dataYear = data.getFullYear();
    dataMonth = data.getMonth() + 1;
    dataDay = data.getDate();

    if (e.target.innerText == "육군") {
      전역일계산(육군전역일);
      복무일계산(육군전역일);
    } else if (e.target.innerText == "해군") {
      전역일계산(해군전역일);
      복무일계산(해군전역일);
    } else if (e.target.innerText == "공군") {
      전역일계산(공군전역일);
      복무일계산(공군전역일);
    } else if (e.target.innerText == "해병대") {
      전역일계산(해병대전역일);
      복무일계산(해병대전역일);
    } else if (e.target.innerText == "의무경찰") {
      전역일계산(의무경찰전역일);
      복무일계산(의무경찰전역일);
    } else if (e.target.innerText == "해양의무경찰") {
      전역일계산(해양의무경찰전역일);
      복무일계산(해양의무경찰전역일);
    } else if (e.target.innerText == "의무소방") {
      전역일계산(의무소방전역일);
      복무일계산(의무소방전역일);
    } else if (e.target.innerText == "사회복무요원") {
      전역일계산(사회복무요원전역일);
      복무일계산(사회복무요원전역일);
    }
  });
});

function 전역일계산(직별) {
  const 전역예정일 = document.querySelector(".calResult");
  if (dataMonth + 직별[3] > 12) {
    dataYear++;
    dataMonth = dataMonth - 12;
    전역예정일.innerHTML = `전역예정일 : ${dataYear + 직별[2]} 년 ${
      dataMonth + 직별[3]
    } 월 ${dataDay} 일`;
  } else {
    전역예정일.innerHTML = `전역예정일 : ${dataYear + 직별[2]} 년 ${
      dataMonth + 직별[3]
    } 월 ${dataDay} 일`;
  }
  전역일계산결과 = new Date(
    dataYear + 직별[2],
    dataMonth + 직별[3],
    dataDay - 1
  );
}

function 복무일계산(직별) {
  const 현재까지복무일 = document.querySelector(".currentResult");
  const 뺀날짜Msec = 전역일계산결과.getTime() - today1.getTime();
  const 뺀날짜 = 뺀날짜Msec / (1000 * 3600 * 24);
  const 복무일 = 직별[0] - 뺀날짜;
  const 복무일percentage = (복무일 / 직별[0]) * 100;
  const 퍼센테지바 = document.querySelector(".percentagebar");

  if (복무일 < 0) {
    현재까지복무일.innerText = `현재까지 총 복무일 : 입대일까지 D-day ${복무일}일 입니다.`;
  } else {
    현재까지복무일.innerText = `현재까지 총 복무일 :  ${복무일}일 입니다.`;
  }
  //현재까지 복무일을 %로 치환 프로그래스바에 대입한다.
  //그리고 만약 %가 0%라면 프로그래스바div스타일의 width를 0%로 나머지는 %로 변환
  if (복무일percentage.toFixed(2) < 0) {
    퍼센테지바.style.width = `100%`;
    퍼센테지바.innerText = `입대 전 입니다.`;
  } else {
    퍼센테지바.style.width = `${복무일percentage.toFixed(2)}%`;
    퍼센테지바.innerText = `${복무일percentage.toFixed(2)}%`;
  }
}
