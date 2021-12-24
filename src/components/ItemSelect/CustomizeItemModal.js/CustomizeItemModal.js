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

const CustomizeItemModal = (props) => {
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
