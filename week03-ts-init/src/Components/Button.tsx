import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import selectedLevel from "../recoil/level/selectors";

interface IButtonProps {
  text: string;
  width: number;
}
const Button = ({ text, width }: IButtonProps) => {
  const [select, setSelect] = useRecoilState(selectedLevel);
  const [isClick, setIsClick] = useState<boolean>(false);
  const updateSelect: () => void = () => setSelect({ text });

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
