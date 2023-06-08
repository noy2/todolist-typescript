import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface Props {
  todo: any;
  onChange?: any;
  onRemove?: any;
  newText?: any;
  setNewText?: any;
  onChangeEditInput?: any;
}

const TodoListItem = ({
  todo,
  onChange,
  onRemove,
  newText,
  setNewText,
  onChangeEditInput,
}: Props) => {
  const { id, text, checked } = todo;

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
        </Wrapper>
        <Wrapper></Wrapper>
      </StyledListItem>
    </>
  );
};

export default TodoListItem;

const IconButton = styled.button`
  background: white;
  outline: 0;
  color: #777777;
  border: none;
  padding: 4px 4px 1px 4px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    color: black;
    border-radius: 4px;
    background-color: #ebebeb;
  }

  &:active {
    color: #000;
    background-color: #dddddd;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
