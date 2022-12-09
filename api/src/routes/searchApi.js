const axios = require("axios");
const { Diet, Recipe, RecipesDiet } = require("../db");

require("dotenv").config();
const { YOUR_API_KEY, spoonacularURL } = process.env;

///////////////////////////////////////////////////////
const getApiInfo = async () => {
  const dbRecipes = await Recipe.findAll();
  if (dbRecipes.length) {
    console.log("vengo de la db");
    return dbRecipes;
  }
  // const searchApi = await axios.get(
  //   `${spoonacularURL}/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`,
  //   {
  //     headers: { Accept: "application/json", "Accept-Encoding": "identity" },
  //     params: { trophies: true },
  //   },
  // );

  const searchApi = await axios.get(
    `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`,
  );

  const mappedApi = await searchApi.data.results.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      dishTypes: recipe.dishTypes.join(", "),
      diets: recipe.diets,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      steps:
        recipe.analyzedInstructions[0]?.steps
          .map((step) => {
            return `${step.number} - ${step.step}`;
          })
          .join(" \n") || "",
    };
  });

  const AllDiets = await getDiets();
  // console.log(dietsInfo);
  async function getDiets() {
    //Creamos un array con todas las dietas posibles
    const AllDiets = [
      "gluten free",
      "ketogenic",
      "vegetarian",
      "lacto ovo vegetarian",
      "ovo-vegetarian",
      "vegan",
      "pescatarian",
      "paleolithic",
      "primal",
      "low fodmap",
      "whole 30",
      "dairy free",
    ];
    //iteramos sobre cada valor del array
    //Utilizamos findOrCreate
    //Este método nos posibilita buscar
    //cualquier instancia que cumpla la condición que nosotros digamos
    // y, en el caso de que esta instancia no exista, la creará.

    for (i = 0; i < AllDiets.length; i++) {
      const [instance, created] = await Diet.findOrCreate({
        where: { name: AllDiets[i] },
      });
    }

    //Luego llamamos al metodo findAll en Diet
    //Para guardar todas las dietas de la base de datos en allDiets
    const allDiets = await Diet.findAll();

    //Retornamos todas las dietas
    return allDiets;
  }

  for (let recipe of mappedApi) {
    const [instance, created] = await Recipe.findOrCreate({
      where: {
        name: recipe.name,
        image: recipe.image,
        dishTypes: recipe.dishTypes,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        steps: recipe.steps,
      },
    });

    // let dietsIds = [];
    let apiDiets = recipe.diets;
    for (let i = 0; i < AllDiets.length; i++) {
      for (let j = 0; j < apiDiets.length; j++) {
        if (apiDiets[j] && apiDiets[j] === AllDiets[i].name) {
          // console.log("valor de i:", AllDiets[i]);
          // console.log("valor de j:", apiDiets[j]);
          // console.log(`${i} /// ${j}`);
          // dietsIds.push(AllDiets[j].id);
          instance.addDiet(AllDiets[j].id);
          // console.log(dietsIds);
        }
      }
    }
  }

  console.log("vengo de la api");
  return mappedApi;
};
module.exports = getApiInfo;
