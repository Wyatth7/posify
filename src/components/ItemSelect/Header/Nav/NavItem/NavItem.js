import React from "react";
import styled from "styled-components";

const NAVITEM = styled.div`
  display: flex;
  margin-right: 1rem;
  padding: 0.2rem 2rem;
  background-color: ${(props) => (props.active ? `#ef7614` : `#ffffff`)};
  border: 1px solid ${(props) => (props.active ? `#ef7614` : `#ffffff`)};
  border-radius: 25px;
  margin: auto 1rem auto 0;
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  color: ${(props) => (props.active ? `#ffffff` : `#000000`)};
  height: 100%;
  margin: auto 0;
`;

const NavItem = (props) => {
  return (
    <NAVITEM active={props.active}>
      <Paragraph active={props.active}>{props.children}</Paragraph>
    </NAVITEM>
  );
};

export default NavItem;
