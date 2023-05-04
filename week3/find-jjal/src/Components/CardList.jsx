import Card from "./Card";
import { useState, useEffect } from "react";

/**
 * CardList 컴포넌트 : Card 컴포넌트를 묶은 컴포넌트
 * - props : level (Main에서 props로 level을 전달받아, 해당 난이도에 따른 카드 개수에 맞게 출력한다)
 * - state : cardUrlList (level이 바뀔 때마다 해당 레벨의 카드 개수에 맞게 img url 배열을 관리)
 */
const CardList = ({ level }) => {
  const [cardUrlList, setcardUrlList] = useState([]); // 카드에 넣을 이미지 url을 담은 배열
  const [flippedCardList, setFlippedCardList] = useState([]); //뒤집어진 한 쌍의 카드 url을 담은 배열
  const [flippedCardIDList,setFlippedCardIDList]=useState([]); //뒤집어진 카드의 id를 저장
  const [correctCardList,setCorrectCardList]=useState([]);
  const [wrongCardList, setWrongCardList] = useState([]);
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
      cnt += 1;
    }
    return newImgs;
  };

  // 처음에 로드될 때는 빈 배열로 설정
  useEffect(() => {
    setcardUrlList([]);
    setFlippedCardList([]);
  }, []);

  /**
   * 레벨이 업데이트 될 때마다 난이도에 따른
   * 카드에 들어갈 이미지 url을 랜덤으로 지정
   */
  useEffect(() => {
    if (level === "EASY") {
      const randomURLList = randomImgChoice(5);
      randomURLList.map((url) => randomURLList.push(url)); // 쌍으로 들어가야함
      setcardUrlList(shuffle(randomURLList)); //셔플을 통해 섞은 배열
    } else if (level === "NORMAL") {
      const randomURLList = randomImgChoice(7);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
    } else if (level === "HARD") {
      const randomURLList = randomImgChoice(9);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
    }
  }, [level]);

  /**
   * 카드를 쌍으로 받아와 같은지 유무를 파악하는 부분
   */
  const handleClickedCards = (card,cardID) => {
    // Card 컴포넌트로부터 클릭된 url을 받아온다
    setFlippedCardList([...flippedCardList, card]);
    setFlippedCardIDList([...flippedCardIDList,cardID]);
  };
  useEffect(() => {
    if (flippedCardList.length == 2) {
      //쌍이 이루어질 때마다 확인
      flippedCardList[0] === flippedCardList[1]
        ? setCorrectCardList([...flippedCardList]) //같을 때 현재 뒤집한 쌍을 전달
        : setWrongCardList([...flippedCardIDList]); //다를 때는 카드 각각의 id를 전달
      setFlippedCardList([]); //2개 확인 후 배열 초기화
      setFlippedCardIDList([]); //2개 확인 후 배열 초기화
    }
  }, [flippedCardList, flippedCardIDList]);

  return cardUrlList.map((imgUrls, idx) => (
    <Card
      imgUrl={imgUrls}
      key={idx}
      number={idx}
      clickedCards={handleClickedCards}
      flippedCards={correctCardList}
      unFlippedCards={wrongCardList} //다시 뒤집어야 하는 틀린 배열을 전달
    ></Card>
  ));
};

export default CardList;
