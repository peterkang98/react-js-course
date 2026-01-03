import {useReducer} from "react";

// reducer: 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// 새로운 state를 리턴만하면 자동 세팅됨
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 상태 변화가 있어야 한다는 사실을 알리는 함수
  // dispatch로 쓸 함수를 직접 만들어서 첫번째 인수로 전달
  // state의 초기 값은 두번째 인수로 전달
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch() 호출 -> reducer() 호출
    // 인수: 상태가 어떻게 변화되기를 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1
    });
  };

  const onClickMinus = () => {
    // dispatch() 호출 -> reducer() 호출
    // 인수: 상태가 어떻게 변화되기를 원하는지
    // -> 액션 객체
    dispatch({
      type: "DECREASE",
      data: 1
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;