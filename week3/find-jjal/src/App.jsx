import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/Styles/GlobalStyle";
import theme from "./assets/Styles/theme";

/**
 * App 컴포넌트 : Header와 Main을 포함하는 App 컴포넌트
 * - state  
 * 1) answer : Main으로부터 받아온 정답 수를 Header로 넘겨줌
 * 2) isResetClicked : 리셋버튼이 클릭되었는지 유무를 Header,Main으로 각각 넘겨줌
 *                    또한 Header에서 isResetBtnClicked가 업데이트 될 때마다 isResetClicked을 관리
 */
function App() {
  const [answer, setAnswer] = useState();
  const [isResetClicked, setIsResetClicked] = useState(false);

  /**
   * Main으로부터 받아온 correctNum(정답 개수)를 answer에 넣어주는 부분
   */
  const handleCorrectNum = (correctNum) => {
    setAnswer(correctNum);
  };
  /**
   * Header에서 받아온 isResetBtnClicked(클릭 유무)를 isResetClicked에 넣어주는 부분
   */
  const handleResetBtn = (tf) => {
    setIsResetClicked(tf);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          answer={answer}
          isResetBtnClicked={handleResetBtn} 
          isResetClicked={isResetClicked} 
        ></Header>
        <Main
          correctNum={handleCorrectNum}
          isResetClicked={isResetClicked}
        ></Main>
      </ThemeProvider>
    </>
  );
}

export default App;
