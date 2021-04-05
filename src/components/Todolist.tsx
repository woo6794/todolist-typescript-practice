import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import List from "./List";
import ListInput from "./ListInput";

const Todolist = () => {
  return (
    <Wrap>
      <BodyWrap>
        <Title>TODO LIST</Title>
        <ListInput />
        <List />
        <Footer />
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

const Title = styled.span`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export default Todolist;
