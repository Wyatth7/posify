import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const INPUT_CONTAINER = styled.div`
  border-bottom: 2px solid ${(props) => (props.focus ? `#ef7614` : `#d4d4d4`)};
  cursor: text;
  transition: all 0.2s;

  &:focus-within,
  &:hover {
    border-color: #ef7614;
  }
`;

const Paragraph = styled.p`
  /* ${(props) =>
    props.focus ? "font-size: .5rem; margin-top: -.5rem" : null} */
  font-size: ${(props) => (props.focus ? ".7rem" : "1rem")};
  margin-top: ${(props) => (props.focus ? "-.5rem" : "0")}
  color: #4d4d4d;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #4d4d4d;
  border: none;
  outline: none;
  padding: 0.5rem 0 0.5rem 0;

  ::placeholder {
    font-size: 1rem;
    color: #000000;
    font-family: "Heebo", sans-serif;
  }
`;

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputRef.current.value !== "") {
      setFocused(true);
    }
  }, [setFocused, inputRef, focused]);

  const focusHandler = () => {
    setFocused(!focused);
  };

  return (
    <INPUT_CONTAINER focus={focused} onClick={focusHandler}>
      <InputField
        ref={inputRef}
        placeholder={props.text}
        type={props.type}
        required
      />
    </INPUT_CONTAINER>
  );
};

export default Input;
