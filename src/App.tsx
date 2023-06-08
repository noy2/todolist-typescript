import React from "react";
import styled from "@emotion/styled";
import TodoList from "./TodoList";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

function App() {
  return (
    <div>
      <Global styles={style} />
      <Background>
        <TodoList />
      </Background>
    </div>
  );
}

export default App;

const style = css`
  ${emotionReset}
  body {
    font-family: "SUIT";
  }
`;

const Background = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
