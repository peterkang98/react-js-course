// 1. null 병합 연산자
// null 이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;  // 10

// 둘 다 null이나 undefined가 아니면 맨 처음오는 값을 반환
let var5 = var2 ?? var3;  // 10


let userName;
let userNickName = "pk9988";

let displayName = userName ?? userNickName;

// 삼항 연산자
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);