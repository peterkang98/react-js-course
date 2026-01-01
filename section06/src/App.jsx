import Viewer from "./components/Viewer.jsx";
import './App.css'
import Controller from "./components/Controller.jsx";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  console.log("app rerender")

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        {/*useState 대신 이벤트 핸들러를 props로 전달*/}
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App
