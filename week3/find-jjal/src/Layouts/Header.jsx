import { useState } from "react";
import styled, { css } from "styled-components";

function Header() {
  // const [answer,setAnswer]=useState(0);
  const [isClick, setIsClick] = useState(false);

  return (
    <StyledHeader>
      <TitleContainer>
        <h1>사모예드를 맞춰주세요</h1>
        <h2>0/5</h2>
      </TitleContainer>
      <BtnContainer
        type="button"
        isClick={isClick}
        onClick={() => setIsClick((prev) => !prev)}
      >
        RESET
      </BtnContainer>
    </StyledHeader>
  );
}
export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 70%;
  text-align: center;
`;
const BtnContainer = styled.button`
  width: 10rem;
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
