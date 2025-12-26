// 함수 선언문으로 함수를 생성
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();


// 함수 표현식: 값으로서 함수를 생성함
// 함수 표현식은 호이스팅의 대상이 되지 않음 (선언 후에만 사용 가능)
// 익명 함수
let varB = function () {
  console.log("funcB");
};

varB();

// 화살표 함수

let varC = () => {
  return 1;
};

varC = (value) => value + 1;

console.log(varC(5));