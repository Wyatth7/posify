import axios from "axios";

export const checkUserAuth = async () => {
  try {
    const auth = await axios.get(
      "http://localhost:8080/api/v1/auth/checkAuthUser",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    return auth.data.payload.isAuthenticated === true;
  } catch (err) {
    return false;
  }
};
