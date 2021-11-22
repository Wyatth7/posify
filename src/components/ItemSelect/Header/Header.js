import React from "react";
import styled from "styled-components";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import Nav from "./Nav/Nav";

const HEADER = styled.div`
  padding: 1rem;
`;

const Header = (props) => {
  return (
    <HEADER>
      <CompanyInfo></CompanyInfo>
      <Nav></Nav>
    </HEADER>
  );
};

export default Header;
