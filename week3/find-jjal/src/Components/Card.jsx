import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

/**
 * Card 컴포넌트 : 카드 하나하나의 이미지, 뒷면/ 후면을 관리
 * - props
 * 1) imgUrl : CardList 컴포넌트로부터 imgUrl을 props로 받아와 알맞은 이미지를 띄운다.
 * 2) number : 카드의 인덱스key를 받아와 className으로 전달
 * 3) clickedCards : 카드 onClick 시에 상위 컴포넌트로 해당 카드의 Url, Classname을 전달 (하위 -> 상위)
 * 4) flippedCards : 현재 뒤집힌 카드를 CardList에서 받아옴 (최대 2개)
 * 5) correctCardList : 현재 짝이 맞은 뒤집힌 카드를 CardList에서 받아옴
 */
const Card = (props) => {
  const { imgUrl, number, clickedCards, flippedCards, correctCardList } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    flippedCards.includes(String(number)) || // 뒤집히거나
    correctCardList.includes(imgUrl) // 짝을 맞춘 경우
      ? setIsFlipped(true)
      : setIsFlipped(false);
  }, [flippedCards, correctCardList]);

  return (
    <CardWholeContainer>
      <CardContainer
        isFlipped={isFlipped}
        onClick={(e) => {
          const imgClass =
            e.target.parentNode.childNodes[1].className.split(" ")[2]; //선택된 카드의 className을 전달 (같은 이미지를 구분하기 위함)
          clickedCards(imgUrl, imgClass);
        }}
      >
        <BackCard></BackCard>
        <CardImg src={imgUrl} alt="카드에 삽입될 이미지" className={number} />
        <FrontCard></FrontCard>
        {/* {flippedCards.includes(String(number)) || // 뒤집히거나
        correctCardList.includes(imgUrl) ? ( // 짝을 맞춘 경우
          <></> // 앞장 카드는 생략
        ) : (
          <FrontCard></FrontCard> // 둘 다 아니면 앞장 카드로 덮는다
        )} */}
      </CardContainer>
    </CardWholeContainer>
  );
};
export default Card;
const CardWholeContainer = styled.div`
  margin: 1rem;
  width: 85%;
  height: 16rem;
  perspective: 1100px;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  cursor: pointer;

  /* &:hover{
    transform:rotateY(180deg);
  } */
  transform: ${(props) => {
    return props.isFlipped ? "rotateY(180deg)" : "rotateY(0)";
  }};
`;
// const FlippedCard = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   backface-visibility: hidden;
// `;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const BackCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;

  background-color: white;
  border: solid 1px black;
  transform: rotateY(180deg);
`;
const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;

  background-color: rgb(0, 0, 0);
`;
