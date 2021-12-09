import React from "react";
import styled from "styled-components";
import MobileCartButton from "../Cart/MobileCart/MobileCart";
import ItemSelect from "../ItemSelect/ItemSelect";

const CONTENT = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = (props) => {
  return (
    <CONTENT>
      <ItemSelect />
      <Wrapper>
        <MobileCartButton />
      </Wrapper>
    </CONTENT>
  );
};

export default Content;
