import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Make todo lists",
      checked: true,
    },
    {
      id: 2,
      text: "Add style",
      checked: true,
    },
    {
      id: 3,
      text: "Push to git",
      checked: false,
    },
  ]);

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const nextId = useRef(4);

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const onChange = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const onCreate = () => {
    const data = {
      id: nextId.current,
      text,
      checked: false,
    };
    nextId.current += 1;
    setTodos([...todos, data]);
    setText("");
  };

  const onRemove = (id: number) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onChangeEditInput = (e: any) => {
    setNewText(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <>
      <ListBox>
        <Title>TodoList</Title>
        <Description>Description</Description>
        <Divider />
        <StyledUl>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo}
              onChange={onChange}
              newText={newText}
              onChangeEditInput={onChangeEditInput}
              onRemove={onRemove}
              setNewText={setNewText}
            />
          ))}
        </StyledUl>
        <Divider />
        <TodoListAddItem
          handleChange={handleChange}
          onCreate={onCreate}
          text={text}
          handleKeyDown={handleKeyDown}
        />
      </ListBox>
    </>
  );
};

export default TodoList;

const ListBox = styled.div`
  width: 800px;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 16px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-left: 8px;
`;

const Divider = styled.div`
  background-color: #ebebeb;
  margin-left: -16px;
  margin-bottom: 16px;
  margin-top: 16px;
  width: calc(100% + 32px);
  height: 1px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-top: 4px;
  color: #b4b4b4;
  margin-left: 8px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
