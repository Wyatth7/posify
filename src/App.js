import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MobileCart from "./pages/kiosk/Cart/MobileCart";
import Content from "./pages/kiosk/ContentHead/Content";
import CustomizeItemModal from "./pages/kiosk/ItemSelect/CustomizeItemModal.js/CustomizeItemModal";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/login";
import { checkUserAuth } from "./scripts/check-user-authentication";
import { useStore } from "./store/store";
import { checkUserTokenStatus } from "./scripts/redirect-on-fail";
import AlertResize from "./components/reusable/AlertResize/AlertResize";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
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
  const history = useNavigate();
  const dispatch = useStore(false)[1];
  // const [customizeModal, setCustomizeModal] = useState(true);

  checkUserTokenStatus(history, dispatch);

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

  const setLoginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      <CustomizeItemModal />
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/login" element={<Login setLogin={setLoginHandler} />} />
          <Route
            exact
            path="/signup"
            element={<SignUp setLogin={setLoginHandler} />}
          />
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
              <Route exact path="/" element={<Navigate to="/login" />} />
              <Route exact path="*" element={<Navigate to="/login" />} />
            </React.Fragment>
          )}
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
