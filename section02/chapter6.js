// 1. 배열 순회
let arr = [1, 2, 3]

// 모든 배열은 length라는 프로퍼티를 가짐
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열, 문자열 등 iterable 순회를 위한 for of 반복문
for (let item of arr) {
  console.log(item);
}


// 2. 객체 순회
let person = {
  name: "강동현",
  age: 27,
  hobby: "농구"
}

// 객체에서 키만 다 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  console.log(`${key}: ${person[key]}`);
}

// 객체에서 값만 다 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}

// 객체 순회를 위한 특수 반복문 for in
for (let key in person) {
  console.log(key, person[key]);
}