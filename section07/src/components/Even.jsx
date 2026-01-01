import {useEffect} from "react";

const Even = () => {
  useEffect(()=>{
    console.log("even component mount")

    // 클린업/정리 함수를 콜백함수로 리턴하면 Unmount될 때 실행됨
    return () => console.log("even component unmount");
  }, []);
  return <div>짝수입니다.</div>
};

export default Even;