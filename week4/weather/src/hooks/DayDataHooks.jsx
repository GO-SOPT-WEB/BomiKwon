import axios from "axios";
import { useEffect, useState } from "react";

const DayDataHooks = (props) => {
  const { area } = props;
  const [cardData, setCardData] = useState();
  const now = new Date(); // 현재 날짜 및 시간
  const month = now.getMonth();
  const date = now.getDate();

  const getOneData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`
      );
      const data = res.data;
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
    } catch (error) {
      console.log("getOneData Err", error);
    }
  };

  useEffect(() => {
    getOneData();
  }, [area]);

  return { cardData };
};

export default DayDataHooks;
