import MediaQuery from "react-responsive";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MobileCartButton from "../Cart/MobileCartContent/MobileCart/MobileCartButton";
import ItemSelect from "../ItemSelect/ItemSelect";
// import MobileCart from "../Cart/MobileCart";
import Cart from "../Cart/Cart";
import { useStore } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { redirectOnAuthFail } from "../../../scripts/redirect-on-fail";

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
  const history = useNavigate();
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    const func = async () => {
      try {
        const initData = await axios.get("/api/v1/kiosk/getInitData", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        });
        if (!initData) {
          throw new Error();
        }
        dispatch("INIT_USER_KIOSK", initData.data.payload);
        dispatch("ADD_KIOSK_CATEGORIES", initData.data.payload.categories);
      } catch (err) {
        console.log(err);
        setIsErr(true);
        // redirectOnAuthFail(history, dispatch);
      }
    };
    func();
  }, [dispatch, history]);

  return (
    <CONTENT>
      <ItemSelect isErr={isErr} />
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
