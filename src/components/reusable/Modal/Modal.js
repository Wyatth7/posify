import React from "react";
import styled from "styled-components";

const MODAL = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Modal = (props) => {
  return <MODAL>{props.children}</MODAL>;
};

export default Modal;
