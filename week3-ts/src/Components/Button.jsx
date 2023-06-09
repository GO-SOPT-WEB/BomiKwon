import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const Button = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [curLevel, setCurLevel] = useState("EASY");
  const toggleClick = () => {
    setIsClick((prev) => !prev);
    if (isClick) {
      setCurLevel(text);
    }
  };
  const { text, width } = props;
  console.log(width);
  return (
    <StyledBtn type="button" isClick={isClick} onClick={toggleClick}>
      {text}
    </StyledBtn>
  );
};
export default Button;

const StyledBtn = styled.button`
  width: ${({ width }) => width}rem;
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
