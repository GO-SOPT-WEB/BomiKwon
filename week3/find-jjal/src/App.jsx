import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState();
  const handleCorrectNum = (correctNum) => {
    setAnswer(correctNum);
  };
  return (
    <>
      <Header answer={answer}></Header>
      <Main correctNum={handleCorrectNum}></Main>
    </>
  );
}

export default App;
