import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <St.HeaderWrapper>
      <h1>기상캐스터 뽐</h1>
    </St.HeaderWrapper>
  );
};
export default Header;
const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Purple};

    & > h1 {
      ${({ theme }) => theme.fonts.B_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_White};
      cursor: pointer;
    }
    & > h2 {
      padding: 1rem;

      ${({ theme }) => theme.fonts.B_Title_3};
      background-color: ${({ theme }) => theme.colors.Sopt_White};
      border-radius: 1rem;

      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.Sopt_White};
        background-color: ${({ theme }) => theme.colors.Sopt_Black};
      }
    }
  `,
};
