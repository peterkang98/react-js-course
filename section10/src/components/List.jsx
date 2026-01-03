import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {useState, useMemo} from "react";

const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;

    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("계산")
    const totalCount = todos.length;
    const doneCount = todos.filter(todo => todo.isDone).length;

    const notDoneCount = totalCount - doneCount;

    // 객체 프로퍼티 축약(Object Property Shorthand)
    // 👉 key는 자동으로 변수명이 된다 ✅
    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>)}
        {/*key는 React가 “이 컴포넌트가 이전에 그리던 그 아이인지”를 구분하기 위한 고유한 식별자다.*/}
      </div>
    </div>
  );
};

export default List;

// <Component {...object} /> = “이 object의 모든 key-value를 props 객체에 그대로 병합해라”
// <TodoItem {...todo} /> = <TodoItem id={todo.id} isDone={todo.isDone} content={todo.content} date={todo.date}/>
