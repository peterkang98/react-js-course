// 자바스크립트 엔진에는 쓰레드가 1개 밖에 없음
console.log(1);

// 비동기적으로 3초 후에 콜백 함수를 실행
// 자바스크립트 엔진이 아닌 Web APIs(브라우저가 직접 관리하는 별도의 영역)에서 실행됨
setTimeout(() => console.log(2),3000);

console.log(3);

