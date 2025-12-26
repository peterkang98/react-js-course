// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환을 하는 것

let num = 10;
let str = "20";

const result = num + str; // number + string = string
                                // number를 암묵적으로 String으로 변환 시킴 (String 우선)

console.log(result);  // "1020"

let comp1 = 1 == "1"; // string을 암묵적으로 Number로 변환 시켜서 비교함
                              // therefore true (Number 우선)

let comp2 = 1 === "1"; // 1. 타입 비교 2. 값 비교 순으로 진행.
                               // 타입이 다르므로 바로 false를 반환
                               // 값 비교할 때는 === 사용


// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 10 -> 숫자 값이 아닌 "개"는 무시함
                                        // 단 숫자가 맨 앞에 있어야 함 abc10 이건 해석 불가

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
