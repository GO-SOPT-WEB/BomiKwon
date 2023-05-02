import styled from "styled-components";

const Card = ({imgUrl}) => {
  return (
    <CardContainer>
      <BackCard></BackCard>
      <CardImg src={imgUrl} alt="카드에 삽입될 이미지" />
      {/* <FrontCard></FrontCard> */}
    </CardContainer>
  );
};
export default Card;
const CardContainer = styled.div`
  margin:1rem;
  width:75%;
  height: 16rem;
  position:relative;
`;
const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
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
