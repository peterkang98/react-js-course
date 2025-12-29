import useInput from "../hooks/useInput.jsx";

// hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
// 2. 조건부 내에서는 호출될 수 없다.
// 3. 나만의 커스텀 훅을 직접 만들 수 있다. (useXXX 접두사를 갖는 함수)
// - 컴포넌트 내부에 반복되는 로직을 분리할 수 있음
// - 보통 src/hooks/ 폴더 안에 파일을 생성



const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return <div>
    <input value={input} onChange={onChange}/>
    <input value={input2} onChange={onChange2}/>
  </div>;
};

export default HookExam;