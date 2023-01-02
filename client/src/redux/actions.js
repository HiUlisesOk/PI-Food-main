import axios from "axios";
export const GetRecipes = () => {
  return async function (dispatch) {
    const axiosResponse = await axios.get(`/getAllRecipes`);
    dispatch({ type: "GET-ALL-RECIPES", payload: axiosResponse.data });
  };
};

export const SearchRecipeByName = (name) => {
  return async function (dispatch) {
    try {
      const axiosResponse = await axios.get(`/recipes?name=${name}`);

      dispatch({ type: "SEARCH-RECIPE-NAME", payload: axiosResponse.data });
    } catch (error) {
      dispatch({ type: "ERROR-REQUEST", payload: error.response.data });
    }
  };
};

export const OrderAndFilter = (orderAndFilter) => {
  return function (dispatch) {
    dispatch({ type: "ORDER-AND-FILTER", payload: orderAndFilter });
  };
};

export const addFavorites = (id) => {
  return function (dispatch) {
    dispatch({ type: "ADD-FAVORITE", payload: id });
  };
};

export const deleteFav = (id) => {
  return function (dispatch) {
    dispatch({ type: "DELETE-FAVORITE", payload: id });
  };
};
