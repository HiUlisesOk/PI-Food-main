const initialState = {
  AllRecipes: [],
  BackUpRecipes: [],
  error: "",
  favorites: [],
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET-ALL-RECIPES":
      let getRecipes = [];
      for (const recipe of payload) {
        getRecipes.push(recipe);
      }

      return {
        ...state,
        AllRecipes: getRecipes,
        BackUpRecipes: getRecipes,
        error: "",
      };

    case "SEARCH-RECIPE-NAME":
      state = { ...state, AllRecipes: payload, error: "" };

      return state;

    case "ERROR-REQUEST":
      state = { ...state, error: payload };
      return state;

    ///// <=============== ORDER-AND-FILTER ===============> /////
    case "ORDER-AND-FILTER":
      let orderState = [...state.AllRecipes];
      const backupState = [...state.BackUpRecipes];

      if (payload.filterType === "no filter") {
        orderState = [...state.BackUpRecipes];
        state = {
          ...state,
          AllRecipes: orderState,
          error: "",
        };
        payload.filter = false;
      }
      if (payload.orderType === "no order") {
        orderState = [...state.BackUpRecipes];
        state = {
          ...state,
          AllRecipes: orderState,
          error: "",
        };
        payload.order = false;
      }

      //FILTER ===============>
      if (payload.filter === true) {
        orderState = backupState.filter((recipe) => {
          return recipe.diets.find((diet) => diet.name === payload.filterType);
        });
        state = {
          ...state,
          AllRecipes: orderState,
          error: "",
        };
      }

      //ORDER ===============>
      if (payload.order === true) {
        if (payload.orderType === "Ascendente") {
          orderState = orderState.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          state = {
            ...state,
            AllRecipes: orderState,
            error: "",
          };
        } else if (payload.orderType === "Descendente") {
          orderState = orderState.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });

          state = {
            ...state,
            AllRecipes: orderState,
            error: "",
          };
        } else if (payload.orderType === "HealthScoreAscendente") {
          orderState = orderState.sort((a, b) => {
            if (a.healthScore < b.healthScore) {
              return -1;
            }
            if (a.healthScore > b.healthScore) {
              return 1;
            }
            return 0;
          });

          state = {
            ...state,
            AllRecipes: orderState,
            error: "",
          };
        } else if (payload.orderType === "HealthScoreDescendente") {
          orderState = orderState.sort((a, b) => {
            if (a.healthScore > b.healthScore) {
              return -1;
            }
            if (a.healthScore < b.healthScore) {
              return 1;
            }
            return 0;
          });

          state = {
            ...state,
            AllRecipes: orderState,
            error: "",
          };
        }
      }
      state = { ...state, AllRecipes: orderState, error: "" };

      return state;

    //FAVORITES ===============>
    case "ADD-FAVORITE":
      const allRecipes = [...state.BackUpRecipes];
      const AddFav = allRecipes.filter((recipe) => recipe.id === payload);
      state = { ...state, favorites: [...state.favorites, ...AddFav] };
      return state;

    case "DELETE-FAVORITE":
      const deleteFav = state.favorites.filter(
        (recipe) => recipe.id !== payload,
      );
      state = { ...state, favorites: deleteFav };
      return state;
    default:
      return state;
  }
};
export default Reducer;
