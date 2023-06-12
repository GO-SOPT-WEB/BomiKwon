import React from "react";
import styled from "styled-components";

import { WEATER_TYPE } from "../../constants/weather";

const DetailCardInfo = (props) => {
  const { isDayOrWeek, cardData } = props;
  console.log(cardData);
  // 카드 description과 같은 데이터를 WEATER_TYPE에서 찾아 이미지 url 얻기
  let weather_url = WEATER_TYPE.find(
    (item) => item.description === cardData.weather[0].description
  );

  return (
    <St.DetailCardContentWrapper>
      {isDayOrWeek === "week" ? (
        <St.Header>
          <h3>{cardData.dt_txt}</h3>
        </St.Header>
      ) : (
        <St.Header>
          <h3>{cardData.name}</h3>
        </St.Header>
      )}
      {weather_url ? (
        <St.Img src={weather_url.imgURL} alt={cardData.name} />
      ) : (
        <St.Imgdiv />
      )}
      <St.Content>
        <div>
          <span>온도</span>
          <span>{cardData.main.temp}</span>
        </div>
        <div>
          <span>체감 온도</span>
          <span>{cardData.main.feels_like}</span>
        </div>
        <div>
          <span>최저/최고</span>
          <span>
            {cardData.main.temp_min}/{cardData.main.temp_max}
          </span>
        </div>
        <div>
          <span>구름</span>
          <span>{cardData.clouds.all}%</span>
        </div>
      </St.Content>
    </St.DetailCardContentWrapper>
  );
};

export default DetailCardInfo;

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
  Img: styled.img`
    width: 18rem;
    max-height: 50rem;
    border-radius: 1rem;

    object-fit: contain;
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
    > div {
      display: flex;
      justify-content: space-between;
    }
    > div > span {
      ${({ theme }) => theme.fonts.R_Content_3};
    }
  `,
};
