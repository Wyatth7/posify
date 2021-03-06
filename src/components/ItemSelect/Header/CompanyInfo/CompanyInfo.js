import React from "react";
import styled from "styled-components";
import Button from "../../../reusable/Button/Button";
import { FiHelpCircle } from "react-icons/fi";

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

const CompanyInfo = (props) => {
  return (
    <COMPANYINFO>
      <Left>
        <Header>Simon's BBQ Team</Header>
        <SubHead>Location ID# SIMON123</SubHead>
      </Left>
      <Right>
        <Left></Left>
        <Button icon={<FiHelpCircle />}>Info</Button>
      </Right>
    </COMPANYINFO>
  );
};

export default CompanyInfo;
