import React, { useState } from "react";
import styled from "styled-components";

const ITEM = styled.div`
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  margin: 0.5rem 0;
`;

const HeadWrap = styled.div``;

const Header = styled.h1`
  font-weight: 500;
`;

const SubHead = styled.p``;

const DataWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img``;

const Price = styled.p``;

const Item = (props) => {
  return (
    <ITEM>
      <HeadWrap>
        <Header>{props.title}</Header>
        <SubHead>{props.subhead}g</SubHead>
      </HeadWrap>
      <DataWrap>
        <Price>${props.price}</Price>
        <Image
          src={`./../../../../../public/images/${props.img}`}
          alt={props.title}
        />
      </DataWrap>
    </ITEM>
  );
};

export default Item;
