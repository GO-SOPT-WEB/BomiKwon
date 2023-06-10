import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
// import { levelSelectState } from "../atom/store";
import levelAtom from "../recoil/level/atom";
// import { answerState } from "../atom/store";
/**
 * Header 컴포넌트 : 제목, 점수, 리셋버튼을 포함하는 컴포넌트
 * - props
 * 1) answer : App 컴포넌트 (상위)에서 받아온 정답 수
 * 2) isResetBtnClicked : 리셋 버튼이 눌러졌는지 유무를 App(상위)에 전달하기 위한 함수
 * 3) isResetClicked : 리셋 버튼이 눌러졌는지 유무를 main에도 전달하기 위한 App에서 관리하는 상태
 * - state
 * 1) fade : answer(정답 수)가 업데이트 될때마다 글씨 빛번짐 효과를 주기 위한 상태
 */
function Header(props) {
  const level = useRecoilValue(levelAtom);
  // const answer = useRecoilValue(answerState);
  // console.log(answer);
  const { handleResetBtn, isResetClicked } = props;
  const [fade, setFade] = useState("");

  /**
   * 카드 쌍을 맞춘 경우 현재 스코어가 빛나는 애니메이션
   */
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 500);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, []); //[answer]

  return (
    <StyledHeader>
      <TitleContainer>
        <h1>사모예드를 맞춰주세요</h1>
        <h2 className={"start " + fade}>
          {/* {answer}/{level} */}/{level}
        </h2>
      </TitleContainer>
      <BtnContainer
        type="button"
        onClick={() => {
          handleResetBtn(!isResetClicked); //클릭될 때마다 지금 클릭되었는지 유무를 계속 업데이트(반대로)하며 전달
        }}
      >
        RESET
      </BtnContainer>
    </StyledHeader>
  );
}
export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 70%;
  text-align: center;
  & .start {
    color: ${({ theme }) => theme.colors.yellow};
    text-shadow: 0 0 0.1em, 0 0 0.2em;
    transition: 0.5s;
  }
  & .end {
    text-shadow: 0 0 0em, 0 0 0em;
    color: ${({ theme }) => theme.colors.black};
  }
`;
const BtnContainer = styled.button`
  width: 10rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
