import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import {DiaryDispatchContext} from "../App.jsx";
import {useContext, useEffect} from "react";
import usePageTitle from "../hooks/usePageTitle.jsx";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 뒤로가기 방지 옵션을 두번째 인수로 전달
    nav('/', {replace: true});
  };

  return (
    <div className="">
      <Header
        title="새 일기 쓰기"
        leftChild={<Button text="뒤로 가기" onClick={() => nav(-1)}/>}
      />
      <Editor onSubmit={onSubmit}/>
    </div>
  );
};

export default New;