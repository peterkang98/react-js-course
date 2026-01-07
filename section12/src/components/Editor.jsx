import "./Editor.css";
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";
import {getStringedDate} from "../util/getStringedDate.js";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: ""
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate))
      })
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(e.target.value);
    }

    setInput({
      ...input,
      [name]: value
    });
  };

  const onClickSubmitButton = () => onSubmit(input);

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
          name="createdDate"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map(
            emotion =>
              <EmotionItem
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === input.emotionId}
                onClick={() => onChangeInput({
                  target: {
                    name: "emotionId",
                    value: emotion.emotionId
                  }
                })}
              />
          )}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text="취소하기" />
        <Button onClick={onClickSubmitButton} text="작성완료" type="POSITIVE"/>
      </section>
    </div>
  );
};

export default Editor;