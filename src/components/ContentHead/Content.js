import MediaQuery from "react-responsive";

import React, { useEffect } from "react";
import styled from "styled-components";
import MobileCartButton from "../Cart/MobileCartContent/MobileCart/MobileCartButton";
import ItemSelect from "../ItemSelect/ItemSelect";
// import MobileCart from "../Cart/MobileCart";
import Cart from "../Cart/Cart";
import axios from "axios";
import { useStore } from "../../store/store";

const CONTENT = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  padding: 0 1rem;

  @media only screen and (min-width: 950px) {
    display: flex;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const PaddingDiv = styled.div`
//   padding: 0 2rem;
// `;

const Content = (props) => {
  const dispatch = useStore(false)[1];

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    const func = async () => {
      try {
        const initData = await axios.get(
          "http://localhost:8080/api/v1/kiosk/getInitData",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
        console.log(initData.data);
        dispatch("INIT_USER_KIOSK", initData.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, [dispatch]);

  return (
    <CONTENT>
      <ItemSelect />
      <MediaQuery maxWidth={949}>
        <Wrapper>
          <MobileCartButton />
        </Wrapper>
      </MediaQuery>
      <MediaQuery minWidth={950}>
        <Cart />
      </MediaQuery>
    </CONTENT>
  );
};

export default Content;
