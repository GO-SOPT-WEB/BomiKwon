import React from "react";
import DetailCardInfo from "./DetailCardInfo";
import styled from "styled-components";
import WeekDataHooks from "../hooks/weekDataHooks";
import { useParams } from "react-router-dom";
/**
 * 주간 날씨 컴포넌트 : week/area 형태로 라우팅 시
 */
const WeekDetailCardInfo = () => {
  const area = useParams();
  const { cardListData } = WeekDataHooks(area);

  return (
    <>
      {cardListData ? (
        <St.CardListWrapper>
          {cardListData &&
            cardListData.map((item) => (
              <DetailCardInfo
                isDayOrWeek={"week"}
                cardData={item}
                key={cardListData.indexOf(item)}
              />
            ))}
        </St.CardListWrapper>
      ) : (
        <div>로딩 중입니다</div>
      )}
    </>
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
