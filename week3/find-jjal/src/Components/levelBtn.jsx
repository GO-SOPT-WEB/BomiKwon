import styled, {css } from "styled-components";
import { useState } from "react";

const LevelBtn = (props) => {
  const [isClick, setIsClick] = useState(false);
  const { handleOnClick, targetLvBtn,title } = props;
  // 난이도에 따라 useState로 카드 개수 조절
  // const [cardsNum, setCardNums] = useState(5);

  const LvHandler=()=>{
    props.getLevel(props.title);
  }
  return (
    <StyledBtn
      type="button"
      ref={targetLvBtn}
      isClick={isClick}
      onClick={(() => {setIsClick((prev) => !prev), LvHandler(), handleOnClick})}
    >
      {title}
    </StyledBtn>
  );
};
export default LevelBtn;

const StyledBtn = styled.button`
  width: 5rem%;
  margin: 1rem;
  padding: 1rem;

  border-radius: 1rem;
  ${(props) =>
    props.isClick
      ? css`
          background-color: #000000;
          color: white;
        `
      : css`
          background-color: #ffffff;
          color: #000000;
        `};
`;
