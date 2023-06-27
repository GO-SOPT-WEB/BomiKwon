import React from "react";
import styled from "styled-components";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <St.PageWrapper>
      <Header />
      {children}
    </St.PageWrapper>
  );
};
export default PageLayout;
const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};
