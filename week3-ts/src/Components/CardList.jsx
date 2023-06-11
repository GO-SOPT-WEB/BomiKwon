import Card from "./Card";
import { useState, useEffect } from "react";
import { IMG } from "../assets/utils";
import { randomImgChoice } from "../assets/utils";
import { useRecoilValue, useRecoilState } from "recoil";
import levelAtom from "../recoil/level/atom";
import { totalAnswer } from "../recoil/answer/selectors";
import { resetAtom } from "../recoil/answer/atom";

/**
 * CardList 컴포넌트 : Card 컴포넌트를 묶은 컴포넌트
 * - props
 * - state
 * 1) cardUrlList : level이 바뀔 때마다 해당 레벨의 카드 개수에 맞게 img url 배열을 관리
 * 2) flippedCardList : handleClickedCards을 통해 Card 컴포넌트(하위)에서 받아온 뒤집힌 카드의 imgURL을 관리
 * 3) flippedCardIDList : handleClickedCards을 통해 Card 컴포넌트(하위)에서 받아온 뒤집힌 카드의 id를 관리
 * 4) correctCardList : flippedCardList로 받아온 뒤집힌 카드가 짝일 시에, 짝을 맞춘 imgURL을 저장
 */
const CardList = (props) => {
  const level = useRecoilValue(levelAtom);
  const [answer, setAnswer] = useRecoilState(totalAnswer);
  const reset = useRecoilValue(resetAtom);
  const [cardUrlList, setcardUrlList] = useState([]); // 카드에 넣을 이미지 url을 담은 배열
  const [flippedCardList, setFlippedCardList] = useState([]); //뒤집어진 한 쌍의 카드 url을 담은 배열
  const [flippedCardIDList, setFlippedCardIDList] = useState([]); //뒤집어진 카드의 id를 저장
  const [correctCardList, setCorrectCardList] = useState([]); //짝이 맞는 쌍을 담은 배열

  useEffect(() => {
    setAnswer(correctCardList.length);
  }, [correctCardList]);

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
    const randomURLList = randomImgChoice(level, IMG);
    setcardUrlList(randomURLList);
    setCorrectCardList([]); // 난이도 중간에 바꿀시, 카드 모두 뒤집어서 처음으로 돌아가기
  }, [level, reset]); //isResetClicked이 변경될 때마다(onClick시) 카드리스트에 RESET하기 위해 전달 // level이 바뀔 때마다

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
