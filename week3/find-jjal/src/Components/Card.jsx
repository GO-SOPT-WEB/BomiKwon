import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

/**
 * Card 컴포넌트 : 카드 하나하나의 이미지, 뒷면/ 후면을 관리
 * - props : imgUrl (CardList 컴포넌트로부터 imgUrl을 props로 받아와 알맞은 이미지를 띄운다.)
 */
const Card = (props) => {
  const { imgUrl, clickedCards, flippedCards } = props;
  const [isCardClick, setIsCardClick] = useState(false);
  // console.log(flippedCards);
  return (
    <CardContainer
      onClick={() => {
        clickedCards(imgUrl), setIsCardClick(true);
      }}
    >
      <BackCard></BackCard>
      <CardImg src={imgUrl} alt="카드에 삽입될 이미지" />
      {isCardClick === false ? <FrontCard></FrontCard> : <></>} 
    </CardContainer>
  );
};
export default Card;
const CardContainer = styled.div`
  margin: 1rem;
  width: 85%;
  height: 16rem;
  position: relative;
`;
const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  position: absolute;
  /* ${(props) =>
    props.isCardClick
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}; */
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const BackCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: solid 1px black;
  position: absolute;
`;
