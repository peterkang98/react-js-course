import "./Main.css";
// jsx 주의 사항
// 1-1. 중괄호로 자바스크립트 값을 출력할 수 있음 (단 숫자, 문자열, 배열만 가능)
// 1-2. 단 자바스크립트 표현식만 가능 = 한 줄로 평가 가능?
// 3. 모든 태그는 닫히는 태그가 있어야 함 <img> 같은 태그도 <img></img> 이런식으로 작성
// 4. 반환 태그는 오직 하나만 가능 (마땅히 묶을게 없다면 <></> 빈 태그도 사용 가능)
// 5. inline css property는 카멜케이스 표기법으로 작성해야 함
// 바깥 중괄호 {} = JSX에서 JS 표현식을 쓰겠다는 표시. 예) <div style={/* 여기에는 JS 표현식 */} />
// 안쪽 중괄호 {}는 자바스크립트 객체 리터럴 예) { backgroundColor: "red" }

const Main = () => {
  const number = 10;
  const user = {
    name: "강동현",
    isLoggedIn: false
  };

  return (
    <main>
      <h1>main</h1>
      <h2>{number + 12}</h2>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      <h3>{user.isLoggedIn ?
          <div style={{backgroundColor: "red"}}>로그아웃</div>
          : <div className="login">로그인</div>}
      </h3>
    </main>
  );
};

export default Main;