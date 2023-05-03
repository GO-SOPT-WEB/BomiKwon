import LevelBtn from "../Components/levelBtn";
import styled from "styled-components";
import { useState } from "react";
import Card from "../Components/Card";

function Main() {
  // 난이도에 따라 useState로 카드 개수 조절
  const [cardUrlList, setcardUrlList] = useState([]);
//   const targetLevel=useRef(null);

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
   * 카드 선택, 배치 랜덤으로 하는 부분
   */
  // 쌍이 묶인 배열들을 무작위로 섞어 랜덤으로 배치되게끔
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };
  // 정해진 개수num만큼 카드를 랜덤하게 선택
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
      newImgs.push(IMG[randomIndex]); //쌍으로 넣어줌
      cnt += 1;
    }
    return shuffle(newImgs);
  };

  const handleOnClick=(e)=>{
    console.log(e);

  }
  const targetLvBtn=(e)=>{
    console.log(e);
  }
  const levelHandler = (lv) => {
    if (lv === "EASY") {
      const randomURLS = randomImgChoice(5);
      setcardUrlList([...randomURLS]);
    } else if (lv === "NORMAL") {
      const randomURLS = randomImgChoice(7);
      setcardUrlList([...randomURLS]);
    } else if (lv === "HARD") {
      const randomURLS = randomImgChoice(9);
      setcardUrlList([...randomURLS]);
    }
  };

  //   let randomURLs = randomImgChoice(Object.values({ numOfCards }));
  //   useEffect(() => {
  //     console.log("업데이트");
  //     var cardNum = Object.values({ numOfCards });
  //     randomURLs = randomImgChoice(cardNum);
  //   }, [numOfCards]);

  console.log(cardUrlList);

  return (
    <StyledMain>
      <LevelContainer>
        <LevelBtn
          title="EASY"
          targetLvBtn={targetLvBtn}
          handleOnClick={handleOnClick}
          getLevel={levelHandler}
        ></LevelBtn>
        <LevelBtn
          title="NORMAL"
          targetLvBtn={targetLvBtn}
          handleOnClick={handleOnClick}
          getLevel={levelHandler}
        ></LevelBtn>
        <LevelBtn
          title="HARD"
          targetLvBtn={targetLvBtn}
          handleOnClick={handleOnClick}
          getLevel={levelHandler}
        ></LevelBtn>
      </LevelContainer>
      <CardsContainer>
        {cardUrlList.map((imgUrls) => (
          <Card imgUrl={imgUrls} key={imgUrls}></Card>
        ))}
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
