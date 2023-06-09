import styled from "styled-components";
import CardList from "../Components/CardList";
import Button from "../Components/Button";

/**
 * Main 컴포넌트 : CardList와 LvBtnList를 통해 카드와 레벨을 관리하는 부분
 */
function Main() {
  const levelText = ["EASY", "NORMAL", "HARD"];
  return (
    <StyledMain>
      <LevelContainer>
        {levelText.map((level) => (
          <Button
            text={level} //버튼에 들어갈 텍스트 전달
            width={50}
            key={level}
          ></Button>
        ))}
      </LevelContainer>
      <CardsContainer>
        <CardList />
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
