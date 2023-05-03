import LevelBtn from "../Components/levelBtn";
import styled from "styled-components";
import { useState } from "react";
import Card from "../Components/Card";
import CardList from "../Components/CardList";

function Main() {
  const [level, setLevel] = useState();

  const handleOnClick = (e) => {
    // console.log(e);
  };
  const targetLvBtn = (e) => {
    // console.log(e);
  };

  const levelHandler = (lv) => {
      setLevel(lv)
  };

//   useEffect(() => {
//     setcardUrlList([...randomURLS]);
//   }, [randomURLS]);
//   console.log(cardUrlList);
console.log(level);

  return (
    <StyledMain>
      <LevelContainer>
        <LevelBtn
          title="EASY"
          getLevel={levelHandler}
          targetLvBtn={targetLvBtn}
          handleBtnSubmit={handleOnClick}
        ></LevelBtn>
        <LevelBtn
          title="NORMAL"
          getLevel={levelHandler}
          targetLvBtn={targetLvBtn}
          handleBtnSubmit={handleOnClick}
        ></LevelBtn>
        <LevelBtn
          title="HARD"
          getLevel={levelHandler}
          targetLvBtn={targetLvBtn}
          handleBtnSubmit={handleOnClick}
        ></LevelBtn>
      </LevelContainer>
      <CardsContainer>
        <CardList level={level}></CardList>
      </CardsContainer>
    </StyledMain>
  );
}
export default Main;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10rem;
`;
const LevelContainer = styled.div``;
const CardsContainer = styled.div`
  width: 55%;
  /* margin-top: 1rem; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 3rem;
  padding-right: 1rem;
`;
