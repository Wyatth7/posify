import React from "react";
import styled from "styled-components";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import Nav from "./Nav/Nav";

const HEADER = styled.div``;

const Header = (props) => {
  return (
    <HEADER>
      <CompanyInfo />
      <Nav />
    </HEADER>
  );
};

export default Header;
