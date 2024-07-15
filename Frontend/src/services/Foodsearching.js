import { useDispatch } from "react-redux";
import { updateFetched, updateResult } from "../redux/searchFood";


async function FetchingSearchedFood(query) {
  const dispatch = useDispatch();
  dispatch(updateFetched(false));
    try {
      const response = await fetch("http://localhost:3000/api/data/search", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
      });
  
      if (response.ok) {
        const data = await response.json();
          dispatch(updateResult(data));
          dispatch(updateFetched(true));
      } else {
        const errorData = await response.json();
        console.error("Failed to fetch user data" ,errorData);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    dispatch(updateFetched(true));
  }
  
  
  
  
  export {FetchingSearchedFood};
  