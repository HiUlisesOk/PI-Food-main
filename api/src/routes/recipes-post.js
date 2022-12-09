const { Router } = require("express");
const recipesPost = Router();
const { Diet, Recipe, RecipesDiet } = require("../db");
const { createRecipes } = require("../controllers/index.js");
//Creamos una receta y la guardamos en la base de datos
recipesPost.post("/createRecipe", async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, dishTypes, dietId } =
      req.body;
    const myRecipe = await createRecipes(
      name,
      image,
      summary,
      healthScore,
      steps,
      dishTypes,
      dietId,
    );
    res.status(200).json(myRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = recipesPost;
