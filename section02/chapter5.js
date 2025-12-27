// 원시 타입과 객체 타입은 값이 저장되거나 복사되는 과정이 서로 다름

// 원시 타입 - string, number, bigInt, boolean, null, undefined, symbol
// 메모리에 있는 원본 데이터를 수정할 수 없음.
// 값을 바꿀 때마다 새로운 메모리 주소를 할당해서 새로운 값을 가리키게함 (불변값/immutable)
// 값 자체로서 변수에 저장되고 복사 됨


// 객체 타입(Object) - Array, Function, RegexExp...
// 메모리에 있는 원본 데이터를 수정할 수 있음 (가변값/mutable)
// 참조 값을 통해 변수에 저장되고 복사됨

// 얕은 복사
let o1 = {name: "강동현"};
let o2 = o1; // o1과 같은 객체를 참조하고 있음

// 깊은 복사
let o3 = {name: "강동현"};
let o4 = { ...o3 }; // spread 연산자를 사용해서 o3와 같은 속성을 가지는 새로운 객체를 생성(메모리 상 서로 다른 객체)

// 주의사항: 객체간의 비교는 참조값 기준 (얕은 비교)
console.log(o1 === o2); //true
console.log(o3 === o4); //false

// 프로퍼티 기준으로 비교하고 싶다면 (깊은 비교)
// 객체를 문자열로 변환하는 메소드를 사용
console.log(JSON.stringify(o3) === JSON.stringify(o4)); //true