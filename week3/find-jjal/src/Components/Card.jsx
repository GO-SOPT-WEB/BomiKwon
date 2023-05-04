import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

/**
 * Card 컴포넌트 : 카드 하나하나의 이미지, 뒷면/ 후면을 관리
 * - props : imgUrl (CardList 컴포넌트로부터 imgUrl을 props로 받아와 알맞은 이미지를 띄운다.)
 */
const Card = (props) => {
  const { imgUrl, number, clickedCards, flippedCards, correctCardList } = props;

  return (
    <CardContainer
      onClick={(e) => {
        const imgClass = e.target.parentNode.childNodes[1].className.split(" ")[2]; //선택된 카드의 className을 전달 (같은 이미지를 구분하기 위함)
        clickedCards(imgUrl, imgClass);
      }}
    >
      <BackCard></BackCard>
      <CardImg src={imgUrl} alt="카드에 삽입될 이미지" className={number} />
      {flippedCards.includes(String(number)) ||
      correctCardList.includes(imgUrl) ? (
        <></>
      ) : (
        <FrontCard></FrontCard>
      )}
      {/* {isUnPair ? <FrontCard></FrontCard> : <></>} */}
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
