import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function Header({ answer }) {
  const [isChanged, setIsChanged] = useState(false);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    setIsChanged(true);
  }, answer);
  return (
    <StyledHeader>
      <TitleContainer isChanged={isChanged}>
        <h1>사모예드를 맞춰주세요</h1>
        <h2>{answer}/5</h2>
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
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 70%;
  text-align: center;
  &h2{
    ${(props)=>{
      props.isChanged?
      css``:
      css``;
    }}
  }
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
