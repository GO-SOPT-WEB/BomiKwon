import React from "react";
import styled from "styled-components";
import DetailCardInfo from "./DetailCardInfo";
import DayDataHooks from "../hooks/DayDataHooks";
import { useParams } from "react-router-dom";
/**
 * 오늘 날씨 컴포넌트 : day/area 형태로 라우팅 시
 */
const DayDetailCardInfo = () => {
  const area = useParams();
  const { cardData } = DayDataHooks(area);
  console.log(cardData);
  return (
    <>
      {cardData ? (
        <St.CardListWrapper>
          {cardData && (
            <DetailCardInfo isDayOrWeek={"day"} cardData={cardData} />
          )}
        </St.CardListWrapper>
      ) : (
        <div>로딩중입니다</div>
      )}
    </>
  );
};
export default DayDetailCardInfo;
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
