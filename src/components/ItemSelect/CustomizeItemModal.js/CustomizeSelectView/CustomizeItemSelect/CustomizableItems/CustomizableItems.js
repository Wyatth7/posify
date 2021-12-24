import React from "react";
import styled from "styled-components";
import CustomizableItem from "./CustomizableItem/CustomizableItem";

const CUSTOMIZABLE_ITEMS = styled.div``;

const CustomizableItems = (props) => {
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
