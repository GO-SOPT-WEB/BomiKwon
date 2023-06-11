import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import "./App.css";
import ModalPortal from "./Components/ModalPortal";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/Styles/GlobalStyle";
import theme from "./assets/Styles/theme";
import { useRecoilState, useRecoilValue } from "recoil";
import levelAtom from "./recoil/level/atom";
import { answerAtom } from "./recoil/answer/atom";
import { clickedReset } from "./recoil/answer/selectors";
/**
 * App 컴포넌트 : Header와 Main을 포함하는 App 컴포넌트
 */
function App() {
  const answer = useRecoilValue(answerAtom);
  const level = useRecoilValue(levelAtom);
  const [reset, setReset] = useRecoilState(clickedReset);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const modalOpen = () => {
    SetIsModalOpen(true);
    console.log(isModalOpen);
  };

  useEffect(() => {
    if (answer === level && level !== 0) {
      modalOpen();
    }
  }, [answer]); //cardLength

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isModalOpen && (
          <ModalPortal
            open={isModalOpen}
            onClose={() => {
              SetIsModalOpen(false);
              setReset((prev) => !prev);
            }}
          />
        )}
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
