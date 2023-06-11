import React from "react";
import styled from "styled-components";

function Modal({ onClose }) {
  const handleClose = () => {
    onClose:?.();
  };
  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}></CloseButton>
        <Contents>
          <h1>축하합니다!</h1>
          <Button onClick={handleClose}>게임으로 돌아가기</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid black;
  font-style: italic;
  font-weight: 200;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};

    color: white;
  }
`;
export default Modal;
