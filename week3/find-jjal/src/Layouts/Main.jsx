import styled from "styled-components";
import { useState } from "react";
import LvBtnList from "../Components/levelBtnList";
import CardList from "../Components/CardList";

function Main(props) {
  const {correctNum,isResetClicked}=props;
  const [level, setLevel] = useState();
  const getLevel = (lv) => {
    setLevel(lv);
  };
  const getAnswer=(answer)=>{
    correctNum(answer);
  }
  console.log(isResetClicked);
  return (
    <StyledMain>
      <LevelContainer>
        <LvBtnList getLevel={getLevel}></LvBtnList>
      </LevelContainer>
      <CardsContainer>
        <CardList getAnswer={getAnswer}level={level}></CardList>
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
  width: 80%;
  /* margin-top: 1rem; */
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  padding: 1rem 3rem;
  padding-right: 1rem;
`;
