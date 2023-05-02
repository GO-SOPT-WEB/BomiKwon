import styled from "styled-components";
const Card = () => {
  return (
    <CardContainer>
      <BackCard></BackCard>
      <CardImg src="" alt="카드에 삽입될 이미지" />
      <FrontCard></FrontCard>
    </CardContainer>
  );
};
export default Card;
const CardContainer = styled.div`
  width: 20%;
  height: 20rem;
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
