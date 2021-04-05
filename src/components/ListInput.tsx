import React from "react";
import styled from "styled-components";

const ListInput = () => {
  return (
    <Label>
      <AllSelectBtn>▽</AllSelectBtn>
      <TodoInput></TodoInput>
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

export default ListInput;
