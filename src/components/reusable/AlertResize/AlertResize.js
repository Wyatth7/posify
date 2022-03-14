import React from "react";
import styled from "styled-components";

const ALERT_RESIZE = styled.div`
  z-index: 2000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Header = styled.h1`
  color: #ef7614;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
`;

const AlertResize = (props) => {
  return (
    <ALERT_RESIZE>
      <Header>Application not viewable on screens smaller than 950px.</Header>
    </ALERT_RESIZE>
  );
};

export default AlertResize;
