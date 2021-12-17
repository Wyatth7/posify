import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "./Item/Item";

const ITEMS = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding-top: 8.5rem;

  @media only screen and (min-width: 715px) {
    grid-template-columns: 45% 45%;
    grid-gap: 2%;
    justify-content: center;
  }

  @media only screen and (min-width: 950px) {
    padding-top: 0;
    grid-template-columns: repeat(2, 1fr);
    justify-content: left;
  }

  @media only screen and (min-width: 1190px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

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
    img: "ranch-burger.jpeg",
  },
  {
    title: "Fettuccine Pasta",
    subHead: "150",
    price: 10.75,
    img: "fettuccine-alfredo.jpeg",
  },
  {
    title: "Stuffed File Steak",
    subHead: "150",
    price: 15.75,
    img: "stuffed-filet-steak.jpeg",
  },
];

const Items = (props) => {
  useEffect(() => {});

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
