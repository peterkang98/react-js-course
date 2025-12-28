// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 모듈을 대표하는 하나의 기본 값
export default function multiply(a, b) {
  return a * b;
};

// CJS (Common JS 모듈 시스템)로 내보내기
// package.json에 "type": "commonjs" 를 명시해야 함
// module.exports = {
//   add: add,
//   sub: sub
// }


// esmodule로 내보내기 (또는 함수 선언할 때 export 키워드를 붙여도 됨)
// export { add, sub };