// JavaScript의 모든 값은 Truthy하거나 Falsy함

// Truthy: 조건문에서 참으로 평가되는 값들 (참 같은 값)
// Falsy를 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("truthy");
}


// Falsy: 조건문에서 거짓으로 평가되는 값들 (거짓 같은 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //BigInt

if (!f1) {
  console.log("falsy");
}

// 활용 사례
// 매개변수로 받은 객체 또는 그 객체 안에 속성이 있는지 없는지 먼저 확인해야 할 때
function printName(person) {
  if (!person) {
    console.log("person이 비어 있음");
    return
  }
  console.log(person.name);
}

let person = { name: "강동현"};
printName(person);
