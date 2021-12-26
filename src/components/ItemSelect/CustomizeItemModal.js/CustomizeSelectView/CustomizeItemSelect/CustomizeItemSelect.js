import React, { useState } from "react";
import styled from "styled-components";
import CustomizableItems from "./CustomizableItems/CustomizableItems";
import SelectHeader from "./SelectHeader/SelectHeader";

const CUSTOMIZE_ITEM_SELECT = styled.div`
  margin-top: 1rem;
`;

// Takes in an object with a title and array.
// SelectHeader is given the title
// Calls CustomizableItems for elements in array.
const CustomizeItemSelect = (props) => {
  const [showItems, setShowItems] = useState(false);

  const showItemsHander = () => {
    setShowItems(!showItems);
  };

  return (
    <CUSTOMIZE_ITEM_SELECT>
      <SelectHeader selected={showItemsHander} title={props.items.category} />
      {showItems ? <CustomizableItems items={props.items.items} /> : null}
    </CUSTOMIZE_ITEM_SELECT>
  );
};

export default CustomizeItemSelect;
