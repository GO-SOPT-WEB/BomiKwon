import { useState } from "react";
import LevelBtn from "./levelBtn";
import styled from 'styled-components';

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

  getLevel(curLevel);
  return (
    <>
      <LevelBtn title="EASY" handleClicked={LvEASYHandler} ></LevelBtn>
      <LevelBtn title="NORMAL" handleClicked={LvNORMALHandler}></LevelBtn>
      <LevelBtn title="HARD" handleClicked={LvHARDHandler}></LevelBtn>
    </>
  );
};
export default LvBtnList;
