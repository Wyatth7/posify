import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Content from "./components/ContentHead/Content";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: 'Heebo', sans-serif;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Content />
      </div>
    </React.Fragment>
  );
}

export default App;
