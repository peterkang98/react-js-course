// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three) // 1 2 3

let [one1, two1] = arr;
console.log(one1, two1) // 1 2

// 2. 객체의 구조 분해 할당
let person = {
  name: "강동현",
  age: 27,
  hobby: "기타 연주",
};


let {
  name,
  age: myAge, // age: myAge 처럼 할당받는 변수의 이름도 변경 가능
  hobby = "cello", // 기본 값 설정도 가능 (객체에 해당 속성의 값이 있으면 그 값을 사용)
  extra="hello" // 객체에 속성의 값이 없는 경우 기본 값 사용
} = person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 매개변수 선언부에서 바로 객체를 구조 분해
const func = ({name, age, hobby}) => {
  console.log(name, age, hobby);
};

func(person)