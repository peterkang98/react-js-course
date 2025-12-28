// CJS로 불러오기
// const {add, sub} = require("./math.js");

// esmodule로 불러오기
// import mul from "./math.js"  //default 함수는 중괄호 필요 없고, 이름도 아무렇게 지정 가능
// import {add, sub} from "./math.js"
import mul, {add, sub} from "./math.js" //동일한 경로의 import문은 하나로 합칠 수 있음

import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

console.log("안녕 Node.js");

console.log(randomColor());