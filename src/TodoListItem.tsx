import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import IconButton from "./components/IconButton";
import TodoInput from "./components/TodoInput";

interface TodoTypes {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todo: TodoTypes;
  onChange: any;
  onRemove: any;
  newText: any;
  setNewText: any;
  onChangeEditInput: any;
}

const TodoListItem = ({
  todo,
  onChange,
  onRemove,
  newText,
  setNewText,
  onChangeEditInput,
}: Props) => {
  const { id, text, checked }: TodoTypes = todo;

  const [edit, setEdit] = useState(false);

  const onClickEdit = (id: number) => {
    setNewText(todo.text);
    if (edit) {
      todo.text = newText;
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <>
      <StyledListItem>
        <Wrapper>
          <IconButton onClick={() => onChange(id)}>
            {checked ? (
              <MdCheckBox color="#277DFF" size="28" />
            ) : (
              <MdCheckBoxOutlineBlank size="28" />
            )}
          </IconButton>
          {edit ? (
            <TodoInput onChange={onChangeEditInput} value={newText} />
          ) : (
            <Text style={{ marginLeft: "8px" }} checked={checked}>
              {text}
            </Text>
          )}
        </Wrapper>
        <Wrapper>
          <TextButton onClick={() => onClickEdit(id)}>
            {edit ? <Text>Save</Text> : <Text>Edit</Text>}
          </TextButton>
          <IconButton onClick={() => onRemove(id)}>
            <HiMinus size="28" />
          </IconButton>
        </Wrapper>
      </StyledListItem>
    </>
  );
};

export default TodoListItem;

const TextButton = styled.button`
  font-family: "SUIT";
  background-color: white;
  color: #777;
  border: none;
  border-radius: 4px;
  padding: 0px 8px;
  height: 36px;

  &:hover {
    color: #000;
    border-radius: 4px;
    background-color: #ebebeb;
    background-clip: border-box;
  }

  &:active {
    color: #000;
    background-color: #dddddd;
  }

  &:first-of-type {
    margin-right: 8px;
  }
`;

const Text = styled.div<{ checked?: boolean }>`
  font-size: 16px;
  ${(props) =>
    props.checked &&
    css`
      color: #b4b4b4;
      text-decoration: line-through;
    `}
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
