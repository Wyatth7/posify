import React from "react";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";
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
      <div>
        <Routes>
          <Route path="/all" element={<Content />} />
          <Route path="/food" element={<Content />} />
          <Route path="/alcohol" element={<Content />} />
          <Route path="/cold-drinks" element={<Content />} />
          <Route path="/hot-drinks" element={<Content />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
