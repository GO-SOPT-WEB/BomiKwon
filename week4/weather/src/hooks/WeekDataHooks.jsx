import axios from "axios";
import { useEffect, useState } from "react";

const WeekDataHooks = (props) => {
  const { area } = props;
  const [cardListData, setCardListData] = useState([]);

  const getFiveData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`
      );
      const data = response.data;
      const detailData = [];
      // 날짜 : 어제, 오늘, 내일, 이틀 뒤, 3일 뒤
      // 인덱스 : 0, 8, 16, 24, 32 (18:00 기준)
      for (let i = 0; i < 33; i += 8) {
        let detailDataTmp = {
          name: data.city.name, // 지역이름
          weather: [
            {
              description: data.list[i].weather[0].description, // 날씨 설명
            },
          ],
          main: {
            temp: data.list[i].main.temp, // 현재 온도
            feels_like: data.list[i].main.feels_like, // 체감기온
            temp_min: data.list[i].main.temp_min, // 최저
            temp_max: data.list[i].main.temp_max, // 최고
          },
          clouds: {
            all: data.list[i].clouds.all, // 구름 %
          },
          dt_txt: data.list[i].dt_txt.slice(6, 10), // 날짜
        };
        detailData.push(detailDataTmp);
      }
      setCardListData(detailData);
    } catch (error) {
      console.log("getFiveData Err", error);
    }
  };

  useEffect(() => {
    getFiveData();
  }, [area]);

  return { cardListData };
};
export default WeekDataHooks;
