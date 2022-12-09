import axios from "axios";
export const GetRecipes = () => {
  return async function (dispatch) {
    const axiosResponse = await axios.get(
      `http://localhost:3001/getAllRecipes`,
    );
    dispatch({ type: "GET-ALL-RECIPES", payload: axiosResponse.data });
  };
};
