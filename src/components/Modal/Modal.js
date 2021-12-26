import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../../store/store";

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
  const [state, dispatch] = useStore();

  const closeModal = () => {
    dispatch("CLOSE_CUSTOMIZE_MODAL", false);
  };

  useEffect(() => {
    console.log(state);
  });

  return (
    <React.Fragment>
      {state.customizeModal ? (
        <MODAL>
          <Background onClick={closeModal} />
          <Content>{props.children}</Content>
        </MODAL>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
