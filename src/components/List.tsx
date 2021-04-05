import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <Label>
      <AllSelectBtn>○</AllSelectBtn>
      <TodoInput></TodoInput>
      <RemoveBtn>x</RemoveBtn>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const AllSelectBtn = styled.button`
  position: absolute;
  font-size: 40px;
  border: none;
  background: none;
`;

const TodoInput = styled.input`
  font-size: 40px;
  padding: 5px 5px 5px 60px;
`;

const RemoveBtn = styled.button`
  position: absolute;
  font-size: 40px;
  right: 0;
  border: none;
  background: none;
`;

export default List;
