import React from "react";
import styled from "styled-components";

const SkeletonCard = () => {
  return (
    <St.DetailCardContentWrapper>
      <St.Header>
        <St.Shimmer />
      </St.Header>
      <St.Imgdiv>
        <St.Shimmer />
      </St.Imgdiv>
      <St.Content>
        <St.Shimmer />
      </St.Content>
    </St.DetailCardContentWrapper>
  );
};

export default SkeletonCard;

const St = {
  Shimmer: styled.div`
    width: 50%;
    height: 100%;
    background-color: #e0e0e0;
    box-shadow: 0 0 30px 30px #e0e0e0;
    animation: loading 2s infinite;
    @keyframes loading {
      0% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(100%);
      }
      100% {
        transform: translate(200%);
      }
    }
  `,
  DetailCardContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: fit-content;
    padding: 2rem;
    margin-top: 5rem;
    overflow-x: visible;
    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem
      ${({ theme }) => theme.colors.Sopt_Light_Yellow};
  `,
  Imgdiv: styled.div`
    width: 18rem;
    height: 18rem;
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
    overflow: hidden;
  `,
  Header: styled.header`
    width: 18rem;
    height: 2rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
  `,
  Content: styled.div`
    width: 18rem;
    height: 18rem;
    padding: 2rem;

    ${({ theme }) => theme.fonts.M_Content_2};
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
    overflow: hidden;
  `,
};
