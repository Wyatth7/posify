import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton/CategoryButton";
import { useStore } from "./../../store/store";
import { redirectOnAuthFail } from "../../scripts/redirect-on-fail";
import { useNavigate } from "react-router-dom";

const CATEGORY_SELECTOR = styled.div`
  display: flex;
  flex: 1;
  overflow-x: auto;
`;

/**
 * Creates and handles a list of buttons.
 * Must be passed an array of objects (called "buttons") containing the following property {title: string}
 * @param {Object} props
 * @returns React component.
 */
const CategorySelector = (props) => {
  const history = useNavigate();
  const dispatch = useStore(false)[1];
  const [activeString, setActiveString] = useState("All Items");

  /**
   * Sets acitve button state.
   * @param {string} title name of button that was clicked.
   */
  const buttonClickedHandler = async (title) => {
    setActiveString(title);

    dispatch("UPDATE_FOODITEMS_BY_CATEGORY", []);
    dispatch("UPDATE_KIOSK_ITEM_LOADER", true);
    try {
      const categoryData = await axios.get("/api/v1/kiosk/getCategorizedData", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken"),
        },
        params: {
          category: title,
        },
      });

      dispatch("UPDATE_KIOSK_ITEM_LOADER", false);
      dispatch(
        "UPDATE_FOODITEMS_BY_CATEGORY",
        categoryData.data.data.foodItems
      );
      console.log(categoryData.data.data);
    } catch (err) {
      console.log(err);
      redirectOnAuthFail(history, dispatch);
    }
  };

  return (
    <CATEGORY_SELECTOR>
      {props.buttons
        ? props.buttons.map((el) => (
            <CategoryButton
              activeString={activeString}
              clicked={buttonClickedHandler}
              title={el.title}
            />
          ))
        : null}
    </CATEGORY_SELECTOR>
  );
};

export default CategorySelector;
