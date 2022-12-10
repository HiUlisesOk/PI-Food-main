import axios from "axios";
export const GetRecipes = () => {
  return async function (dispatch) {
    const axiosResponse = await axios.get(
      `http://localhost:3001/getAllRecipes`,
    );
    dispatch({ type: "GET-ALL-RECIPES", payload: axiosResponse.data });
  };
};

export const SearchRecipeByName = (name) => {
  return async function (dispatch) {
    try {
      const axiosResponse = await axios.get(
        `http://localhost:3001/recipes?name=${name}`,
      );

      dispatch({ type: "SEARCH-RECIPE-NAME", payload: axiosResponse.data });
    } catch (error) {
      dispatch({ type: "ERROR-REQUEST", payload: error.response.data });
    }
  };
};

export const SearchRecipeByid = (id) => {
  return async function (dispatch) {
    const axiosResponse = await axios.get(
      `http://localhost:3001/recipes/${id}`,
    );
    dispatch({ type: "SEARCH-RECIPE-ID", payload: axiosResponse.data });
  };
};
