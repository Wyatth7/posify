import { getAuth, signOut } from "firebase/auth";

const signUserOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default signUserOut;
