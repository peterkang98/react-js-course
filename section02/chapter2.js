function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 단락 평가(Short-circuit Evaluation)
// 논리 연산식에서 첫 번째 피연산자의 값만으로도 해당 연산의 결과를 확정 지을 수 있으면 나머지는 실행도 안 함
console.log(returnFalse() && returnTrue());

console.log(returnTrue() || returnFalse())

// Truthy/Falsey의 경우에도 단락 평가가 적용됨. 그리고 Truthy/Falsey 값 자체를 반환
function returnUndefined() {
  console.log("undefined 함수");
  return undefined;
}

function returnTen() {
  console.log("10 함수");
  return 10;
}

console.log(returnTen() || returnUndefined()) //반환 값 10

// 단락 평가 활용 사례
function printName(person) {
  // person이 Falsey하다면 person.name은 실행조차 안 함
  // Truthy && Truthy = 마지막 Truthy를 반환 (왜냐면 마지막 피연산자까지 체크해야 연산의 결과를 확정지을 수 있으니까)
  const name = person && person.name;
  // Truthy || Truthy = 첫 번째 Truthy를 반환 (왜냐면 첫번째 피연산자가 Truthy면 나머지는 체크 안해도 되니까)
  console.log(name || "person의 값이 없음");
}

printName();
printName({name: "강동현"});
