import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const NAV = styled.nav`
  display: flex;
  overflow-x: auto;
  padding: 1.5rem 0;
`;

const Nav = (props) => {
  let navItems = [
    { name: "All Items", active: true },
    { name: "Food", active: false },
    { name: "Cold Drinks", active: false },
    { name: "Hot Drinks", active: false },
    { name: "Alcohol", active: false },
  ];

  const onNavItemClicked = () => {
    return;
  };

  return (
    <NAV>
      {navItems.forEach((el) => (
        <NavItem onClick={onNavItemClicked} active={el.active}>
          {el.name}
        </NavItem>
      ))}
      {/* <NavItem active>All Items</NavItem>
      <NavItem>Food</NavItem>
      <NavItem>Alcohol</NavItem>
      <NavItem>Cold Drinks</NavItem>
      <NavItem>Hot Drinks</NavItem> */}
    </NAV>
  );
};

export default Nav;
