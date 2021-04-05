import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <CountItem>0 items left</CountItem>
      <Btn>All</Btn>
      <Btn>Active</Btn>
      <Btn>Completed</Btn>
      <ClearBtn>Clear completed</ClearBtn>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  width: 100%;
  border: 1px solid;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 5px 0;
`;

const CountItem = styled.div`
  cursor: default;
  position: absolute;
  top: 2px;
  left: 10px;
`;

const Btn = styled.button`
  border: none;
  background: none;
`;

const ClearBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 5px;
`;

export default Footer;
