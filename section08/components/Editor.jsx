import "./Editor.css";
import {useState, useRef} from "react";

const Editor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    // Todo 입력이 비어있을 때
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    // Todo가 제대로 입력되었을 때
    onCreate(content);
    setContent("");
  };

  return (
      <div className="Editor">
        <input
            ref = {contentRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
  );
};

export default Editor;