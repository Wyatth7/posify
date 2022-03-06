import axios from "axios";

/**
 * Sets authentication state to false, clears authToken from client, and redirects
 * site to login.
 * @param {useNavigate} history react-router history function
 * @param {dispatch} dispatch store function to dispatch data to global state
 */
export const redirectOnAuthFail = (history, dispatch) => {
  dispatch("UPDATE_AUTH_STATUS", false);
  localStorage.setItem("authToken", "");
  history("/login");
};

/**
 * checks token status every 30 seconds
 * @param {useNavigate} history react-router history function
 * @param {dispatch} dispatch store function to dispatch data to global state
 */
export const checkUserTokenStatus = (history, dispatch) => {
  setInterval(async () => {
    try {
      if (localStorage.getItem("authToken") === "") {
        return;
      }

      const isAuthenticated = await axios.get(
        "http://localhost:8080/api/v1/auth/checkAuthUser",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );

      if (isAuthenticated.data.payload.isAuthenticated) {
        return;
      }

      redirectOnAuthFail(history, dispatch);
    } catch (err) {
      console.log(err);
      redirectOnAuthFail(history, dispatch);
    }
  }, 30000);
};
