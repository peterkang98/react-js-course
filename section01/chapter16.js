// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수 객체는 프로퍼티 CRUD는 얼마든지 가능. 새로운 객체를 할당하지 못할 뿐
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드 선언
  sayHey: () => console.log("Hey"),
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
person.sayHey();