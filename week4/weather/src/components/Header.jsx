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
        <St.SearchWrapper>
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
        </St.SearchWrapper>
      </St.HeaderWrapper>
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

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};

    & > h1 {
      width: 30%;
      ${({ theme }) => theme.fonts.B_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_Black};
      padding: 3rem;
      cursor: pointer;
    }
  `,
  SearchWrapper: styled.div`
    display: flex;
    align-items: center;
    padding-left:30rem;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
    & > select {
      width: 8rem;
      margin: 0.5rem;
    }
    & > form > input {
      height: 5rem;
      margin: 0.5rem;
    }
    & > form > button {
      height: 5rem;
      margin: 0.5rem;
    }
  `,
};
