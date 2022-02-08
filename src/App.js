import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useStore } from "./store/store";
import { createGlobalStyle } from "styled-components";
import MobileCart from "./components/Cart/MobileCart";
import Content from "./components/ContentHead/Content";
import CustomizeItemModal from "./components/ItemSelect/CustomizeItemModal.js/CustomizeItemModal";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/login";
import AppRoutes from "./AppRoutes";
import axios from "axios";
import { checkUserAuth } from "./scripts/check-user-authentication";

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

  ::placeholder {
    font-size: 1rem;
    color: #000000;
    font-family: 'Heebo', sans-serif;
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [customizeModal, setCustomizeModal] = useState(true);

  useEffect(() => {
    const func = async () => {
      if (!localStorage.getItem("authToken")) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const auth = await checkUserAuth();

        if (!auth) {
          setIsLoggedIn(false);
          return;
        }

        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    func();
  }, [setIsLoggedIn]);

  return (
    <React.Fragment>
      <CustomizeItemModal />
      <GlobalStyle />
      <div>
        <Routes>
          {isLoggedIn ? (
            <React.Fragment>
              <Route path="/cart" element={<MobileCart />} />
              <Route path="/checkout" element={<Content />} />
              <Route path="/all" element={<Content />} />
              <Route path="/food" element={<Content />} />
              <Route path="/alcohol" element={<Content />} />
              <Route path="/cold-drinks" element={<Content />} />
              <Route path="/hot-drinks" element={<Content />} />
              <Route path="/kiosk" element={<Content />} />
              <Route path="/" element={<Content />} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/" element={<Navigate to="/login" />} />
            </React.Fragment>
          )}
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
