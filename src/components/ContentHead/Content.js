import React from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import ItemSelect from "../ItemSelect/ItemSelect";

const CONTENT = styled.div`
  width: 100%;
  max-height: 100vh;
`;

const Content = (props) => {
  return (
    <CONTENT>
      <ItemSelect></ItemSelect>
      <Cart></Cart>
    </CONTENT>
  );
};

export default Content;
