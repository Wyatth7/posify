import { initStore } from "./store";

const configureAuthStore = () => {
  const actions = {
    UPDATE_AUTH_STATUS: (curState, bool) => {
      return { isLoggedIn: bool };
    },
  };

  initStore(actions, {
    isLoggedIn: false,
  });
};

export default configureAuthStore;
