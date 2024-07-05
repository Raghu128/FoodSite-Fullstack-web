import { updateLogin } from "../redux/user.js";

async function fetchingLogin(dispatch) {
  try {
    const response = await fetch("http://localhost:3000/api/isLogin", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = (await response.json()).dbUser;
      dispatch(updateLogin(data));
    } else {
      const errorData = await response.json();
      console.error("Failed to fetch user data:", errorData.message);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}




export {fetchingLogin};
