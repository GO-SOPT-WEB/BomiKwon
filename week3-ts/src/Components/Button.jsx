import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// import { selectedLevelState } from "../selector/levelState";
import selectedLevel from "../recoil/level/selectors";

const Button = (props) => {
  const { text, width } = props;
  const [select, setSelect] = useRecoilState(selectedLevel);

  const [isClick, setIsClick] = useState(false);
  const updateSelect = () => setSelect({ text });

  return (
    <StyledBtn type="button" isClick={isClick} onClick={updateSelect}>
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
