import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArraySorter from "../../../../scripts/array-sorters";
import { useStore } from "../../../../store/store";
import CustomizeItemHeader from "../CustomizeItemHeader/CustomizeItemHeader";
import CustomizeItemSelect from "./CustomizeItemSelect/CustomizeItemSelect";

// const items = [
//   {
//     id: 0,
//     title: "Pickles",
//     price: 0.45,
//     category: "vegetable",
//   },
//   {
//     id: 1,
//     title: "Tomatoes",
//     price: 0.35,
//     category: "vegetable",
//   },
//   {
//     id: 3,
//     title: "Steak",
//     price: 2,
//     category: "meat",
//   },
// ];

const CUSTOMIZE_SELECT_VIEW = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: relative;
`;

const ContentContainer = styled.div`
  overflow: scroll;
`;

const CustomizeSelectView = (props) => {
  const [sortedItems, setSortedItems] = useState([]);
  const state = useStore()[0];

  useEffect(() => {
    setSortedItems(ArraySorter.sortArrayByCategory(state.ingredients));
  }, [setSortedItems, state]);

  return (
    <CUSTOMIZE_SELECT_VIEW>
      <CustomizeItemHeader
        title={"Ranch Burger"}
        price={state.curCustomizeObj.price}
      />
      <ContentContainer>
        {sortedItems.map((el) => (
          <CustomizeItemSelect items={el} />
        ))}
      </ContentContainer>
    </CUSTOMIZE_SELECT_VIEW>
  );
};

export default CustomizeSelectView;
