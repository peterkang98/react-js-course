import Viewer from "./components/Viewer.jsx";
import './App.css'
import Controller from "./components/Controller.jsx";
import Even from "./components/Even.jsx";
import {useState, useEffect, useRef} from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect()는 의존성 배열(deps)의 값이 변경되었을 때 특정 동작을 수행시킴

  // useEffect()는 데이터 가져오기, 구독 설정, 수동 DOM 조작 등 컴포넌트의 Side effect를 처리하거나 특정 라이프사이클 시점에 코드를 실행하는 데 사용
  // 라이프사이클: 컴포넌트가 생성(마운트)되고, 변화(업데이트)하며, 화면에서 제거(언마운트)되는 전체 과정

  // 1. Mount - 탄생
  // deps가 비어있으면 최초 실행 후 다시는 실행되지 않음 (1번만 실행해야 할 코드는 여기에)
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. Update - 변화, 리렌더링
  // deps라는 매개변수를 안 넣으면, 마운트할 때 1번, 그리고 리렌더링될 때마다 실행됨
  // 마운트할 때도 실행 안 하고 싶다면 useRef 변수를 하나 만들고, useEffect 안에서 마운트 됐는지를 직접 체크
  // 예)
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("update");
  });

  // 3. Unmount - 죽음
  // Even.jsx를 참고

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // console.log("app rerender")

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        {/*useState 대신 이벤트 핸들러를 props로 전달*/}
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App
