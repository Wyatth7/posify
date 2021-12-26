import React from "react";
import styled from "styled-components";
import Modal from "../../Modal/Modal";
import CustomizeReview from "./CustomizeReview/CustomizeReview";
import CustomizeSelectView from "./CustomizeSelectView/CustomizeSelectView";

const CUSTOMIZE_ITEM_MODAL = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 12px;
  z-index: 9999;
`;

// const obj = {
//   id: randomNum (for react key prop)
//   title: name of item
//   price: total price of item
//   ingredients: [
// {
// id: (actual id for element, also react key prop)
// title: ingredient title
// price: ingredient price
// }
//    ]
// }

const CustomizeItemModal = (props) => {
  // const [ItemObject, setItemObject] = useState({});
  // const baseObj = useState({
  //   basePrice: props.price,
  //   title: props.title,
  //   ingredients: props.ingredients,
  // })[0];

  // useEffect(() => {
  //   setItemObject({
  //     ...baseObj,
  //     id: Math.random(),
  //   });
  // }, [setItemObject, baseObj]);

  // const [state, dispatch] = useStore();

  return (
    <Modal close={props.close}>
      <CUSTOMIZE_ITEM_MODAL>
        <CustomizeSelectView />
        <CustomizeReview />
      </CUSTOMIZE_ITEM_MODAL>
    </Modal>
  );
};

export default CustomizeItemModal;
