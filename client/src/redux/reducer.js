const initialState = {
  AllRecipes: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET-ALL-RECIPES":
      // let getRecipes = [];
      // for (const recipe of payload) {
      //   getRecipes.push(recipe);
      // }
      console.log(payload);
      // return { ...state, AllRecipes: [getRecipes] };
      return payload;
    default:
      return state;
  }
};
export default Reducer;
