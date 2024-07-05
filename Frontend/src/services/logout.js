// import { useDispatch } from "react-redux";
import { updateLogout } from "../redux/user";


async function handleLogout(dispatch) {
  // const dispatch = useDispatch();
    try {
      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        console.log("Logout successful");
        dispatch(updateLogout());
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }


export default handleLogout;