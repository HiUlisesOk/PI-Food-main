const initialState = {
  AllRecipes: [],
  pagination: [],
  searchByName: [],
  error: "",
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET-ALL-RECIPES":
      let getRecipes = [];
      for (const recipe of payload) {
        getRecipes.push(recipe);
      }

      return { ...state, AllRecipes: getRecipes, error: "" };

    case "SEARCH-RECIPE-NAME":
      state = { ...state, pagination: [], searchByName: [payload], error: "" };
      return state;
    case "ERROR-REQUEST":
      state = { ...state, error: payload };
      return state;
    case "PAGINATION":
      const paginationState = payload.data.slice(
        payload.pagination.limit,
        payload.pagination.offset,
      );
      state = { ...state, error: "", pagination: paginationState };
      return state;
    default:
      return state;
  }
};
export default Reducer;
