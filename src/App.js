import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";
import MobileCart from "./components/Cart/MobileCart";
import Content from "./components/ContentHead/Content";
import CustomizeItemModal from "./components/ItemSelect/CustomizeItemModal.js/CustomizeItemModal";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/login/login";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #ffffff;
  }

  body {
    font-size: 62.5%;
    font-family: 'Heebo', sans-serif;
  }
`;

function App() {
  // const [customizeModal, setCustomizeModal] = useState(true);

  return (
    <React.Fragment>
      <CustomizeItemModal />
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/cart" element={<MobileCart />} />
          <Route path="/checkout" element={<Content />} />
          <Route path="/all" element={<Content />} />
          <Route path="/food" element={<Content />} />
          <Route path="/alcohol" element={<Content />} />
          <Route path="/cold-drinks" element={<Content />} />
          <Route path="/hot-drinks" element={<Content />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
