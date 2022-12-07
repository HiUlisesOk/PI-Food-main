const initialState = {
  AllRecipes: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET-ALL-RECIPES":
      let getRecipes = [];
      for (const recipe of payload.results) {
        getRecipes.push(recipe);
      }
      return { ...state, AllRecipes: [getRecipes] };

    default:
      return state;
  }
};
export default Reducer;
