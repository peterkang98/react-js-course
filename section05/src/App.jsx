// rerendering 되는 조건
// 1. 자신이 관리하는 state가 바뀜
// 2. 부모로부터 받은 props 값이 바뀜
// 3. 부모 컴포넌트가 다시 렌더링됨 (그러므로 관련없는 state들은 하나의 부모 컴포넌트에 넣지말고 최대한 서로 다른 컴포넌트로 분리하는게 성능상 좋음)

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button.jsx";
import Register from "./components/Register.jsx";
import HookExam from "./components/HookExam.jsx";
import { useState } from "react";

const Counter = () => {
  // state의 값이 변경되면(Object.is(prevState, nextState) 컴포넌트가 다시 렌더링됨 (함수 재호출)
  // 단 객체, 배열등은 참조 변경이 일어나야(새로운 객체/배열을 생성) React가 감지하고 UI를 업데이트함
  // [state의 값, state의 값을 변경시키는 함수]
  const [count, setCount] = useState(0);
  console.log("counter render")
  return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
  );
};

// 자식 컴포넌트는 부모로부터 받은 props의 값이 바뀌면 다시 렌더링됨
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log("bulb render")
  return (
      <div>
        <div>
          {light==="ON" ?
              <h1 style={{backgroundColor: "orange"}}>ON</h1>
              : <h1 style={{backgroundColor: "gray"}}>OFF</h1>}
        </div>
        <button onClick={() => setLight(light==="ON" ? "OFF" : "ON")}>전구 끄기/켜기</button>
      </div>
  );
};

// 부모/조상 컴포넌트 (Root 컴포넌트)
function App() {
  const buttonProps = {text:"메일", color:"red", a:1, b:2, c:3}

  console.log("app render")

  return (
    <>
      <Header />
      <Main />
      <Footer/>
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>

      <Bulb />
      <Counter />
      <Register />
      <HookExam />
    </>
  )
}

export default App
