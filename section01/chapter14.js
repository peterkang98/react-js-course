// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();

// 예외적으로 조건문이나 반복문 안에서는 함수 선언문이 지역 스코프를 갖지 않음.
// 함수 선언문은 다른 함수 안에서 선언 되었을 때만 지역 스코프를 가짐
if (true) {
  let c = 1;

  function funcB() {
    console.log("funcB")
  }
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

funcB();