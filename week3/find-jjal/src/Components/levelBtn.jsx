import styled, {css } from "styled-components";
import { useState } from "react";

const LevelBtn = ({ title }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <StyledBtn
      type="button"
      isClick={isClick}
      onClick={() => setIsClick((prev) => !prev)}
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
