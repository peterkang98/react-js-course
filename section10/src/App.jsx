import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import {useState, useRef, useReducer, useCallback} from "react";
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

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
