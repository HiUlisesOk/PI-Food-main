const { Router } = require("express");
const dietGet = Router();
const { Diet, Recipe, RecipesDiet } = require("../db");
const { getDiets } = require("../controllers/index.js");
//<-------- DIETAS -------->
//Obtener todos los tipos de dieta posibles
dietGet.get("/diets", async (req, res) => {
  try {
    const getAllDiets = await getDiets();
    res.status(200).json(getAllDiets);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = dietGet;
