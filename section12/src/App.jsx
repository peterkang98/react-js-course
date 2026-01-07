import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {useRef, useReducer, createContext, useEffect, useState} from "react";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Edit from "./pages/Edit.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import './App.css'

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data
    case "CREATE":
      nextState = [...state, action.data];
      break;
    case "UPDATE":
      nextState = state.map(
        diary => String(diary.id) === String(action.data.id) ? action.data : diary
      );
      break;
    case "DELETE":
      nextState = state.filter(diary => String(diary.id) !== String(action.id));
      break;
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // const nav = useNavigate();
  //
  // const onClickButton = () => {
  //   nav("/new");
  // };

  const[isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray([parsedData])) {
      setIsLoading(false);
      return;
    }

    const idValues = parsedData.map(diary => Number(diary.id));
    const biggestId = Math.max(...idValues);

    idRef.current = biggestId + 1;

    dispatch({
      type: "INIT",
      data: parsedData
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  };

  if (isLoading) {
    return <div>데이터 로딩 중입니다...</div>
  }

  return (
    <>
      {/*public 폴더에 이미지를 넣고 경로를 통해 불러오기 (자동 캐싱 X, 브라우저가 별도의 HTTP 요청으로 가져옴)*/}
      {/*<div>*/}
      {/*  <img src="/emotion1.png" />*/}
      {/*  <img src="/emotion2.png" />*/}
      {/*  <img src="/emotion3.png" />*/}
      {/*  <img src="/emotion4.png" />*/}
      {/*  <img src="/emotion5.png" />*/}
      {/*</div>*/}

      {/* /src/assets 폴더에 이미지를 넣고 import 문으로 불러오면 vite가 자동으로 이미지 파일을 문자열로 변환해서
       (base64 Data URL) html 태그 안에 인라인으로 박아서 캐싱 효과를 내줌
       주의 사항
       - 4KB 이하 이미지만 해당
       - 이미지 개수가 너무 많으면 JS 번들이 너무 커져서 초기 로딩이 느려질 수 있음

       예) <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." />
       */}
      {/*<div>*/}
      {/*  <img src={getEmotionImage(1)} />*/}
      {/*  <img src={getEmotionImage(2)} />*/}
      {/*  <img src={getEmotionImage(3)} />*/}
      {/*  <img src={getEmotionImage(4)} />*/}
      {/*  <img src={getEmotionImage(5)} />*/}
      {/*</div>*/}

      {/*리액트 앱 내부 링크는 a 태그를 사용하지 말고 Link 태그를 사용 */}
      {/*<div>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*  <Link to="/new">New</Link>*/}
      {/*  <Link to="/diary">Diary</Link>*/}
      {/*</div>*/}

      {/*이벤트 핸들러 안에서 특정 조건에 따라 페이지를 이동 시킬 때는 useNavigate()를 사용*/}
      {/*<button onClick={onClickButton}>New 페이지로 이동</button>*/}

      {/*<Header*/}
      {/*  title="Header"*/}
      {/*  leftChild={<Button text={"<"} />}*/}
      {/*  rightChild={<Button text={">"} />}*/}
      {/*/>*/}

      {/*<Button text="123" type="DEFAULT" onClick={() => alert("123버튼 클릭")}/>*/}
      {/*<Button text="123" type="POSITIVE" onClick={() => alert("123버튼 클릭")}/>*/}
      {/*<Button text="123" type="NEGATIVE" onClick={() => alert("123버튼 클릭")}/>*/}

      {/*Routes 컴포넌트 안에는 Route 태그만 올 수 있음*/}
      {/*모든 페이지에 공통으로 보여줄 요소는 Routes 태그 밖에*/}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App
