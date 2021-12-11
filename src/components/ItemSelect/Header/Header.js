import React from "react";
import styled from "styled-components";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import Nav from "./Nav/Nav";

const HEADER = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  background-color: #ffffff;
`;

const Header = (props) => {
  return (
    <HEADER>
      <CompanyInfo />
      <Nav />
    </HEADER>
  );
};

export default Header;
