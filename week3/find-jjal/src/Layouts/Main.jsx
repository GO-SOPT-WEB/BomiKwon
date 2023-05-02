import LevelBtn from "../Components/levelBtn";
import Card from "../Components/Card";
import styled from "styled-components";
function Main() {
  const IMG = [
    "src/assets/01.jpeg",
    "src/assets/02.jpeg",
    "src/assets/03.jpeg",
    "src/assets/04.jpeg",
    "src/assets/05.jpeg",
    "src/assets/06.jpeg",
    "src/assets/07.jpeg",
    "src/assets/08.jpeg",
    "src/assets/09.jpeg",
  ];

  /**
   * 랜덤하게 개수에 따라 이미지를 가져오는 부분
   */
  const randomImgChoice = (num) => {
    const indexOfIMG = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var cnt = 0;
    const newImgs = []; // 랜덤하게 정해진 이미지
    while (cnt < num) {
      //정해진 개수까지만 선택
      var randomIndex = indexOfIMG.splice(
        //중복을 방지하기 위해 splice 사용
        Math.floor(Math.random() * indexOfIMG.length),
        1
      )[0];
      newImgs.push(IMG[randomIndex]);
      cnt += 1;
    }
    return newImgs;
  };

  return (
    <StyledMain>
      <LevelContainer>
        <LevelBtn title="EASY"></LevelBtn>
        <LevelBtn title="NORMAL"></LevelBtn>
        <LevelBtn title="HARD"></LevelBtn>
      </LevelContainer>
      <CardsContainer>
        {randomImgChoice(9).map((imgUrls) => 
          <Card imgUrl={imgUrls} key={imgUrls}></Card>
        )
        }
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
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding:1rem 3rem;
  padding-right:1rem;
  row-gap:1rem;
  col-gap:1rem;
`;
