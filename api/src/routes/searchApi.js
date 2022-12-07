const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY, spoonacularURL } = process.env;
const getApiInfo = async () => {
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
      image: recipe.image,
      name: recipe.title,
      dishTypes: recipe.dishTypes,
      diets: recipe.diets,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      steps: recipe.analyzedInstructions[0]?.steps
        .map((step) => {
          return `${step.number} - ${step.step}`;
        })
        .join(" \n"),
    };
  });

  return mappedApi;
};

module.exports = getApiInfo;
