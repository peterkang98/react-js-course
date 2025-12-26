// 콜백 함수
// 자신이 아닌 다른 함수에, 인수로서 전달된 함수를 의미 함
// callback = 값으로 전달한 함수가 나중에 알아서 호출됨

function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 함수 표현식을 써도 됨
main(() => console.log("i am function expression"));


// 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => console.log(idx * 2));
repeat(5, (idx) => console.log(idx * 3));
repeat(5, (idx) => console.log(idx * 4));