import React from "react";
import DetailCardInfo from "./DetailCardInfo";
import ErrorInfo from "../ErrorInfo";
import styled from "styled-components";
import WeekDataHooks from "../../hooks/weekDataHooks";
import { useParams } from "react-router-dom";
import SkeletonCard from "../skeleton/SkeletonCard";
/**
 * 주간 날씨 컴포넌트 : week/area 형태로 라우팅 시
 */
const WeekDetailCardInfo = () => {
  const area = useParams();
  const { cardListData, isLoading, isError } = WeekDataHooks(area);

  return (
    <St.CardListWrapper>
      {isLoading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : isError ? (
        <ErrorInfo />
      ) : (
        cardListData &&
        cardListData.map((item) => (
          <DetailCardInfo
            isDayOrWeek={"week"}
            cardData={item}
            key={cardListData.indexOf(item)}
          />
        ))
      )}
    </St.CardListWrapper>
  );
};

export default WeekDetailCardInfo;
const St = {
  CardListWrapper: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Light_Yellow};
  `,
};
