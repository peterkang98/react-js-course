import {useSearchParams} from "react-router-dom";
import {useState, useContext} from "react";
import {DiaryStateContext} from "../App.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(), 1, 0, 0, 0
  ).getTime();

  // date는 1부터 시작하므로 date가 0이면 그 전 달의 마지막 날을 뜻 함
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, 0, 23, 59, 59
  ).getTime();

  return data.filter(diary => beginTime <= diary.createdDate && diary.createdDate <= endTime)
};

const Home = () => {
  // 쿼리 파라미터 불러오기
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value"));

  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle("감정 일기장");

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const monthlyData = getMonthlyData(pivotDate, data)

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text="<" onClick={onDecreaseMonth}/>}
        rightChild={<Button text=">" onClick={onIncreaseMonth}/>}
      />
      <DiaryList data={monthlyData}/>
    </div>
  );
};

export default Home;