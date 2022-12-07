const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipesRouter = require("./recipes-get");
const recipesPost = require("./recipes-post");
const dietGet = require("./diets");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(getRecipesRouter);
router.use(recipesPost);
router.use(dietGet);

module.exports = router;
