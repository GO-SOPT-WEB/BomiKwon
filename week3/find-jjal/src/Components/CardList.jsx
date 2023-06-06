import Card from "./Card";
import { useState, useEffect } from "react";

/**
 * CardList 컴포넌트 : Card 컴포넌트를 묶은 컴포넌트
 * - props
 * 1) level (Main에서 props로 level을 전달받아, 해당 난이도에 따른 카드 개수에 맞게 출력한다)
 * 2) getAnswer : Main 컴포넌트(상위)로 현재 맞춘 쌍의 카드 개수를 전달
 * - state
 * 1) cardUrlList : level이 바뀔 때마다 해당 레벨의 카드 개수에 맞게 img url 배열을 관리
 * 2) flippedCardList : handleClickedCards을 통해 Card 컴포넌트(하위)에서 받아온 뒤집힌 카드의 imgURL을 관리
 * 3) flippedCardIDList : handleClickedCards을 통해 Card 컴포넌트(하위)에서 받아온 뒤집힌 카드의 id를 관리
 * 4) correctCardList : flippedCardList로 받아온 뒤집힌 카드가 짝일 시에, 짝을 맞춘 imgURL을 저장
 */
const CardList = (props) => {
  const { level, getAnswer, isResetClicked } = props;
  const [cardUrlList, setcardUrlList] = useState([]); // 카드에 넣을 이미지 url을 담은 배열
  const [flippedCardList, setFlippedCardList] = useState([]); //뒤집어진 한 쌍의 카드 url을 담은 배열
  const [flippedCardIDList, setFlippedCardIDList] = useState([]); //뒤집어진 카드의 id를 저장
  const [correctCardList, setCorrectCardList] = useState([]); //짝이 맞는 쌍을 담은 배열

  useEffect(() => {
    if (level === "EASY") {
      const randomURLList = randomImgChoice(5);
      randomURLList.map((url) => randomURLList.push(url)); // 쌍으로 들어가야함
      setcardUrlList(shuffle(randomURLList)); //셔플을 통해 섞은 배열
      setCorrectCardList([]); // 난이도 중간에 바꿀시, 카드 모두 뒤집어서 처음으로 돌아가기
    } else if (level === "NORMAL") {
      const randomURLList = randomImgChoice(7);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
      setCorrectCardList([]);
    } else if (level === "HARD") {
      const randomURLList = randomImgChoice(9);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
      setCorrectCardList([]);
    }
  }, [isResetClicked]); //isResetClicked이 변경될 때마다(onClick시) 카드리스트에 RESET하기 위해 전달

  useEffect(() => {
    getAnswer(correctCardList.length);
  }, [correctCardList]);

  const IMG = [
    "src/assets/Images/01.jpeg",
    "src/assets/Images/02.jpeg",
    "src/assets/Images/03.jpeg",
    "src/assets/Images/04.jpeg",
    "src/assets/Images/05.jpeg",
    "src/assets/Images/06.jpeg",
    "src/assets/Images/07.jpeg",
    "src/assets/Images/08.jpeg",
    "src/assets/Images/09.jpeg",
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
    // setFlippedCardList([]);
    // setCorrectCardList([]);
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
      setCorrectCardList([]); // 난이도 중간에 바꿀시, 카드 모두 뒤집어서 처음으로 돌아가기
    } else if (level === "NORMAL") {
      const randomURLList = randomImgChoice(7);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
      setCorrectCardList([]);
    } else if (level === "HARD") {
      const randomURLList = randomImgChoice(9);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(shuffle(randomURLList));
      setCorrectCardList([]);
    }
  }, [level]);

  /**
   * 클릭될 때마다 해당 카드의 정보를 받아오는 부분
   */
  const handleClickedCards = (card, cardID) => {
    // Card 컴포넌트로부터 클릭된 url을 받아온다
    setFlippedCardList([...flippedCardList, card]);
    setFlippedCardIDList([...flippedCardIDList, cardID]);
  };
  /**
   * 카드를 쌍으로 받아와 같은지 유무를 파악하는 부분
   */
  useEffect(() => {
    if (flippedCardList.length == 2) {
      //쌍이 이루어질 때마다 확인
      if (flippedCardList[0] === flippedCardList[1])
        setCorrectCardList([...correctCardList, flippedCardList[0]]); //같을 때 현재 뒤집한 쌍을 전달
      setTimeout(() => {
        setFlippedCardList([]); //2개 확인 후 배열 초기화
        setFlippedCardIDList([]); //2개 확인 후 배열 초기화
      }, 500);
    }
  }, [flippedCardList, flippedCardIDList]);

  return cardUrlList.map((imgUrls, idx) => (
    <Card
      imgUrl={imgUrls}
      key={idx}
      number={idx + 1}
      clickedCards={handleClickedCards}
      flippedCards={flippedCardIDList}
      correctCardList={correctCardList}
    ></Card>
  ));
};

export default CardList;
