import React from "react";
import styled from "styled-components";
import Button from "../../../reusable/Button/Button";
import { FiHelpCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const COMPANYINFO = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 1.7rem;
`;

const SubHead = styled.p`
  text-align: start;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  padding: 0 0.5rem;
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    color: #ef7614;
  }
`;

const CompanyInfo = (props) => {
  return (
    <COMPANYINFO>
      <Left>
        <Header>Simon's BBQ Team</Header>
        <SubHead>Location ID# SIMON123</SubHead>
      </Left>
      <Right>
        <Left></Left>
        <Links>
          <Link to={"/kiosk"}>Orders</Link>
          <Link to={"/kiosk"}>Reports</Link>
        </Links>
        <Button icon={<FiHelpCircle />}>Info</Button>
      </Right>
    </COMPANYINFO>
  );
};

export default CompanyInfo;
