import React from "react";

const DetailCardInfo = () => {
  const getDetailCardInfo = (area) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          let detailData = {
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
            dt_txt: data.dt, // 날짜
          };
          console.log(detailData);
        }
      })
      .catch((err) => console.log(err));
  };

  getDetailCardInfo("London");

  return <></>;
};

export default DetailCardInfo;
