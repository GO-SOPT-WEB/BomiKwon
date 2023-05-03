import Card from "./Card";
import { useState, useEffect } from "react";
const CardList = ({ level }) => {
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
      newImgs.push(IMG[randomIndex]); //쌍으로 넣어줌
      cnt += 1;
    }
   
    return shuffle(newImgs);
  };

  useEffect(() => {
    setcardUrlList([]);
  }, []);

  useEffect(() => {
    if (level === "EASY") {
      const randomURLList = randomImgChoice(5);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(randomURLList);
    } else if (level === "NORMAL") {
      const randomURLList = randomImgChoice(7);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(randomURLList);
    } else if (level === "HARD") {
      const randomURLList = randomImgChoice(9);
      randomURLList.map((url) => randomURLList.push(url));
      setcardUrlList(randomURLList);
    }
  }, [level]);


  return cardUrlList.map((imgUrls, idx) => (
    <Card imgUrl={imgUrls} key={idx}></Card>
  ));
};

export default CardList;
