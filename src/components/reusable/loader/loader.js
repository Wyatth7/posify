import React from "react";
import styled, { keyframes } from "styled-components";

const lsdEllipsis1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const lsdEllipsis2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const lsdEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LOADER = styled.div`
  z-index: 1010;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.5px);
`;

const BackGround = styled.div`
  filter: blur(2.5px);
`;

const Spinner = styled.div`
  z-index: 1009;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #ef7614;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${lsdEllipsis1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${lsdEllipsis2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${lsdEllipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${lsdEllipsis3} 0.6s infinite;
  }
`;

const EmptyDiv = styled.div``;

const Loader = (props) => {
  return (
    <LOADER>
      <BackGround></BackGround>
      <Spinner>
        <EmptyDiv></EmptyDiv>
        <EmptyDiv></EmptyDiv>
        <EmptyDiv></EmptyDiv>
        <EmptyDiv></EmptyDiv>
      </Spinner>
    </LOADER>
  );
};

export default Loader;
