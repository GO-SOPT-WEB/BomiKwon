import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function Header({ answer }) {
  const [fade, setFade] = useState("");
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end")
    },500);
    return () => {
      clearTimeout(a);
      setFade("");
    }
  }, [answer]);

  return (
    <StyledHeader>
      <TitleContainer>
        <h1>사모예드를 맞춰주세요</h1>
        <h2 className={"start " + fade}>{answer}/5</h2>
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
  & .start {
    color: #fbff00;
    text-shadow: 0 0 0.1em, 0 0 0.2em;
    transition: 0.5s;
  }
  & .end {
    text-shadow: 0 0 0.0em, 0 0 0.0em;
    color: black;
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
