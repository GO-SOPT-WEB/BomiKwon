import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailCardInfo from "./DetailCardInfo";
import styled from "styled-components";
/**
 * 오늘 날씨 컴포넌트 : day/area 형태로 라우팅 시
 */
const DayDetailCardInfo = () => {
  const [cardData, setCardData] = useState();
  const now = new Date(); // 현재 날짜 및 시간
  const month = now.getMonth();
  const date = now.getDate();
  const { area } = useParams();
  console.log(area);

  const getOneDetailCardInfo = (area) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {
          const detailData = {
            name: data.name, // 지역이름
            weather: [
              {
                description: data.weather[0].description, // 날씨 설명
              },
            ],
            main: {
              temp: data.main.temp, // 현재 온도
              feels_like: data.main.feels_like, // 체감기온
              temp_min: data.main.temp_min, // 최저
              temp_max: data.main.temp_max, // 최고
            },
            clouds: {
              all: data.clouds.all, // 구름 %
            },
            dt_txt: `${month + 1}-${date}`, // 날짜
          };
          setCardData(detailData);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOneDetailCardInfo(area);
  }, [area]);

  return (
    <St.CardListWrapper>
      {cardData && <DetailCardInfo isDayOrWeek={"day"} cardData={cardData} />}
    </St.CardListWrapper>
  );
};

export default DayDetailCardInfo;
const St = {
  CardListWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
  `,
};