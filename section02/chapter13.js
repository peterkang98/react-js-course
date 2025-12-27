// promise = 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JS의 내장 객체
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 실행하는 함수
  // executor

  setTimeout(() => {
    console.log("안녕");
    resolve("안녕"); //PromiseState을 fulfilled로 바꾸고, 매개변수로 PromiseResult 값을 전달
    // reject("왜 실패했는지 ...");
  }, 2000);
});

console.log(promise);

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.")
      }
    }, 2000);
  });

  return promise;
}

// resolve() 가 실행됐을 때 then()을 실행
// then()은 promise를 반환하기 때문에 메소드 체이닝 가능 = Promise Chaining
add10(3)
  .then((value) => {
    console.log(value);
  }).catch((error) => {
    console.log(error)
  });

// 콜백 지옥을 막기 위해서는 then()에서 새로운 Promise 객체를 리턴하자
add10(0)
  .then((value) => {
    console.log(value)
    return add10(value);
  })
  .then((value) => {
    console.log(value)
    return add10(value);
  })
  .then((value) => {
    console.log(value)
    return add10(value);
  });