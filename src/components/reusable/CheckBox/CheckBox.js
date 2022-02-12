import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CheckBoxContainer = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: ${(props) => (props.checked ? "#ef7614" : "#cccccc")};
  border-radius: 5px;
  transition: all 150ms;

  ${HiddenCheckBox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Paragraph = styled.p`
  padding-left: 0.5rem;
  font-size: 1rem;
  margin: auto 0;
`;

const CheckBox = (props) => {
  const { current, itemName } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (current === itemName) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [current, itemName, setChecked]);

  const selectHandler = () => {
    props.change(props.itemName);
  };

  return (
    <CheckBoxContainer onChange={selectHandler}>
      <HiddenCheckBox checked={checked} type="checkbox" />
      <StyledCheckBox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckBox>
      <Paragraph>{props.text}</Paragraph>
    </CheckBoxContainer>
  );
};

export default CheckBox;
