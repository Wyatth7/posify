import React from "react";
import styled from "styled-components";

const MODAL = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000082;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9997;
`;

const Content = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: transparent;
`;

const Modal = (props) => {
  return (
    <MODAL>
      <Background onClick={props.close} />
      <Content>{props.children}</Content>
    </MODAL>
  );
};

export default Modal;
