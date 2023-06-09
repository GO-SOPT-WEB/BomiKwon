import styled from "styled-components";
import CardList from "../Components/CardList";
import Button from "../Components/Button";

/**
 * Main 컴포넌트 : CardList와 LvBtnList를 통해 카드와 레벨을 관리하는 부분
 * - props
 * 1) correctNum : App(상위)으로 정답 수를 전달하기 위한 함수 (하위->상위)
 * 2) isResetClicked : App에서 받은 isResetClicked(리셋 버튼 클릭 유무)를 CardList(하위 컴포넌트)로 전달한다.
 * - state
 * 1) level : LvBtnList에서 받아온 level을 관리하는 상태
 */
function Main(props) {
  const { correctNum, cardLength, isResetClicked } = props;

  /**
   * LvBtnList으로부터 answer을 받아오는 부분
   */
  const getAnswer = (answer) => {
    correctNum(answer);
  };

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
        <CardList
          getAnswer={getAnswer}
          isResetClicked={isResetClicked}
        ></CardList>
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
