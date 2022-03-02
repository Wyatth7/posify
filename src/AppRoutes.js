import React from "react";
import { useStore } from "./store/store";
import { Navigate, Route } from "react-router-dom";
import Content from "./pages/kiosk/ContentHead/Content";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/login";

const Routes = (props) => {
  const store = useStore()[0];

  return (
    <React.Fragment>
      <Routes>
        {store.isLoggedIn ? (
          <React.Fragment>
            {/* <Route path="/cart" element={<MobileCart />} /> */}
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
    </React.Fragment>
  );
};

export default Routes;
