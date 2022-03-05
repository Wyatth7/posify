import React from "react";
import styled from "styled-components";

const CATEGORY_BUTTON = styled.button`
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  background-color: ${(props) =>
    props.active === props.title ? "#ef7614" : "#ffffff"};
  color: ${(props) => (props.active === props.title ? "#ffffff" : "#000000")};
  border: 1px solid
    ${(props) => (props.active === props.title ? "#ef7614" : "#ffffff")};
  border-radius: 25px;
  margin: auto 1rem auto 0;
  text-decoration: none;
  height: inherit;
  transition: all 0.1s;

  &:hover {
    background-color: #ef7614;
    border-color: #ef7614;

    p {
      color: #ffffff;
    }
  }

  &.active {
    background-color: #ef7614;
    border: 1px solid #ef7614;

    p {
      color: #ffffff;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  color: ${(props) => (props.active === props.title ? "#ffffff" : "#000000")};
  height: 100%;
  margin: auto 0;
  text-align: center;
  white-space: nowrap;
`;

const CategoryButton = (props) => {
  const { title, activeString } = props;

  return (
    <CATEGORY_BUTTON
      active={activeString}
      title={title}
      onClick={() => props.clicked(title)}
    >
      <Paragraph active={activeString} title={title}>
        {title}
      </Paragraph>
    </CATEGORY_BUTTON>
  );
};

export default CategoryButton;
