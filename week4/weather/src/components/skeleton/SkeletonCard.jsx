import React from "react";
import styled from "styled-components";

const SkeletonCard = () => {
  return (
    <St.DetailCardContentWrapper>
      <St.Header />
      <St.Imgdiv />
      <St.Content />
    </St.DetailCardContentWrapper>
  );
};

export default SkeletonCard;

const St = {
  DetailCardContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: fit-content;
    padding: 2rem;
    margin-top: 5rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem
      ${({ theme }) => theme.colors.Sopt_Light_Yellow};
  `,
  Imgdiv: styled.div`
    width: 18rem;
    height: 18rem;
    border-radius: 1rem;
    background-color: white;
  `,
  Header: styled.header`
    h3 {
      ${({ theme }) => theme.fonts.M_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_Black};
    }
  `,
  Content: styled.div`
    width: 100%;
    padding: 2rem;

    ${({ theme }) => theme.fonts.M_Content_2};
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
  `,
};
