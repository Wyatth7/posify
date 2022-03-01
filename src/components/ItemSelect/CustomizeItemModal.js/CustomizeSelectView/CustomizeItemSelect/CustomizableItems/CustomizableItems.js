import React, { useEffect } from "react";
import styled from "styled-components";
import CustomizableItem from "./CustomizableItem/CustomizableItem";

const CUSTOMIZABLE_ITEMS = styled.div``;

const CustomizableItems = (props) => {
  const { items } = props;
  useEffect(() => {
    items.forEach((el) => {
      console.log(el);
    });
  }, [items]);

  return (
    <CUSTOMIZABLE_ITEMS>
      {props.items.map((el, index) => (
        <CustomizableItem
          key={el.id}
          index={index}
          id={el.id}
          title={el.title}
          price={el.price}
        />
      ))}
    </CUSTOMIZABLE_ITEMS>
  );
};

export default CustomizableItems;
