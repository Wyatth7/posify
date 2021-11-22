import React from "react";
import styled from "styled-components";
import Item from "./Item/Item";

const ITEMS = styled.div`
  display: grid;
  grid-template-columns: 100%;
`;

const Items = (props) => {
  const items = [
    {
      title: "Grilled Corn",
      subHead: "150",
      price: 1.75,
      img: "grilled-corn.png",
    },
  ];
  return (
    <ITEMS>
      {items.map((el) => (
        <Item
          key={el.title}
          title={el.title}
          subhead={el.subHead}
          price={el.price}
          img={el.img}
        />
      ))}
    </ITEMS>
  );
};

export default Items;
