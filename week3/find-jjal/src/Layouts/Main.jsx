import LevelBtn from "../Components/levelBtn";
import Card from "../Components/Card";
import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <LevelContainer>
        <LevelBtn title="EASY"></LevelBtn>
        <LevelBtn title="NORMAL"></LevelBtn>
        <LevelBtn title="HARD"></LevelBtn>
      </LevelContainer>
      <CardsContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
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
const LevelContainer = styled.div`
`;
const CardsContainer = styled.div`
  width: 100%;
  margin-top:1.5rem;
  display: flex;
  gap: 3rem;
  justify-content:center;
`;
