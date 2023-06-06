import { useState } from "react";
import LevelBtn from "./LevelBtn";

/**
 * LvBtnList 컴포넌트 : LevelBtn을 묶어 관리하는 컴포넌트
 * - props : getLevel (main에서 getLevel함수를 받아와, 현재 선택된 레벨인 curLevel을 전달함 | 하위->상위)
 * - state : curLevel (각 버튼에서 handleClicked 속성이 실행될 때마다 LvEASYHandler, LvNORMALHandler, LvHARDHandler를 통해 상태 전달)
 */
const LvBtnList = (props) => {
  const { getLevel } = props;
  const [curLevel, setCurLevel] = useState("");

  /**
   * 난이도 버튼마다 클릭 유무(T/F)를 받아와, 현재 난이도를 선정
   */
  const LvEASYHandler = () => {
    setCurLevel("EASY");
  };
  const LvNORMALHandler = () => {
    setCurLevel("NORMAL");
  };
  const LvHARDHandler = () => {
    setCurLevel("HARD");
  };

  getLevel(curLevel); // main(상위 컴포넌트)로 현재 난이도를 전달

  return (
    <>
      <LevelBtn
        title="EASY" //버튼에 들어갈 텍스트 전달
        handleClicked={LvEASYHandler}
        handleClickedLevel={curLevel} //버튼 클릭 css이벤트를 위해 현재 레벨 전달
      ></LevelBtn>
      <LevelBtn
        title="NORMAL"
        handleClicked={LvNORMALHandler}
        handleClickedLevel={curLevel}
      ></LevelBtn>
      <LevelBtn
        title="HARD"
        handleClicked={LvHARDHandler}
        handleClickedLevel={curLevel}
      ></LevelBtn>
    </>
  );
};
export default LvBtnList;
