import React from "react";
import styled from "styled-components";
import Item from "./Item/Item";

const ITEMS = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding-top: 8.5rem;

  @media (min-width: 715px) {
    grid-template-columns: 45% 45%;
    grid-gap: 2%;
    justify-content: center;
  }
`;

const Items = (props) => {
  const items = [
    {
      title: "Grilled Corn",
      subHead: "150",
      price: 1.75,
      img: "grilled-corn.png",
    },
    {
      title: "Ranch Burger",
      subHead: "150",
      price: 8.75,
      img: "grilled-corn.png",
    },
    {
      title: "Fettuccine Pasta",
      subHead: "150",
      price: 10.75,
      img: "grilled-corn.png",
    },
    {
      title: "Stuffed File Steak",
      subHead: "150",
      price: 15.75,
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
