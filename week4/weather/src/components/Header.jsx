import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Header = () => {
  const [area, setArea] = useState("");
  const [dayOrWeek, setDayOrWeek] = useState("week");
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const target = e.target.value;
    if (target === "오늘") {
      setDayOrWeek("day");
      navigate(`/day/${area}`);
    } else if (target === "주간") {
      setDayOrWeek("week");
      navigate(`/week/${area}`);
    }
  };

  const handleInputChange = (e) => {
    const userValue = e.target.value;
    setArea(userValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    area !== "" && navigate(`/${dayOrWeek}/${area}`);
  };

  return (
    <>
      <St.HeaderWrapper>
        <h1>기상캐스터 뽐</h1>
      </St.HeaderWrapper>

      <select name="주간/오늘" onChange={handleSelectChange}>
        <option value="주간">주간</option>
        <option value="오늘">오늘</option>
      </select>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="영어로 도시명 ex)seoul"
          onChange={handleInputChange}
        />
        <button type="submit">날씨검색</button>
      </form>
    </>
  );
};
export default Header;
const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Purple};

    & > h1 {
      ${({ theme }) => theme.fonts.B_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_White};
      cursor: pointer;
    }
    & > h2 {
      padding: 1rem;

      ${({ theme }) => theme.fonts.B_Title_3};
      background-color: ${({ theme }) => theme.colors.Sopt_White};
      border-radius: 1rem;

      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.Sopt_White};
        background-color: ${({ theme }) => theme.colors.Sopt_Black};
      }
    }
  `,
};
