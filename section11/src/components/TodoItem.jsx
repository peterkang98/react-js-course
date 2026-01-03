import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";
import "./TodoItem.css";

const TodoItem = ({id, isDone, content, date}) => {
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
      <div className="TodoItem">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
  );
};

// App 컴포넌트가 리렌더링될때마다 onUpdate, onDelete 함수(객체)가 계속 새로 만들어져서,
// 일반 얕은 비교(===) 방식으로 props가 바뀌었는지 확인하는 memo() 메소드로는 리렌더링을 방지할 수 없음
// 해결책 1. 두번째 인수로 어떻게 props가 바뀌었는지를 확인할지 콜백함수를 넘김
// 해결책 2. useCallback 훅으로 애초에 onUpdate, onDelete 함수(객체)가 새로 생성되는걸 방지
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, props가 바뀌었는지 판단
//   // true -> props가 바뀌지 않았음 -> 리렌더링 X
//   // false -> props가 바뀌었음 -> 리렌더링 O
//
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;
//
//   return true;
// });

export default memo(TodoItem);