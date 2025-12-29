import {useState, useRef} from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });

  // useRef: rerender를 발생시키지 않는 컴포넌트 내부의 변수.
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      // []의 뜻: 안에 있는 표현식을 먼저 계산해서, 그 결과를 key로 써라
      [e.target.name]: e.target.value
    });
  };

  console.log(input);

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소를 포커스
      inputRef.current.focus();
    }
  };

  return (
  <div>
    <div>
      <input
          // input 태그가 렌더링하는 DOM 요소를 inputRef에 저장
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
      />
    </div>

    <div>
      <input name="birth" value={input.birth} onChange={onChange} type="date" />
    </div>

    <div>
      <select name="country" value={input.country} onChange={onChange}>
        <option value=""></option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
        <option value="uk">영국</option>
      </select>
    </div>

    <div>
      <textarea name="bio" value={input.bio} onChange={onChange}/>
    </div>

    <button onClick={onSubmit}>제출</button>
  </div>);
};

export default Register;