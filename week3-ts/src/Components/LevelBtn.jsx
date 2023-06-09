import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

/**
 * LevelBtn 컴포넌트 : 클릭될 때마다 level을 상위로 전달하는 역할
 *
 * props
 * - title : LevelBtnList에서 버튼의 제목을 받아옴
 * - handleClicked : onClick 이벤트마다 클릭 유/무를 전달해주는 역할 (하위->상위)
 * - handleClickedLevel : LevelBtnList에서 curlLevel을 받아와, 현재 레벨이 변경될 때마다 해당 버튼 컴포넌트가 클릭 되었는지, 아닌지를 확인
 *
 * state : isClick (각 버튼이 클릭된 상태인지를 저장)
 */

const LevelBtn = (props) => {
  const [isClick, setIsClick] = useState(false);
  const { title } = props;
  /**
   * handleClickedLevel 즉, 상위에서 받아온 현재 레벨이 변경될 때마다
   * 버튼의 제목과 클릭된 레벨의 스트링값을 비교해
   * 같으면 현재 버튼이 클릭된 것, 다르면 클릭되지 않은 것으로 처리
   */
  // useEffect(() => {
  //   title === handleClickedLevel ? setIsClick(true) : setIsClick(false);
  // }, [handleClickedLevel]);

  return (
    <StyledBtn
      type="button"
      // isClick={isClick}
      // onClick={() => {
      //   // setIsClick((prev) => !prev),
      //   // handleClicked(isClick); //상위 컴포넌트로 해당 버튼이 클릭되었는지를 전달
      // }}
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
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.black};
        `};
`;
