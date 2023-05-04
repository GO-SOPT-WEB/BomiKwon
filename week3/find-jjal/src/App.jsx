import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/Styles/GlobalStyle";
import theme from "./assets/Styles/theme";

function App() {
  const [answer, setAnswer] = useState();
  const [isResetClicked, setIsResetClicked] = useState(false);
  const handleCorrectNum = (correctNum) => {
    setAnswer(correctNum);
  };
  const handleResetBtn = (tf) => {
    setIsResetClicked(tf);
  };
  console.log(isResetClicked);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header answer={answer} isResetBtnClicked={handleResetBtn}></Header>
        <Main
          correctNum={handleCorrectNum}
          isResetClicked={isResetClicked}
        ></Main>
      </ThemeProvider>
    </>
  );
}

export default App;
