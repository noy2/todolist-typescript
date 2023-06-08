import styled from "@emotion/styled";
import React from "react";
import TodoInput from "./components/TodoInput";
import IconButton from "./components/IconButton";
import { HiPlus } from "react-icons/hi2";

interface Props {
  onCreate: any;
  text: string;
  handleChange: any;
  handleKeyDown?: any;
}

const TodoListAddItem = ({
  onCreate,
  text,
  handleChange,
  handleKeyDown,
}: Props) => {
  return (
    <>
      <Frame>
        <TodoInput
          placeholder="Type here..."
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyDown}
        />
        <IconButton onClick={onCreate}>
          <HiPlus size="28px" />
        </IconButton>
      </Frame>
    </>
  );
};

export default TodoListAddItem;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
