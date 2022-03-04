import React from "react";
import styled from "styled-components";
import Loader from "../../../../components/reusable/loader/loader";
import { useStore } from "../../../../store/store";
import Item from "./Item/Item";

const ITEMS = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding-top: 8.5rem;
  overflow: scroll;

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

const Items = (props) => {
  const state = useStore(true)[0];

  return (
    <React.Fragment>
      {state.products ? (
        <ITEMS>
          {state.products.map((el) => (
            <Item
              id={el._id}
              key={el.id}
              calories={el.calories}
              title={el.title}
              subhead={el.subHead}
              price={el.price}
              img={el.img}
            />
          ))}
        </ITEMS>
      ) : (
        <Loader></Loader>
      )}
    </React.Fragment>
  );
};

export default Items;
