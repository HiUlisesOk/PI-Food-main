const initialState = {
  AllRecipes: [],
  backup: [],
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
      state = {
        ...state,
        AllRecipes: [payload],
        error: "",
      };
      return state;
    case "ERROR-REQUEST":
      state = { ...state, error: payload };
      return state;
    case "ORDER-AND-FILTER":
      let backup = [...state.AllRecipes];

      if (payload.orderType === "Ascendente" && payload.order === true) {
        const copyState = [...state.AllRecipes];
        const OrderOnly = copyState.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        return { ...state, AllRecipes: OrderOnly, error: "" };
      }
      console.log(backup);
      console.log(state);
      return state;

    default:
      return state;
  }
};
export default Reducer;
