import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from "react";
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime()
  }
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map(
        todo => todo.id === action.targetId
          ? {...todo, isDone: !todo.isDone}
          : todo
      )
    case "DELETE":
      return state.filter(todo => todo.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

// 컨텍스트 객체
// {
//   Provider: ...
//   context가 공급할 데이터를 설정 or 공급받을 컴포넌트들을 설정하기 위한 프로퍼티
//
//   사실 컴포넌트임 = <TodoContext.Provider value={...}> </TodoContext.Provider>
//   태그 사이에 있는 컴포넌트들과 그의 자손 컴포넌트들은 모두 데이터를 공급받을 수 있음
// }
//
// 컨텍스트 사용 시 주의할 점:
//   변경될 수 있는 값이랑 변경되지 않는 값을 각각 서로 다른 컨텍스트로 나눠야 불필요한 리렌더링을 방지할 수 있음
//   예) todos 배열은 바뀔 수 있음 vs. onCreate, onUpdate, onDelete 함수들은 안 바뀜

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback: 함수(객체)가 매번 새롭게 생성되는걸 방지
  // 리턴 값 = 콜백 함수
  // deps 배열이 바뀔 때만 함수(객체)를 새롭게 생성
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, []);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, []);

  // onCreate, onUpdate, onDelete 함수들 자체는 각각 useCallback으로 감싸져서 컴포넌트가 리렌더링 되어도 다시 생성되지 않지만
  // 이 3개의 함수를 감싼{ onCreate, onUpdate, onDelete } 객체 자체는 컴포넌트 리렌더링시 다시 생성되기 때문에 useMemo()를 사용
  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, [])

  return (
    <div className="App">
      <Header/>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor/>
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
