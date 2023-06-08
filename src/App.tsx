import React from "react";
import styled from "@emotion/styled";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <Background>
        <TodoList />
      </Background>
    </div>
  );
}

export default App;

const Background = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
