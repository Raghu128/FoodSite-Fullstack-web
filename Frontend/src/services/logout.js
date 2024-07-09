import { updateLogout } from "../redux/user";


async function handleLogout(dispatch) {
    try {
      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        dispatch(updateLogout());
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }


export default handleLogout;