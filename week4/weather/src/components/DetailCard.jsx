import React from "react";
import styled from 'styled-components';
import { WEATER_TYPE } from "../constants/weather";
const DetailCard = (cardData) => {
    let weather_url=WEATER_TYPE.find(
      (item) => item.description === cardData.cardData.weather[0].description
    );
  return (
    <St.DetailCardWrapper>
      <St.DetailCardContentWrapper>
        <St.Header>
          <h3>{cardData.cardData.name}</h3>
        </St.Header>
        <St.Img
          src={weather_url.imgURL}
          alt={cardData.name}
        />
        <St.Content>
          <div>
            <span>온도</span>
            <span>{cardData.cardData.main.temp}</span>
          </div>
          <div>
            <span>체감 온도</span>
            <span>{cardData.cardData.main.feels_like}</span>
          </div>
          <div>
            <span>최저/최고</span>
            <span>
              {cardData.cardData.main.temp_min}/
              {cardData.cardData.main.temp_max}
            </span>
          </div>
          <div>
            <span>구름</span>
            <span>{cardData.cardData.clouds.all}%</span>
          </div>
        </St.Content>
      </St.DetailCardContentWrapper>
    </St.DetailCardWrapper>
  );
};

export default DetailCard;

const St = {
  DetailCardWrapper: styled.div`
    display: flex;
    justify-content: center;

    position: relative;
    width: 100%;
    padding: 1rem;
  `,

  DetailCardContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: fit-content;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Pink};
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.Sopt_Coral};
  `,
  Img: styled.img`
    width: 50rem;
    max-height: 50rem;
    border-radius: 1rem;

    object-fit: contain;
  `,
  Header: styled.header`
    h3 {
      ${({ theme }) => theme.fonts.M_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_Purple};
    }
  `,
  Content: styled.p`
    width: 100%;
    padding: 2rem;

    ${({ theme }) => theme.fonts.M_Content_2};
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
    > div{
        display:flex;
        justify-content:space-between;
    }
  `,
};
