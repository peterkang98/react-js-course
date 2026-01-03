import "./Header.css";
import {memo} from "react";

const Header = () => {
  return (
      <div className="Header">
        <h3>오늘은 📆</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
  );
};

// React.memo
// 부모가 리렌더링되어도 자신이 받는 props가 바뀌지 않는다면 자기 자신은 리렌더링되지 않음
export default memo(Header);