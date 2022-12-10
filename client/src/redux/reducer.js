const initialState = {
  AllRecipes: [],
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
      // console.log(payload);
      return { ...state, AllRecipes: getRecipes, error: "" };

    case "SEARCH-RECIPE-NAME":
      state = { ...state, searchByName: [payload], error: "" };
      return state;
    case "ERROR-REQUEST":
      state = { ...state, error: payload };
      return state;
    default:
      return state;
  }
};
export default Reducer;
