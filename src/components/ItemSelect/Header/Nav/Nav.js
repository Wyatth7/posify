import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const NAV = styled.nav`
  display: flex;
  flex: 1;
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

  return (
    <NAV>
      {/* {navItems.forEach((el) => (
        <NavItem active={el.active}>{el.name}</NavItem>
      ))} */}
      <NavItem path={"all"}>All Items</NavItem>
      <NavItem path={"food"}>Food</NavItem>
      <NavItem path={"alcohol"}>Alcohol</NavItem>
      <NavItem path={"cold-drinks"}>Cold Drinks</NavItem>
      <NavItem path={"hot-drinks"}>Hot Drinks</NavItem>
    </NAV>
  );
};

export default Nav;
